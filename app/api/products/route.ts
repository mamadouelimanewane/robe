import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyToken, getTokenFromHeader } from '@/lib/jwt';

// GET /api/products - Liste des produits avec filtres
export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const category = searchParams.get('category');
        const occasion = searchParams.get('occasion');
        const available = searchParams.get('available');
        const featured = searchParams.get('featured');
        const limit = parseInt(searchParams.get('limit') || '50');
        const offset = parseInt(searchParams.get('offset') || '0');

        const where: any = {};

        if (category) {
            where.category = category;
        }

        if (occasion) {
            where.occasion = {
                has: occasion,
            };
        }

        if (available !== null && available !== undefined) {
            where.available = available === 'true';
        }

        if (featured !== null && featured !== undefined) {
            where.featured = featured === 'true';
        }

        const [products, total] = await Promise.all([
            prisma.product.findMany({
                where,
                take: limit,
                skip: offset,
                orderBy: {
                    createdAt: 'desc',
                },
                include: {
                    _count: {
                        select: {
                            reviews: true,
                            favorites: true,
                        },
                    },
                },
            }),
            prisma.product.count({ where }),
        ]);

        return NextResponse.json({
            products,
            total,
            limit,
            offset,
        });
    } catch (error) {
        console.error('Error fetching products:', error);
        return NextResponse.json(
            { error: 'Erreur lors de la récupération des produits' },
            { status: 500 }
        );
    }
}

// POST /api/products - Créer un nouveau produit (Admin uniquement)
export async function POST(request: NextRequest) {
    try {
        // Vérifier l'authentification
        const token = getTokenFromHeader(request.headers.get('authorization'));
        if (!token) {
            return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
        }

        const payload = verifyToken(token);
        if (!payload || (payload.role !== 'ADMIN' && payload.role !== 'SUPER_ADMIN')) {
            return NextResponse.json({ error: 'Accès refusé' }, { status: 403 });
        }

        const body = await request.json();

        const product = await prisma.product.create({
            data: {
                name: body.name,
                description: body.description,
                category: body.category,
                occasion: body.occasion || [],
                size: body.size || [],
                color: body.color || [],
                brand: body.brand,
                condition: body.condition || 'EXCELLENT',
                images: body.images || [],
                rentalPrice3Days: parseFloat(body.rentalPrice3Days),
                rentalPrice4Days: parseFloat(body.rentalPrice4Days),
                rentalPrice7Days: parseFloat(body.rentalPrice7Days),
                deposit: parseFloat(body.deposit),
                available: body.available !== undefined ? body.available : true,
                quantity: body.quantity || 1,
                featured: body.featured || false,
            },
        });

        return NextResponse.json(product, { status: 201 });
    } catch (error) {
        console.error('Error creating product:', error);
        return NextResponse.json(
            { error: 'Erreur lors de la création du produit' },
            { status: 500 }
        );
    }
}

// PUT /api/products - Mise à jour en masse (Admin uniquement)
export async function PUT(request: NextRequest) {
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
        const { ids, updates } = body;

        if (!ids || !Array.isArray(ids) || ids.length === 0) {
            return NextResponse.json(
                { error: 'IDs requis' },
                { status: 400 }
            );
        }

        const result = await prisma.product.updateMany({
            where: {
                id: {
                    in: ids,
                },
            },
            data: updates,
        });

        return NextResponse.json({ updated: result.count });
    } catch (error) {
        console.error('Error updating products:', error);
        return NextResponse.json(
            { error: 'Erreur lors de la mise à jour' },
            { status: 500 }
        );
    }
}
