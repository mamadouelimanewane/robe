import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyToken, getTokenFromHeader } from '@/lib/jwt';

// POST /api/bookings - Créer une nouvelle réservation
export async function POST(request: NextRequest) {
    try {
        const token = getTokenFromHeader(request.headers.get('authorization'));
        if (!token) {
            return NextResponse.json({ error: 'Identification requise' }, { status: 401 });
        }

        const payload = verifyToken(token);
        if (!payload) {
            return NextResponse.json({ error: 'Session expirée' }, { status: 401 });
        }

        const body = await request.json();
        const { productId, startDate, endDate, rentalDays, totalPrice, deposit, paymentMethod } = body;

        // 1. Vérifier si le produit est disponible sur ces dates (Optionnel pour le MVP)
        const existingBooking = await prisma.booking.findFirst({
            where: {
                productId,
                status: { in: ['CONFIRMED', 'IN_USE'] },
                OR: [
                    { startDate: { lte: new Date(endDate) }, endDate: { gte: new Date(startDate) } }
                ]
            }
        });

        if (existingBooking) {
            return NextResponse.json({ error: 'Ce vêtement est déjà loué sur cette période' }, { status: 400 });
        }

        // 2. Créer la réservation
        const booking = await prisma.booking.create({
            data: {
                userId: payload.userId,
                productId,
                startDate: new Date(startDate),
                endDate: new Date(endDate),
                rentalDays,
                totalPrice,
                deposit,
                paymentMethod,
                paymentStatus: 'PENDING',
                status: 'PENDING',
            }
        });

        return NextResponse.json(booking, { status: 201 });
    } catch (error) {
        console.error('Booking error:', error);
        return NextResponse.json({ error: 'Une erreur est survenue lors de la réservation' }, { status: 500 });
    }
}

// GET /api/bookings - Liste des réservations (Admin ou Client pour les siennes)
export async function GET(request: NextRequest) {
    try {
        const token = getTokenFromHeader(request.headers.get('authorization'));
        const payload = verifyToken(token!);

        if (!payload) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });

        let bookings;
        if (payload.role === 'ADMIN' || payload.role === 'SUPER_ADMIN') {
            bookings = await prisma.booking.findMany({
                include: { user: true, product: true },
                orderBy: { createdAt: 'desc' }
            });
        } else {
            bookings = await prisma.booking.findMany({
                where: { userId: payload.userId },
                include: { product: true },
                orderBy: { createdAt: 'desc' }
            });
        }

        return NextResponse.json(bookings);
    } catch (error) {
        return NextResponse.json({ error: 'Erreur lors du chargement' }, { status: 500 });
    }
}
