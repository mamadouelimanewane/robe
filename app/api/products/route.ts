import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyToken, getTokenFromHeader } from '@/lib/jwt';

// MOCK DATA FOR DEMO - Garantit des images africaines et un affichage parfait
const MOCK_PRODUCTS = [
    {
        id: '1',
        name: 'Robe Sirène "Almadies"',
        description: 'Une magnifique robe de soirée coupe sirène rouge éclatant pour vos galas et cérémonies prestigieuses.',
        category: 'ROBES_SOIREE',
        occasion: ['GALA', 'SOIREE'],
        size: ['38', '40', '42'],
        color: ['Rouge'],
        brand: 'Sénégal Chic',
        condition: 'EXCELLENT',
        images: ['https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=600&h=900&fit=crop'],
        rentalPrice3Days: 70000,
        rentalPrice4Days: 85000,
        rentalPrice7Days: 120000,
        deposit: 50000,
        available: true,
        featured: true,
    },
    {
        id: '2',
        name: 'Ensemble Bazin "Teranga"',
        description: 'Un grand boubou en Bazin riche doré, brodé à la main par les maîtres artisans de Dakar.',
        category: 'BOUBOUS',
        occasion: ['CEREMONIE', 'TABASKI', 'MARIAGE'],
        size: ['L', 'XL', 'XXL'],
        color: ['Doré'],
        brand: 'Touba Couture',
        condition: 'EXCELLENT',
        images: ['https://images.unsplash.com/photo-1583391265902-29b211eac155?q=80&w=600&h=900&fit=crop'],
        rentalPrice3Days: 50000,
        rentalPrice4Days: 60000,
        rentalPrice7Days: 90000,
        deposit: 30000,
        available: true,
        featured: true,
    },
    {
        id: '3',
        name: 'Tenue Mariage "Gorée"',
        description: 'Ensemble traditionnel vert émeraude, symbole de fertilité et de prospérité.',
        category: 'ENSEMBLES',
        occasion: ['MARIAGE'],
        size: ['36', '38', '40'],
        color: ['Vert'],
        brand: 'Dakar Wedding',
        condition: 'EXCELLENT',
        images: ['https://images.unsplash.com/photo-1612809842537-5234a9325a71?q=80&w=600&h=900&fit=crop'],
        rentalPrice3Days: 65000,
        rentalPrice4Days: 80000,
        rentalPrice7Days: 110000,
        deposit: 40000,
        available: true,
        featured: true,
    },
    {
        id: '4',
        name: 'Robe Gala "Dakar"',
        description: 'Robe longue bleue nuit avec détails scintillants. L\'élégance discrète.',
        category: 'ROBES_SOIREE',
        occasion: ['GALA', 'SOIREE'],
        size: ['36', '38'],
        color: ['Bleu'],
        brand: 'Nuit Dakaroise',
        condition: 'EXCELLENT',
        images: ['https://images.unsplash.com/photo-1502980559884-8df7f3852a80?q=80&w=600&h=900&fit=crop'],
        rentalPrice3Days: 58000,
        rentalPrice4Days: 70000,
        rentalPrice7Days: 100000,
        deposit: 40000,
        available: true,
        featured: true,
    },
    {
        id: '5',
        name: 'Boubou Soie "Saint-Louis"',
        description: 'Légèreté et raffinement pour ce boubou en soie.',
        category: 'BOUBOUS',
        occasion: ['BAPTEME', 'CEREMONIE'],
        size: ['Unique'],
        color: ['Rose Pâle'],
        brand: 'Ndar Style',
        condition: 'TRES_BON',
        images: ['https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=600&h=900&fit=crop'],
        rentalPrice3Days: 45000,
        rentalPrice4Days: 55000,
        rentalPrice7Days: 80000,
        deposit: 25000,
        available: true,
        featured: false,
    },
    {
        id: '6',
        name: 'Robe Cocktail "Ngor"',
        description: 'Robe midi chic et moderne pour cocktails et réceptions.',
        category: 'ROBES_COURTES_MIDI', // Keep old enum mapping if needed or update frontend
        occasion: ['SOIREE', 'WEEKEND'],
        size: ['38', '40'],
        color: ['Jaune Moutarde'],
        brand: 'Sunny Dakar',
        condition: 'EXCELLENT',
        images: ['https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?q=80&w=600&h=900&fit=crop'],
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
