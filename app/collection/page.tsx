'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Filter, Heart, Loader2 } from 'lucide-react';
import Link from 'next/link';

// DATA MOCKÉE DIRECTEMENT DANS LA PAGE POUR GARANTIR L'AFFICHAGE
const PRODUCTS_DATA = [
    {
        id: '1',
        name: 'Robe Sirène "Almadies"',
        price: 70000,
        category: 'ROBES_SOIREE',
        image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=600&h=900&fit=crop',
        brand: 'Sénégal Chic',
        available: true
    },
    {
        id: '2',
        name: 'Ensemble Bazin "Teranga"',
        price: 50000,
        category: 'BOUBOUS',
        image: 'https://images.unsplash.com/photo-1583391265902-29b211eac155?q=80&w=600&h=900&fit=crop',
        brand: 'Touba Couture',
        available: true
    },
    {
        id: '3',
        name: 'Tenue Mariage "Gorée"',
        price: 65000,
        category: 'MARIAGE',
        image: 'https://images.unsplash.com/photo-1612809842537-5234a9325a71?q=80&w=600&h=900&fit=crop',
        brand: 'Dakar Wedding',
        available: true
    },
    {
        id: '4',
        name: 'Robe Gala "Dakar"',
        price: 58000,
        category: 'ROBES_SOIREE',
        image: 'https://images.unsplash.com/photo-1502980559884-8df7f3852a80?q=80&w=600&h=900&fit=crop',
        brand: 'Nuit Dakaroise',
        available: true
    },
    {
        id: '5',
        name: 'Boubou Soie "Saint-Louis"',
        price: 45000,
        category: 'BOUBOUS',
        image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=600&h=900&fit=crop',
        brand: 'Ndar Style',
        available: true
    },
    {
        id: '6',
        name: 'Robe Cocktail "Ngor"',
        price: 35000,
        category: 'ROBES_SOIREE',
        image: 'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?q=80&w=600&h=900&fit=crop',
        brand: 'Sunny Dakar',
        available: true
    },
];

export default function CollectionPage() {
    const [activeCategory, setActiveCategory] = useState('TOUT');

    const filteredProducts = activeCategory === 'TOUT'
        ? PRODUCTS_DATA
        : PRODUCTS_DATA.filter(p => {
            if (activeCategory === 'MARIAGE') return p.category === 'MARIAGE'; // Simpification pour le filtre
            return p.category === activeCategory;
        });

    const categories = [
        { label: 'Toute la collection', value: 'TOUT' },
        { label: 'Boubous & Traditions', value: 'BOUBOUS' },
        { label: 'Robes de Soirée', value: 'ROBES_SOIREE' },
        { label: 'Mariages', value: 'MARIAGE' },
    ];

    return (
        <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
            <Header />

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>

                {/* Header Page */}
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h1 style={{ fontSize: '36px', fontWeight: 'bold', fontFamily: 'Georgia, serif', marginBottom: '15px' }}>
                        Notre Collection
                    </h1>
                    <p style={{ color: '#666', fontSize: '16px' }}>
                        Découvrez une sélection exclusive de tenues de créateurs pour vos moments d'exception
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }} className="layout-container">

                    {/* FILTRES - Affichage Horizontal pour simplicité et robustesse */}
                    <div style={{ borderBottom: '1px solid #eee', paddingBottom: '20px', overflowX: 'auto' }}>
                        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            {categories.map((cat) => (
                                <button
                                    key={cat.value}
                                    onClick={() => setActiveCategory(cat.value)}
                                    style={{
                                        padding: '10px 20px',
                                        borderRadius: '30px',
                                        border: activeCategory === cat.value ? '2px solid black' : '1px solid #ddd',
                                        backgroundColor: activeCategory === cat.value ? 'black' : 'white',
                                        color: activeCategory === cat.value ? 'white' : '#333',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s',
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* GRILLE PRODUITS */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                        gap: '30px'
                    }}>
                        {filteredProducts.map((product) => (
                            <div key={product.id} style={{ display: 'flex', flexDirection: 'column' }}>
                                <Link href={`/collection/product-${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>

                                    {/* Image Container - Ratio 3:4 */}
                                    <div style={{
                                        position: 'relative',
                                        width: '100%',
                                        paddingBottom: '133%',
                                        backgroundColor: '#f5f5f5',
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                        marginBottom: '15px'
                                    }}>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                transition: 'transform 0.5s'
                                            }}
                                        />

                                        {/* Badges */}
                                        {!product.available && (
                                            <div style={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                backgroundColor: 'rgba(0,0,0,0.7)',
                                                color: 'white',
                                                padding: '8px 16px',
                                                borderRadius: '20px',
                                                fontSize: '12px',
                                                fontWeight: 'bold'
                                            }}>
                                                Indisponible
                                            </div>
                                        )}

                                        <div style={{
                                            position: 'absolute',
                                            top: '10px',
                                            right: '10px',
                                            backgroundColor: 'white',
                                            borderRadius: '50%',
                                            width: '35px',
                                            height: '35px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                                        }}>
                                            <Heart size={18} color="#333" />
                                        </div>
                                    </div>

                                    {/* Info Produit */}
                                    <div>
                                        <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', marginBottom: '5px', letterSpacing: '0.05em' }}>
                                            {product.brand}
                                        </div>
                                        <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#111', marginBottom: '8px', lineHeight: '1.4' }}>
                                            {product.name}
                                        </h3>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div>
                                                <div style={{ fontSize: '12px', color: '#666' }}>Location dès</div>
                                                <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#d97706' }}>
                                                    {product.price.toLocaleString('fr-FR')} FCFA
                                                </div>
                                            </div>
                                            <button style={{
                                                padding: '8px 16px',
                                                backgroundColor: '#111',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '6px',
                                                fontSize: '12px',
                                                fontWeight: '600',
                                                cursor: 'pointer'
                                            }}>
                                                Réserver
                                            </button>
                                        </div>
                                    </div>

                                </Link>
                            </div>
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '60px 0', color: '#666' }}>
                            Aucune tenue trouvée dans cette catégorie.
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
}
