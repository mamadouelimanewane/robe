import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyToken, getTokenFromHeader } from '@/lib/jwt';

// MOCK DATA FOR DEMO - IMAGES PEXELS
const MOCK_PRODUCTS = [
    {
        id: '1',
        name: 'Robe Sirène "Mame Diarra"',
        description: 'Une magnifique robe de soirée coupe sirène rouge éclatant pour vos galas et cérémonies prestigieuses.',
        category: 'ROBES_SOIREE',
        occasion: ['GALA', 'SOIREE'],
        size: ['38', '40', '42'],
        color: ['Noire'],
        brand: 'Sénégal Chic',
        condition: 'EXCELLENT',
        images: ['https://images.pexels.com/photos/15509130/pexels-photo-15509130.jpeg?auto=compress&cs=tinysrgb&w=800'],
        rentalPrice3Days: 70000,
        rentalPrice4Days: 85000,
        rentalPrice7Days: 120000,
        deposit: 50000,
        available: true,
        featured: true,
    },
    {
        id: '2',
        name: 'Grand Boubou "Signarre"',
        description: 'Un grand boubou en Bazin riche doré, brodé à la main par les maîtres artisans de Dakar.',
        category: 'BOUBOUS',
        occasion: ['CEREMONIE', 'TABASKI', 'MARIAGE'],
        size: ['L', 'XL', 'XXL'],
        color: ['Doré'],
        brand: 'Touba Couture',
        condition: 'EXCELLENT',
        images: ['https://images.pexels.com/photos/5303015/pexels-photo-5303015.jpeg?auto=compress&cs=tinysrgb&w=800'],
        rentalPrice3Days: 50000,
        rentalPrice4Days: 60000,
        rentalPrice7Days: 90000,
        deposit: 30000,
        available: true,
        featured: true,
    },
    {
        id: '3',
        name: 'Robe Mariée "Linguère"',
        description: 'Robe de mariée traditionnelle, symbole d\'élégance.',
        category: 'MARIAGE',
        occasion: ['MARIAGE'],
        size: ['36', '38', '40'],
        color: ['Blanc/Or'],
        brand: 'Dakar Wedding',
        condition: 'EXCELLENT',
        images: ['https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=800'],
        rentalPrice3Days: 65000,
        rentalPrice4Days: 80000,
        rentalPrice7Days: 110000,
        deposit: 40000,
        available: true,
        featured: true,
    },
    {
        id: '4',
        name: 'Ensemble Soirée "Terrou-Bi"',
        description: 'Robe de soirée moderne pour vos événements.',
        category: 'ROBES_SOIREE',
        occasion: ['GALA', 'SOIREE'],
        size: ['36', '38'],
        color: ['Rouge'],
        brand: 'Nuit Dakaroise',
        condition: 'EXCELLENT',
        images: ['https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=800'],
        rentalPrice3Days: 58000,
        rentalPrice4Days: 70000,
        rentalPrice7Days: 100000,
        deposit: 40000,
        available: true,
        featured: true,
    },
    {
        id: '5',
        name: 'Boubou Bazin "Saloum"',
        description: 'Boubou élégant et coloré.',
        category: 'BOUBOUS',
        occasion: ['BAPTEME', 'CEREMONIE'],
        size: ['Unique'],
        color: ['Rose Pâle'],
        brand: 'Ndar Style',
        condition: 'TRES_BON',
        images: ['https://images.pexels.com/photos/1181292/pexels-photo-1181292.jpeg?auto=compress&cs=tinysrgb&w=800'],
        rentalPrice3Days: 45000,
        rentalPrice4Days: 55000,
        rentalPrice7Days: 80000,
        deposit: 25000,
        available: true,
        featured: false,
    },
    {
        id: '6',
        name: 'Tenue de Gala "Radisson"',
        description: 'Robe midi chic.',
        category: 'ROBES_SOIREE',
        occasion: ['SOIREE', 'WEEKEND'],
        size: ['38', '40'],
        color: ['Bleue'],
        brand: 'Sunny Dakar',
        condition: 'EXCELLENT',
        images: ['https://images.pexels.com/photos/3755918/pexels-photo-3755918.jpeg?auto=compress&cs=tinysrgb&w=800'],
        rentalPrice3Days: 35000,
        rentalPrice4Days: 45000,
        rentalPrice7Days: 60000,
        deposit: 20000,
        available: true,
        featured: false,
    },
];

// GET /api/products - Liste des produits avec filtres
export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const category = searchParams.get('category');
        const occasion = searchParams.get('occasion');
        //const available = searchParams.get('available');
        //const featured = searchParams.get('featured');
        const limit = parseInt(searchParams.get('limit') || '50');
        const offset = parseInt(searchParams.get('offset') || '0');

        // Filtrage en mémoire pour le mock
        let filteredProducts = [...MOCK_PRODUCTS];

        if (category) {
            filteredProducts = filteredProducts.filter(p => p.category === category);
        }

        if (occasion) {
            filteredProducts = filteredProducts.filter(p => p.occasion.includes(occasion));
        }

        // Pagination
        const total = filteredProducts.length;
        const products = filteredProducts.slice(offset, offset + limit);


        /* 
        // CODE ORIGINAL PRISMA (Commenté pour démo "Safe Mode")
        // Réactiver quand la DB est stable et seedée
        const [products, total] = await Promise.all([
            prisma.product.findMany({ where, ... }),
            prisma.product.count({ where }),
        ]);
        */

        return NextResponse.json({
            products,
            total,
            limit,
            offset,
        });

    } catch (error) {
        console.error('Error fetching products:', error);
        // Fallback mock en cas d'erreur
        return NextResponse.json({
            products: MOCK_PRODUCTS,
            total: MOCK_PRODUCTS.length,
            limit: 50,
            offset: 0
        });
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

        // En mode démo, on simule la création
        const newProduct = { ...body, id: Date.now().toString() };
        MOCK_PRODUCTS.push(newProduct);

        /*
        const product = await prisma.product.create({
            data: { ...body }
        });
        */

        return NextResponse.json(newProduct, { status: 201 });
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

        return NextResponse.json({ updated: 1 });
    } catch (error) {
        return NextResponse.json(
            { error: 'Erreur lors de la mise à jour' },
            { status: 500 }
        );
    }
}
