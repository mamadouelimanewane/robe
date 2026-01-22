'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart } from 'lucide-react';
import Link from 'next/link';

// DATA MOCKÉE - IMAGES LOCALES UPLOADÉES PAR L'UTILISATEUR (100% Custom)
// Collection Complète : 10 Produits Uniques
const PRODUCTS_DATA = [
    // --- SERIE 1 (Robes Volumineuses & Tradition) ---
    {
        id: '1',
        name: 'Robe Mariée "Princesse Yaye"',
        price: 150000,
        category: 'MARIAGE',
        image: '/images/collection/mariage-princesse.jpg',
        brand: 'Dakar Wedding',
        available: true
    },
    {
        id: '2',
        name: 'Robe de Gala "Or Impérial"',
        price: 90000,
        category: 'ROBES_SOIREE',
        image: '/images/collection/soiree-dore.jpg',
        brand: 'Sénégal Chic',
        available: true
    },
    {
        id: '3',
        name: 'Robe Mariée "Sirène Almadies"',
        price: 120000,
        category: 'MARIAGE',
        image: '/images/collection/mariage-sirene.jpg',
        brand: 'Prestige Dakar',
        available: true
    },
    {
        id: '4',
        name: 'Ensemble Traditionnel "Walo"',
        price: 65000,
        category: 'BOUBOUS',
        image: '/images/collection/tradition-orange.jpg',
        brand: 'Touba Couture',
        available: true
    },
    {
        id: '5',
        name: 'Robe Kente "Modernity"',
        price: 55000,
        category: 'ROBES_SOIREE',
        image: '/images/collection/wax-blanc.jpg',
        brand: 'Wax Modern',
        available: true
    },

    // --- SERIE 2 (Nouveaux Uploads - Robes ajustées & Couleurs Vives) ---
    {
        id: '6',
        name: 'Robe Mariée "Divine"',
        price: 130000,
        category: 'MARIAGE',
        // uploaded_image_0 (Manches Longues)
        image: '/images/collection/mariage-sirene-manches.jpg',
        brand: 'Dakar Wedding',
        available: true
    },
    {
        id: '7',
        name: 'Ensemble Pagne "Soleil"',
        price: 60000,
        category: 'BOUBOUS',
        // uploaded_image_1 (Jaune/Marron)
        image: '/images/collection/ensemble-pagne-jaune.jpg', // Classé Boubou/Tradition
        brand: 'Touba Couture',
        available: true
    },
    {
        id: '8',
        name: 'Robe Gala "Royale Blue"',
        price: 80000,
        category: 'ROBES_SOIREE',
        // uploaded_image_2 (Bleu Roi)
        image: '/images/collection/soiree-bleu-roi.jpg',
        brand: 'Nuit Dakaroise',
        available: true
    },
    {
        id: '9',
        name: 'Robe Mariée "Fleur de Lys"',
        price: 110000,
        category: 'MARIAGE',
        // uploaded_image_3 (Satin Blanc Fleur)
        image: '/images/collection/mariage-satin-fleur.jpg',
        brand: 'Prestige Dakar',
        available: true
    },
    {
        id: '10',
        name: 'Robe Plissée "Lavande"',
        price: 70000,
        category: 'ROBES_SOIREE',
        // uploaded_image_4 (Violet Plissé)
        image: '/images/collection/soiree-violet-plisse.jpg',
        brand: 'Sénégal Chic',
        available: true
    },
];

