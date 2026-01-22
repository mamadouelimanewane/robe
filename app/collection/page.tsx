'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart } from 'lucide-react';
import Link from 'next/link';

// DATA MOCKÉE - Images fiables (Unsplash source directe)
// J'utilise des IDs d'images spécifiques et stables
const PRODUCTS_DATA = [
    {
        id: '1',
        name: 'Robe Sirène "Almadies"',
        price: 70000,
        category: 'ROBES_SOIREE',
        image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        brand: 'Sénégal Chic',
        available: true
    },
    {
        id: '2',
        name: 'Ensemble Bazin "Teranga"',
        price: 50000,
        category: 'BOUBOUS',
        image: 'https://images.unsplash.com/photo-1607513549650-07bf115cb982?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        brand: 'Touba Couture',
        available: true
    },
    {
        id: '3',
        name: 'Tenue Mariage "Gorée"',
        price: 65000,
        category: 'MARIAGE',
        image: 'https://images.unsplash.com/photo-1546522306-69a48f6828af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        brand: 'Dakar Wedding',
        available: true
    },
    {
        id: '4',
        name: 'Robe Gala "Dakar"',
        price: 58000,
        category: 'ROBES_SOIREE',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        brand: 'Nuit Dakaroise',
        available: true
    },
    {
        id: '5',
        name: 'Boubou Soie "Saint-Louis"',
        price: 45000,
        category: 'BOUBOUS',
        image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        brand: 'Ndar Style',
        available: true
    },
    {
        id: '6',
        name: 'Robe Cocktail "Ngor"',
        price: 35000,
        category: 'ROBES_SOIREE',
        image: 'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        brand: 'Sunny Dakar',
        available: true
    },
    {
        id: '7',
        name: 'Ensemble Wax "Plateau"',
        price: 40000,
        category: 'ENSEMBLES',
        image: 'https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        brand: 'Wax Modern',
        available: true
    },
    {
        id: '8',
        name: 'Robe Cérémonie "Mermoz"',
        price: 60000,
        category: 'MARIAGE',
        image: 'https://images.unsplash.com/photo-1620215869408-54b0e5170d7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        brand: 'Prestige Dakar',
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
        { label: 'Boubous', value: 'BOUBOUS' },
        { label: 'Soirée', value: 'ROBES_SOIREE' },
        { label: 'Mariages', value: 'MARIAGE' },
    ];

    return (
        <div style={{ minHeight: '100vh', backgroundColor: 'white', fontFamily: 'sans-serif' }}>
            <Header />

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>

                {/* TITRE */}
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '10px', color: '#111' }}>
                        Notre Collection
                    </h1>
                    <p style={{ color: '#666', fontSize: '16px' }}>
                        Élégance et Tradition Sénégalaise
                    </p>
                </div>

                {/* FILTRES - CENTRÉS */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '10px' }}>
                    {categories.map((cat) => (
                        <button
                            key={cat.value}
                            onClick={() => setActiveCategory(cat.value)}
                            style={{
                                padding: '10px 25px',
                                borderRadius: '25px',
                                border: activeCategory === cat.value ? '2px solid #000' : '1px solid #ddd',
                                backgroundColor: activeCategory === cat.value ? '#000' : 'transparent',
                                color: activeCategory === cat.value ? '#fff' : '#333',
                                fontSize: '14px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* GRILLE PRODUITS - FLEXBOX WRAP ROBUSTE */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '30px',
                    justifyContent: 'flex-start' /* Aligné à gauche pour la dernière ligne */
                }}>
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            style={{
                                width: '260px', /* Largeur fixe pour garantir l'alignement */
                                flex: '0 0 auto', /* Ne pas grandir ni rétrécir */
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
                                    height: '350px', /* Hauteur fixe */
                                    backgroundColor: '#f0f0f0',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    marginBottom: '12px'
                                }}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            display: 'block'
                                        }}
                                        onError={(e) => {
                                            // Fallback image si erreur
                                            (e.target as HTMLImageElement).src = 'https://placehold.co/600x900/png?text=Image+Non+Dispo';
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
                                </div>

                                {/* Info */}
                                <div>
                                    <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#111', marginBottom: '5px', lineHeight: '1.3', height: '40px', overflow: 'hidden' }}>
                                        {product.name}
                                    </h3>
                                    <div style={{ fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                                        {product.brand}
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#d97706' }}>
                                            {product.price.toLocaleString('fr-FR')} FCFA
                                        </span>
                                        <span style={{
                                            fontSize: '12px',
                                            fontWeight: '600',
                                            textTransform: 'uppercase',
                                            borderBottom: '1px solid #111',
                                            paddingBottom: '2px'
                                        }}>
                                            Réserver
                                        </span>
                                    </div>
                                </div>

                            </Link>
                        </div>
                    ))}

                    {/* Hack pour l'alignement à gauche des derniers éléments si on utilise justify-content: space-between (pas utilisé ici mais bon à savoir) */}
                    {/* Mais avec justify-content: flex-start et gap, c'est bon */}
                </div>

                {filteredProducts.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '60px 0', color: '#666' }}>
                        Aucune tenue trouvée.
                    </div>
                )}
            </div>

            <Footer />

            {/* CSS Media Query pour mobile via balise style */}
            <style jsx>{`
                @media (max-width: 600px) {
                    div[style*="display: flex"][style*="flex-wrap: wrap"] {
                        justify-content: center !important;
                    }
                    div[style*="width: 260px"] {
                        width: 100% !important;
                        max-width: 350px !important;
                    }
                }
            `}</style>
        </div>
    );
}
