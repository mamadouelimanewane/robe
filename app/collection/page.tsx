'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart } from 'lucide-react';
import Link from 'next/link';

// DATA MOCKÉE - SÉLECTION STRICTE 100% FEMMES AFRICAINES
const PRODUCTS_DATA = [
    {
        id: '1',
        name: 'Robe Sirène "Mame Diarra"',
        price: 70000,
        category: 'ROBES_SOIREE',
        // Femme noire, robe jaune moutarde, turban
        image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        brand: 'Sénégal Chic',
        available: true
    },
    {
        id: '2',
        name: 'Grand Boubou "Signarre"',
        price: 55000,
        category: 'BOUBOUS',
        // Femme noire, maquillage traditionnel, bijoux
        image: 'https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        brand: 'Touba Couture',
        available: true
    },
    {
        id: '3',
        name: 'Robe Mariée "Linguère"',
        price: 85000,
        category: 'MARIAGE',
        // Femme noire, robe blanche/or, élégante
        image: 'https://images.unsplash.com/photo-1546522306-69a48f6828af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        brand: 'Dakar Wedding',
        available: true
    },
    {
        id: '4',
        name: 'Ensemble Soirée "Terrou-Bi"',
        price: 60000,
        category: 'ROBES_SOIREE',
        // Femme noire, look fashion, peau foncée
        image: 'https://images.unsplash.com/photo-1523824921061-de82a024d62f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        brand: 'Nuit Dakaroise',
        available: true
    },
    {
        id: '5',
        name: 'Boubou Bazin "Saloum"',
        price: 45000,
        category: 'BOUBOUS',
        // Femme noire profil, élégance
        image: 'https://images.unsplash.com/photo-1589156280159-518a5828e859?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        brand: 'Ndar Style',
        available: true
    },
    {
        id: '6',
        name: 'Tenue de Gala "Radisson"',
        price: 65000,
        category: 'ROBES_SOIREE',
        // Femme noire, robe colorée
        image: 'https://images.unsplash.com/photo-1512413914633-b5043f4041ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        brand: 'Prestige Dakar',
        available: true
    },
    {
        id: '7',
        name: 'Ensemble Tradition "Walo"',
        price: 50000,
        category: 'BOUBOUS',
        // Femme noire, focus visage/bijoux
        image: 'https://images.unsplash.com/photo-1607513549650-07bf115cb982?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        brand: 'Wax Modern',
        available: true
    },
    {
        id: '8',
        name: 'Robe Cérémonie "Or"',
        price: 75000,
        category: 'MARIAGE',
        // Femme noire, tenue soirée
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
                        L'élégance de la femme africaine
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
