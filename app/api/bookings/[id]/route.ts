import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyToken, getTokenFromHeader } from '@/lib/jwt';

// DELETE /api/bookings/[id] - Annuler une réservation
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const token = getTokenFromHeader(request.headers.get('authorization'));
        const payload = verifyToken(token!);

        if (!payload) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });

        // Vérifier si la réservation existe et appartient à l'utilisateur
        const booking = await prisma.booking.findUnique({
            where: { id: params.id },
            include: { user: true }
        });

        if (!booking) return NextResponse.json({ error: 'Réservation non trouvée' }, { status: 404 });

        // Seul le propriétaire ou un admin peut annuler
        if (booking.userId !== payload.userId && payload.role !== 'ADMIN' && payload.role !== 'SUPER_ADMIN') {
            return NextResponse.json({ error: 'Action non autorisée' }, { status: 403 });
        }

        await prisma.booking.delete({
            where: { id: params.id }
        });

        return NextResponse.json({ message: 'Réservation annulée avec succès' });
    } catch (error) {
        return NextResponse.json({ error: 'Erreur lors de l\'annulation' }, { status: 500 });
    }
}

// PATCH /api/bookings/[id] - Mettre à jour le statut (Admin uniquement)
export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const token = getTokenFromHeader(request.headers.get('authorization'));
        const payload = verifyToken(token!);

        if (!payload || (payload.role !== 'ADMIN' && payload.role !== 'SUPER_ADMIN')) {
            return NextResponse.json({ error: 'Non autorisé' }, { status: 403 });
        }

        const body = await request.json();
        const { status, paymentStatus } = body;

        const updatedBooking = await prisma.booking.update({
            where: { id: params.id },
            data: {
                status: status || undefined,
                paymentStatus: paymentStatus || undefined
            }
        });

        return NextResponse.json(updatedBooking);
    } catch (error) {
        return NextResponse.json({ error: 'Erreur lors de la mise à jour' }, { status: 500 });
    }
}