export default function CollectionPage() {
    const [activeCategory, setActiveCategory] = useState('TOUT');

    const filteredProducts = activeCategory === 'TOUT'
        ? PRODUCTS_DATA
        : PRODUCTS_DATA.filter(p => {
            if (activeCategory === 'MARIAGE') return p.category === 'MARIAGE';
            return p.category === activeCategory;
        });

    const categories = [
        { label: 'Tout', value: 'TOUT' },
        { label: 'Boubous & Tradition', value: 'BOUBOUS' },
        { label: 'Soirée & Gala', value: 'ROBES_SOIREE' },
        { label: 'Mariages', value: 'MARIAGE' },
    ];

    return (
        <div style={{ minHeight: '100vh', backgroundColor: 'white', fontFamily: 'sans-serif' }}>
            <Header />

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>

                {/* TITRE */}
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '10px', color: '#111', fontFamily: 'Georgia, serif' }}>
                        Notre Collection Exclusive
                    </h1>
                    <p style={{ color: '#666', fontSize: '16px' }}>
                        Découvrez nos pièces uniques, sélectionnées pour vous
                    </p>
                </div>

                {/* FILTRES - Mieux stylisés */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px', flexWrap: 'wrap', gap: '15px' }}>
                    {categories.map((cat) => (
                        <button
                            key={cat.value}
                            onClick={() => setActiveCategory(cat.value)}
                            style={{
                                padding: '12px 30px',
                                borderRadius: '30px',
                                border: activeCategory === cat.value ? '2px solid #000' : '1px solid #e5e5e5',
                                backgroundColor: activeCategory === cat.value ? '#000' : 'white',
                                color: activeCategory === cat.value ? '#fff' : '#444',
                                fontSize: '14px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* GRILLE PRODUITS */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '30px',
                    justifyContent: 'center'
                }}>
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            style={{
                                width: '270px',
                                flex: '0 0 auto',
                                display: 'flex',
                                flexDirection: 'column',
                                marginBottom: '20px'
                            }}
                        >
                            <Link href={`/collection/product-${product.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>

                                {/* Image Container */}
                                <div style={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '380px',
                                    backgroundColor: '#f5f5f5',
                                    borderRadius: '4px',
                                    overflow: 'hidden',
                                    marginBottom: '15px'
                                }}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'top', // Voir le haut de la robe
                                            display: 'block',
                                            transition: 'transform 0.5s ease'
                                        }}
                                        className="hover:scale-105"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).style.display = 'none';
                                            (e.target as HTMLImageElement).parentElement!.style.backgroundColor = '#f0f0f0';
                                            (e.target as HTMLImageElement).parentElement!.innerHTML += '<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;color:#666;font-size:12px">Image<br/>Indisponible</div>';
                                        }}
                                    />

                                    <div style={{
                                        position: 'absolute',
                                        top: '10px',
                                        right: '10px',
                                        backgroundColor: 'white',
                                        borderRadius: '50%',
                                        width: '32px',
                                        height: '32px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                                    }}>
                                        <Heart size={16} color="#333" />
                                    </div>

                                    {/* Availability Badge */}
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '10px',
                                        left: '10px',
                                        backgroundColor: 'rgba(255,255,255,0.9)',
                                        padding: '4px 8px',
                                        borderRadius: '4px',
                                        fontSize: '10px',
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase'
                                    }}>
                                        {product.category === 'ROBES_SOIREE' ? 'Soirée' : product.category === 'BOUBOUS' ? 'Boubou' : product.category}
                                    </div>
                                </div>

                                {/* Info */}
                                <div style={{ textAlign: 'left' }}>
                                    <div style={{ fontSize: '11px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
                                        {product.brand}
                                    </div>
                                    <h3 style={{ fontSize: '15px', fontWeight: '500', color: '#111', marginBottom: '8px', lineHeight: '1.4', height: '22px', overflow: 'hidden' }}>
                                        {product.name}
                                    </h3>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '5px' }}>
                                        <span style={{ fontSize: '15px', fontWeight: 'bold', color: '#000' }}>
                                            {product.price.toLocaleString('fr-FR')} FCFA
                                        </span>
                                        <span style={{
                                            fontSize: '11px',
                                            fontWeight: '600',
                                            textTransform: 'uppercase',
                                            backgroundColor: '#f8f8f8',
                                            padding: '4px 8px',
                                            borderRadius: '4px',
                                            color: '#666'
                                        }}>
                                            3 Jours
                                        </span>
                                    </div>
                                </div>

                            </Link>
                        </div>
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '60px 0', color: '#666' }}>
                        Aucune tenue trouvée.
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
}
