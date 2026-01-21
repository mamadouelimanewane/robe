const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // Nettoyer la base de données
    await prisma.review.deleteMany();
    await prisma.favorite.deleteMany();
    await prisma.booking.deleteMany();
    await prisma.product.deleteMany();
    await prisma.user.deleteMany();

    console.log('Base de données nettoyée.');

    // Création d'un admin
    await prisma.user.create({
        data: {
            email: 'admin@robesenegal.com',
            password: 'password123', // En prod, utilisez bcrypt
            firstName: 'Admin',
            lastName: 'RobeSénégal',
            role: 'ADMIN',
        },
    });

    // Création de produits
    const products = [
        {
            name: 'Robe de Mariée "Sira" - Dentelle Royale',
            description: 'Une somptueuse robe de mariée en dentelle de Calais avec une traîne majestueuse. Parfaite pour un mariage royal à Dakar.',
            category: 'ROBES_LONGUES',
            occasion: ['MARIAGE', 'CEREMONIE'],
            size: ['38', '40', '42'],
            color: ['Blanc Ivoire'],
            brand: 'Élégance Sénégalaise',
            rentalPrice3Days: 150000,
            rentalPrice4Days: 180000,
            rentalPrice7Days: 250000,
            deposit: 100000,
            featured: true,
            images: [
                '/images/robe-mariee.png'
            ],
        },
        {
            name: 'Ensemble Grand Boubou Moderne - Soie Turquoise',
            description: 'Réinterprétation moderne du boubou traditionnel en soie sauvage turquoise avec broderies dorées faites main.',
            category: 'SMOKINGS_ENSEMBLES',
            occasion: ['BAPTEME', 'TABASKI', 'CEREMONIE'],
            size: ['Unique'],
            color: ['Turquoise', 'Or'],
            brand: 'Dakar Couture',
            rentalPrice3Days: 75000,
            rentalPrice4Days: 95000,
            rentalPrice7Days: 130000,
            deposit: 50000,
            featured: true,
            images: [
                '/images/boubou-moderne.png'
            ],
        },
        {
            name: 'Robe de Soirée "Gala Gorée" - Satin Rouge',
            description: 'Robe fourreau en satin de soie rouge avec une fente audacieuse. Idéale pour les soirées de gala et réceptions.',
            category: 'ROBES_LONGUES',
            occasion: ['GALA', 'SOIREE'],
            size: ['36', '38', '40'],
            color: ['Rouge Passion'],
            brand: 'Prestige Africa',
            rentalPrice3Days: 90000,
            rentalPrice4Days: 110000,
            rentalPrice7Days: 160000,
            deposit: 60000,
            featured: false,
            images: [
                '/images/robe-rouge.png'
            ],
        },
        {
            name: 'Costume Homme "Business Luxury" - Gris Anthracite',
            description: 'Costume trois pièces en laine mérinos fine. Coupe italienne ajustée pour une allure impeccable.',
            category: 'COSTUMES_HOMMES',
            occasion: ['MARIAGE', 'GALA'],
            size: ['48', '50', '52', '54'],
            color: ['Gris Anthracite'],
            brand: 'Gentleman Dakar',
            rentalPrice3Days: 85000,
            rentalPrice4Days: 105000,
            rentalPrice7Days: 150000,
            deposit: 70000,
            featured: false,
            images: [
                '/images/costume-luxe.png'
            ],
        }
    ];

    for (const product of products) {
        await prisma.product.create({ data: product });
    }

    console.log('Données de test insérées avec succès !');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
