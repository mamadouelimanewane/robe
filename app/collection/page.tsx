'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart } from 'lucide-react';
import Link from 'next/link';

// DATA MOCKÉE - PHOTOS PRODUITS UNIQUEMENT (Pas de mannequins)
// Focus sur les tissus, les coupes et les motifs africains
const PRODUCTS_DATA = [
    {
        id: '1',
        name: 'Robe Sirène "Mame Diarra"',
        price: 70000,
        category: 'ROBES_SOIREE',
        // Robe Rouge/Or sur cintre ou détail tissu
        image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        brand: 'Sénégal Chic',
        available: true
    },
    {
        id: '2',
        name: 'Grand Boubou "Signarre"',
        price: 55000,
        category: 'BOUBOUS',
        // Tissus Bazin pliés colorés
        image: 'https://images.unsplash.com/photo-1607062483866-9b047a06368d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        brand: 'Touba Couture',
        available: true
    },
    {
        id: '3',
        name: 'Robe Mariée "Linguère"',
        price: 85000,
        category: 'MARIAGE',
        // Détail robe blanche dentelle
        image: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        brand: 'Dakar Wedding',
        available: true
    },
    {
        id: '4',
        name: 'Ensemble Bazin "Terrou-Bi"',
        price: 60000,
        category: 'BOUBOUS',
        // Tissu violet/or riche
        image: 'https://images.unsplash.com/photo-1574205562095-8d76df42371a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        brand: 'Nuit Dakaroise',
        available: true
    },
    {
        id: '5',
        name: 'Boubou Brodé "Saloum"',
        price: 45000,
        category: 'BOUBOUS',
        // Détail broderie or
        image: 'https://images.unsplash.com/photo-1616685933618-42245f0962b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        brand: 'Ndar Style',
        available: true
    },
    {
        id: '6',
        name: 'Robe de Soirée "Radisson"',
        price: 65000,
        category: 'ROBES_SOIREE',
        // Robe bleue détail
        image: 'https://images.unsplash.com/photo-1566810245084-5f5020125860?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        brand: 'Prestige Dakar',
        available: true
    },
    {
        id: '7',
        name: 'Tissu Wax "Walo"',
        price: 50000,
        category: 'BOUBOUS',
        // Motif Wax vibrant
        image: 'https://images.unsplash.com/photo-1588691656093-6c0757c2e88b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        brand: 'Wax Modern',
        available: true
    },
    {
        id: '8',
        name: 'Parure Mariage "Or"',
        price: 75000,
        category: 'MARIAGE',
        // Bijoux or et tissu
        image: 'https://images.unsplash.com/photo-1602751584552-8ba43d5c38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
        { label: 'Boubous & Bazin', value: 'BOUBOUS' },
        { label: 'Robes de Soirée', value: 'ROBES_SOIREE' },
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
                        Découvrez nos tissus d'exception et créations authentiques
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
                                            display: 'block',
                                            transition: 'transform 0.5s ease'
                                        }}
                                        className="hover:scale-105"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = 'https://placehold.co/600x900/png?text=Photo+Indisponible';
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
