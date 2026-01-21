import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyToken, getTokenFromHeader } from '@/lib/jwt';

// GET /api/products/[id] - Détails d'un produit
export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const product = await prisma.product.findUnique({
            where: {
                id: params.id,
            },
            include: {
                reviews: {
                    include: {
                        user: {
                            select: {
                                firstName: true,
                                lastName: true,
                            },
                        },
                    },
                    orderBy: {
                        createdAt: 'desc',
                    },
                },
                _count: {
                    select: {
                        favorites: true,
                    },
                },
            },
        });

        if (!product) {
            return NextResponse.json(
                { error: 'Produit non trouvé' },
                { status: 404 }
            );
        }

        // Incrémenter le nombre de vues
        await prisma.product.update({
            where: { id: params.id },
            data: { views: { increment: 1 } },
        });

        return NextResponse.json(product);
    } catch (error) {
        console.error('Error fetching product:', error);
        return NextResponse.json(
            { error: 'Erreur lors de la récupération du produit' },
            { status: 500 }
        );
    }
}

// PATCH /api/products/[id] - Mise à jour d'un produit (Admin)
export async function PATCH(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const token = getTokenFromHeader(request.headers.get('authorization'));
        if (!token) {
            return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
        }

        const payload = verifyToken(token);
        if (!payload || (payload.role !== 'ADMIN' && payload.role !== 'SUPER_ADMIN')) {
            return NextResponse.json({ error: 'Accès refusé' }, { status: 403 });
        }

        const body = await request.json();

        const product = await prisma.product.update({
            where: { id: params.id },
            data: body,
        });

        return NextResponse.json(product);
    } catch (error) {
        console.error('Error updating product:', error);
        return NextResponse.json(
            { error: 'Erreur lors de la mise à jour du produit' },
            { status: 500 }
        );
    }
}

// DELETE /api/products/[id] - Supprimer un produit (Admin)
export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const token = getTokenFromHeader(request.headers.get('authorization'));
        if (!token) {
            return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
        }

        const payload = verifyToken(token);
        if (!payload || (payload.role !== 'ADMIN' && payload.role !== 'SUPER_ADMIN')) {
            return NextResponse.json({ error: 'Accès refusé' }, { status: 403 });
        }

        // Vérifier s'il y a des réservations actives
        const activeBookings = await prisma.booking.count({
            where: {
                productId: params.id,
                status: {
                    in: ['PENDING', 'CONFIRMED', 'IN_USE'],
                },
            },
        });

        if (activeBookings > 0) {
            return NextResponse.json(
                { error: 'Impossible de supprimer un produit avec des réservations actives' },
                { status: 400 }
            );
        }

        await prisma.product.delete({
            where: { id: params.id },
        });

        return NextResponse.json({ message: 'Produit supprimé avec succès' });
    } catch (error) {
        console.error('Error deleting product:', error);
        return NextResponse.json(
            { error: 'Erreur lors de la suppression du produit' },
            { status: 500 }
        );
    }
}
