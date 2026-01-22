'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
    return (
        <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
            <Header />

            {/* HERO SECTION */}
            <section style={{
                position: 'relative',
                width: '100%',
                height: '500px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1607513549650-07bf115cb982?q=80&w=2400&auto=format&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3))'
                }} />
                <div style={{
                    position: 'relative',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 20px',
                    color: 'white',
                    zIndex: 1
                }}>
                    <p style={{
                        fontSize: '14px',
                        fontWeight: 'bold',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        marginBottom: '20px',
                        color: '#fbbf24'
                    }}>
                        Collection Tabaski 2026
                    </p>
                    <h1 style={{
                        fontSize: '48px',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                        fontFamily: 'Georgia, serif'
                    }}>
                        L'Élégance<br />à la Sénégalaise
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        marginBottom: '30px',
                        maxWidth: '600px',
                        lineHeight: '1.6'
                    }}>
                        Louez des tenues de luxe pour vos cérémonies. Plus de 500 modèles disponibles.
                    </p>
                    <Link
                        href="/collection"
                        style={{
                            display: 'inline-block',
                            backgroundColor: 'white',
                            color: 'black',
                            padding: '15px 40px',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            textDecoration: 'none',
                            transition: 'all 0.3s'
                        }}
                    >
                        Voir la Collection
                    </Link>
                </div>
            </section>

            {/* CATEGORIES */}
            <section style={{ padding: '40px 20px', borderBottom: '1px solid #e5e7eb' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '15px',
                        justifyContent: 'center'
                    }}>
                        <Link
                            href="/collection?category=BOUBOUS"
                            style={{
                                padding: '12px 24px',
                                border: '1px solid #d1d5db',
                                borderRadius: '25px',
                                fontSize: '14px',
                                fontWeight: '600',
                                textDecoration: 'none',
                                color: '#374151',
                                transition: 'all 0.3s'
                            }}
                        >
                            Bazin Riche
                        </Link>
                        <Link
                            href="/collection?category=ROBES_SOIREE"
                            style={{
                                padding: '12px 24px',
                                border: '1px solid #d1d5db',
                                borderRadius: '25px',
                                fontSize: '14px',
                                fontWeight: '600',
                                textDecoration: 'none',
                                color: '#374151'
                            }}
                        >
                            Robes de Soirée
                        </Link>
                        <Link
                            href="/collection?category=ENSEMBLES"
                            style={{
                                padding: '12px 24px',
                                border: '1px solid #d1d5db',
                                borderRadius: '25px',
                                fontSize: '14px',
                                fontWeight: '600',
                                textDecoration: 'none',
                                color: '#374151'
                            }}
                        >
                            Ensembles
                        </Link>
                        <Link
                            href="/collection?occasion=MARIAGE"
                            style={{
                                padding: '12px 24px',
                                border: '1px solid #d1d5db',
                                borderRadius: '25px',
                                fontSize: '14px',
                                fontWeight: '600',
                                textDecoration: 'none',
                                color: '#374151'
                            }}
                        >
                            Mariages
                        </Link>
                        <Link
                            href="/collection?sort=new"
                            style={{
                                padding: '12px 24px',
                                backgroundColor: '#f59e0b',
                                color: 'white',
                                borderRadius: '25px',
                                fontSize: '14px',
                                fontWeight: '600',
                                textDecoration: 'none'
                            }}
                        >
                            Nouveautés
                        </Link>
                    </div>
                </div>
            </section>

            {/* PRODUCTS GRID */}
            <section style={{ padding: '60px 20px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 style={{
                            fontSize: '32px',
                            fontWeight: 'bold',
                            fontFamily: 'Georgia, serif',
                            marginBottom: '10px'
                        }}>
                            Nos Tenues Premium
                        </h2>
                        <p style={{ color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                            Une sélection exclusive de tenues de créateurs sénégalais
                        </p>
                    </div>

                    {/* Grid Container */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                        gap: '30px',
                        marginBottom: '40px'
                    }}>

                        {/* Product 1 */}
                        <div style={{ cursor: 'pointer' }}>
                            <Link href="/collection" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{ position: 'relative', width: '100%', paddingBottom: '133%', backgroundColor: '#f3f4f6', borderRadius: '8px', overflow: 'hidden', marginBottom: '12px' }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1620215869408-54b0e5170d7e?q=80&w=600&h=900&fit=crop"
                                        alt="Ensemble Bazin"
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                    <button style={{ position: 'absolute', top: '10px', right: '10px', width: '36px', height: '36px', backgroundColor: 'white', border: 'none', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Heart style={{ width: '16px', height: '16px' }} />
                                    </button>
                                    <span style={{ position: 'absolute', bottom: '10px', left: '10px', padding: '4px 12px', backgroundColor: 'rgba(255,255,255,0.9)', fontSize: '11px', fontWeight: 'bold', borderRadius: '20px' }}>Bazin Riche</span>
                                </div>
                                <h3 style={{ fontWeight: '500', fontSize: '15px', marginBottom: '5px' }}>Ensemble Bazin Brodé "Teranga"</h3>
                                <p style={{ fontWeight: 'bold', color: '#f59e0b', fontSize: '16px' }}>45.000 FCFA <span style={{ fontSize: '12px', color: '#9ca3af', fontWeight: 'normal' }}>/ 3 jours</span></p>
                            </Link>
                        </div>

                        {/* Product 2 */}
                        <div style={{ cursor: 'pointer' }}>
                            <Link href="/collection" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{ position: 'relative', width: '100%', paddingBottom: '133%', backgroundColor: '#f3f4f6', borderRadius: '8px', overflow: 'hidden', marginBottom: '12px' }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=600&h=900&fit=crop"
                                        alt="Robe de Soirée"
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                    <button style={{ position: 'absolute', top: '10px', right: '10px', width: '36px', height: '36px', backgroundColor: 'white', border: 'none', borderRadius: '50%', cursor: 'pointer' }}>
                                        <Heart style={{ width: '16px', height: '16px' }} />
                                    </button>
                                    <span style={{ position: 'absolute', bottom: '10px', left: '10px', padding: '4px 12px', backgroundColor: 'rgba(255,255,255,0.9)', fontSize: '11px', fontWeight: 'bold', borderRadius: '20px' }}>Soirée</span>
                                </div>
                                <h3 style={{ fontWeight: '500', fontSize: '15px', marginBottom: '5px' }}>Robe de Soirée "Dakar Nights"</h3>
                                <p style={{ fontWeight: 'bold', color: '#f59e0b', fontSize: '16px' }}>65.000 FCFA <span style={{ fontSize: '12px', color: '#9ca3af', fontWeight: 'normal' }}>/ 3 jours</span></p>
                            </Link>
                        </div>

                        {/* Product 3 */}
                        <div style={{ cursor: 'pointer' }}>
                            <Link href="/collection" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{ position: 'relative', width: '100%', paddingBottom: '133%', backgroundColor: '#f3f4f6', borderRadius: '8px', overflow: 'hidden', marginBottom: '12px' }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?q=80&w=600&h=900&fit=crop"
                                        alt="Boubou"
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                    <button style={{ position: 'absolute', top: '10px', right: '10px', width: '36px', height: '36px', backgroundColor: 'white', border: 'none', borderRadius: '50%', cursor: 'pointer' }}>
                                        <Heart style={{ width: '16px', height: '16px' }} />
                                    </button>
                                    <span style={{ position: 'absolute', bottom: '10px', left: '10px', padding: '4px 12px', backgroundColor: 'rgba(255,255,255,0.9)', fontSize: '11px', fontWeight: 'bold', borderRadius: '20px' }}>Tradition</span>
                                </div>
                                <h3 style={{ fontWeight: '500', fontSize: '15px', marginBottom: '5px' }}>Boubou Traditionnel "Royale"</h3>
                                <p style={{ fontWeight: 'bold', color: '#f59e0b', fontSize: '16px' }}>55.000 FCFA <span style={{ fontSize: '12px', color: '#9ca3af', fontWeight: 'normal' }}>/ 3 jours</span></p>
                            </Link>
                        </div>

                        {/* Product 4 */}
                        <div style={{ cursor: 'pointer' }}>
                            <Link href="/collection" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{ position: 'relative', width: '100%', paddingBottom: '133%', backgroundColor: '#f3f4f6', borderRadius: '8px', overflow: 'hidden', marginBottom: '12px' }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1546522306-69a48f6828af?q=80&w=600&h=900&fit=crop"
                                        alt="Tenue Mariage"
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                    <button style={{ position: 'absolute', top: '10px', right: '10px', width: '36px', height: '36px', backgroundColor: 'white', border: 'none', borderRadius: '50%', cursor: 'pointer' }}>
                                        <Heart style={{ width: '16px', height: '16px' }} />
                                    </button>
                                    <span style={{ position: 'absolute', bottom: '10px', left: '10px', padding: '4px 12px', backgroundColor: 'rgba(255,255,255,0.9)', fontSize: '11px', fontWeight: 'bold', borderRadius: '20px' }}>Mariage</span>
                                </div>
                                <h3 style={{ fontWeight: '500', fontSize: '15px', marginBottom: '5px' }}>Tenue Mariage "Gorée"</h3>
                                <p style={{ fontWeight: 'bold', color: '#f59e0b', fontSize: '16px' }}>75.000 FCFA <span style={{ fontSize: '12px', color: '#9ca3af', fontWeight: 'normal' }}>/ 3 jours</span></p>
                            </Link>
                        </div>

                    </div>

                    {/* View All Button */}
                    <div style={{ textAlign: 'center' }}>
                        <Link
                            href="/collection"
                            style={{
                                display: 'inline-block',
                                padding: '14px 40px',
                                border: '2px solid black',
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: '13px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                textDecoration: 'none',
                                transition: 'all 0.3s'
                            }}
                        >
                            Voir toute la collection
                        </Link>
                    </div>
                </div>
            </section>

            {/* VALUE PROPS */}
            <section style={{ padding: '50px 20px', backgroundColor: '#f9fafb', borderTop: '1px solid #e5e7eb' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '30px',
                        textAlign: 'center'
                    }}>
                        <div>
                            <div style={{ fontSize: '40px', marginBottom: '15px' }}>✨</div>
                            <h3 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '8px' }}>Qualité Premium</h3>
                            <p style={{ fontSize: '14px', color: '#6b7280' }}>
                                Nettoyage professionnel inclus
                            </p>
                        </div>
                        <div>
                            <div style={{ fontSize: '40px', marginBottom: '15px' }}>🚚</div>
                            <h3 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '8px' }}>Livraison 24H</h3>
                            <p style={{ fontSize: '14px', color: '#6b7280' }}>
                                Partout à Dakar
                            </p>
                        </div>
                        <div>
                            <div style={{ fontSize: '40px', marginBottom: '15px' }}>💎</div>
                            <h3 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '8px' }}>Service VIP</h3>
                            <p style={{ fontSize: '14px', color: '#6b7280' }}>
                                Retouches gratuites
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
