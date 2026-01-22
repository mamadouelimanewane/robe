const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('Start seeding...');

    try {
        // Delete existing products to avoid conflicts and clean up
        await prisma.review.deleteMany();
        await prisma.favorite.deleteMany();
        await prisma.booking.deleteMany();
        await prisma.product.deleteMany();
        console.log('Deleted existing products and related data');

        const products = [
            {
                name: 'Robe Sirène "Almadies"',
                description: 'Une magnifique robe de soirée coupe sirène rouge éclatant pour vos galas et cérémonies prestigieuses. Tissu satiné de haute qualité.',
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
                name: 'Ensemble Bazin "Teranga"',
                description: 'Un grand boubou en Bazin riche doré, brodé à la main par les maîtres artisans de Dakar. Idéal pour les mariages et Tabaski.',
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
                name: 'Tenue Mariage "Gorée"',
                description: 'Ensemble traditionnel vert émeraude, symbole de fertilité et de prospérité. Parfait pour la mariée ou les demoiselles d\'honneur.',
                category: 'MARIAGE', // Note: Using CATEGORY enum, wait, enum doesn't have MARIAGE. Use BOUBOUS or ENSEMBLES?
                // Ah, schema has ENSEMBLES. But user wants "Mariages" link. Let's use ENSEMBLES and occasional MARIAGE.
                // Wait, Header links to `?occasion=MARIAGE`.
                // Let's use ENSEMBLES here but occasion MARIAGE.
                // Actually, let's stick to the allowed Enums.
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
                name: 'Robe Gala "Dakar"',
                description: 'Robe longue bleue nuit avec détails scintillants. L\'incarnation de l\'élégance discrète pour vos soirées mondaines.',
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
                name: 'Boubou Soie "Saint-Louis"',
                description: 'Légèreté et raffinement pour ce boubou en soie. Parfait pour les climats chauds tout en restant très habillé.',
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
                name: 'Robe Cocktail "Ngor"',
                description: 'Robe midi chic et moderne pour cocktails et réceptions.',
                category: 'ROBES_COURTES_MIDI',
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

        for (const p of products) {
            const product = await prisma.product.create({
                data: p,
            });
            console.log(`Created product with id: ${product.id}`);
        }

        console.log('Seeding finished.');
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main();
