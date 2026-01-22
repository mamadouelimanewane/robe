'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
    return (
        <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
            <Header />

            {/* HERO SECTION - Femme africaine en robe de soirée */}
            <section style={{
                position: 'relative',
                width: '100%',
                height: '550px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2400&auto=format&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                display: 'flex',
                alignItems: 'center'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.3))'
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
                        fontSize: '13px',
                        fontWeight: 'bold',
                        letterSpacing: '0.25em',
                        textTransform: 'uppercase',
                        marginBottom: '20px',
                        color: '#fbbf24'
                    }}>
                        Collection Tabaski 2026
                    </p>
                    <h1 style={{
                        fontSize: '56px',
                        fontWeight: 'bold',
                        marginBottom: '25px',
                        fontFamily: 'Georgia, serif',
                        lineHeight: '1.2'
                    }}>
                        L'Élégance<br />à la Sénégalaise
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        marginBottom: '35px',
                        maxWidth: '550px',
                        lineHeight: '1.7',
                        color: '#f3f4f6'
                    }}>
                        Louez des tenues de luxe pour vos cérémonies. Plus de 500 modèles disponibles.
                    </p>
                    <Link
                        href="/collection"
                        style={{
                            display: 'inline-block',
                            backgroundColor: 'white',
                            color: 'black',
                            padding: '16px 45px',
                            fontSize: '13px',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            letterSpacing: '0.15em',
                            textDecoration: 'none'
                        }}
                    >
                        Voir la Collection
                    </Link>
                </div>
            </section>

            {/* CATEGORIES */}
            <section style={{ padding: '30px 20px', borderBottom: '1px solid #e5e7eb' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '12px',
                        justifyContent: 'center'
                    }}>
                        <Link
                            href="/collection?category=BOUBOUS"
                            style={{
                                padding: '10px 22px',
                                border: '1.5px solid #d1d5db',
                                borderRadius: '25px',
                                fontSize: '13px',
                                fontWeight: '600',
                                textDecoration: 'none',
                                color: '#374151'
                            }}
                        >
                            Bazin Riche
                        </Link>
                        <Link
                            href="/collection?category=ROBES_SOIREE"
                            style={{
                                padding: '10px 22px',
                                border: '1.5px solid #d1d5db',
                                borderRadius: '25px',
                                fontSize: '13px',
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
                                padding: '10px 22px',
                                border: '1.5px solid #d1d5db',
                                borderRadius: '25px',
                                fontSize: '13px',
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
                                padding: '10px 22px',
                                border: '1.5px solid #d1d5db',
                                borderRadius: '25px',
                                fontSize: '13px',
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
                                padding: '10px 22px',
                                backgroundColor: '#f59e0b',
                                color: 'white',
                                borderRadius: '25px',
                                fontSize: '13px',
                                fontWeight: '600',
                                textDecoration: 'none',
                                border: 'none'
                            }}
                        >
                            Nouveautés
                        </Link>
                    </div>
                </div>
            </section>

            {/* PRODUCTS GRID - UNIQUEMENT FEMMES AFRICAINES */}
            <section style={{ padding: '70px 20px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <h2 style={{
                            fontSize: '36px',
                            fontWeight: 'bold',
                            fontFamily: 'Georgia, serif',
                            marginBottom: '12px',
                            color: '#111827'
                        }}>
                            Nos Tenues Premium
                        </h2>
                        <p style={{ color: '#6b7280', maxWidth: '650px', margin: '0 auto', fontSize: '15px' }}>
                            Une sélection exclusive de tenues de créateurs sénégalais
                        </p>
                    </div>

                    {/* Grid - 4 COLONNES */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '25px',
                        marginBottom: '50px'
                    }}
                        className="product-grid">

                        {/* Product 1 - Robe Mariée "Divine" */}
                        <div>
                            <Link href="/collection" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{ position: 'relative', width: '100%', paddingBottom: '140%', backgroundColor: '#f9fafb', borderRadius: '10px', overflow: 'hidden', marginBottom: '14px' }}>
                                    <img
                                        src="/images/collection/mariage-sirene-manches.jpg"
                                        alt="Robe Mariée Divine"
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                                    />
                                    <button style={{ position: 'absolute', top: '12px', right: '12px', width: '38px', height: '38px', backgroundColor: 'white', border: 'none', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
                                        <Heart style={{ width: '18px', height: '18px', color: '#374151' }} />
                                    </button>
                                    <span style={{ position: 'absolute', bottom: '12px', left: '12px', padding: '5px 13px', backgroundColor: 'rgba(255,255,255,0.95)', fontSize: '11px', fontWeight: 'bold', borderRadius: '20px', color: '#111827' }}>Mariage</span>
                                </div>
                                <h3 style={{ fontWeight: '500', fontSize: '14px', marginBottom: '6px', color: '#111827', lineHeight: '1.4' }}>Robe Mariée "Divine"</h3>
                                <p style={{ fontWeight: 'bold', color: '#f59e0b', fontSize: '17px' }}>130.000 FCFA <span style={{ fontSize: '11px', color: '#9ca3af', fontWeight: 'normal' }}>/ 3j</span></p>
                            </Link>
                        </div>

                        {/* Product 2 - Ensemble Pagne "Soleil" */}
                        <div>
                            <Link href="/collection" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{ position: 'relative', width: '100%', paddingBottom: '140%', backgroundColor: '#f9fafb', borderRadius: '10px', overflow: 'hidden', marginBottom: '14px' }}>
                                    <img
                                        src="/images/collection/ensemble-pagne-jaune.jpg"
                                        alt="Ensemble Pagne Soleil"
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                                    />
                                    <button style={{ position: 'absolute', top: '12px', right: '12px', width: '38px', height: '38px', backgroundColor: 'white', border: 'none', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
                                        <Heart style={{ width: '18px', height: '18px' }} />
                                    </button>
                                    <span style={{ position: 'absolute', bottom: '12px', left: '12px', padding: '5px 13px', backgroundColor: 'rgba(255,255,255,0.95)', fontSize: '11px', fontWeight: 'bold', borderRadius: '20px' }}>Tradition</span>
                                </div>
                                <h3 style={{ fontWeight: '500', fontSize: '14px', marginBottom: '6px', color: '#111827', lineHeight: '1.4' }}>Ensemble Pagne "Soleil"</h3>
                                <p style={{ fontWeight: 'bold', color: '#f59e0b', fontSize: '17px' }}>60.000 FCFA <span style={{ fontSize: '11px', color: '#9ca3af', fontWeight: 'normal' }}>/ 3j</span></p>
                            </Link>
                        </div>

                        {/* Product 3 - Robe Gala "Royale Blue" */}
                        <div>
                            <Link href="/collection" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{ position: 'relative', width: '100%', paddingBottom: '140%', backgroundColor: '#f9fafb', borderRadius: '10px', overflow: 'hidden', marginBottom: '14px' }}>
                                    <img
                                        src="/images/collection/soiree-bleu-roi.jpg"
                                        alt="Robe Gala Royale Blue"
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                                    />
                                    <button style={{ position: 'absolute', top: '12px', right: '12px', width: '38px', height: '38px', backgroundColor: 'white', border: 'none', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
                                        <Heart style={{ width: '18px', height: '18px' }} />
                                    </button>
                                    <span style={{ position: 'absolute', bottom: '12px', left: '12px', padding: '5px 13px', backgroundColor: 'rgba(255,255,255,0.95)', fontSize: '11px', fontWeight: 'bold', borderRadius: '20px' }}>Soirée</span>
                                </div>
                                <h3 style={{ fontWeight: '500', fontSize: '14px', marginBottom: '6px', color: '#111827', lineHeight: '1.4' }}>Robe Gala "Royale Blue"</h3>
                                <p style={{ fontWeight: 'bold', color: '#f59e0b', fontSize: '17px' }}>80.000 FCFA <span style={{ fontSize: '11px', color: '#9ca3af', fontWeight: 'normal' }}>/ 3j</span></p>
                            </Link>
                        </div>

                        {/* Product 4 - Robe Mariée "Princesse Yaye" */}
                        <div>
                            <Link href="/collection" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{ position: 'relative', width: '100%', paddingBottom: '140%', backgroundColor: '#f9fafb', borderRadius: '10px', overflow: 'hidden', marginBottom: '14px' }}>
                                    <img
                                        src="/images/collection/mariage-princesse.jpg"
                                        alt="Robe Mariée Princesse Yaye"
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                                    />
                                    <button style={{ position: 'absolute', top: '12px', right: '12px', width: '38px', height: '38px', backgroundColor: 'white', border: 'none', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
                                        <Heart style={{ width: '18px', height: '18px' }} />
                                    </button>
                                    <span style={{ position: 'absolute', bottom: '12px', left: '12px', padding: '5px 13px', backgroundColor: 'rgba(255,255,255,0.95)', fontSize: '11px', fontWeight: 'bold', borderRadius: '20px' }}>Mariage</span>
                                </div>
                                <h3 style={{ fontWeight: '500', fontSize: '14px', marginBottom: '6px', color: '#111827', lineHeight: '1.4' }}>Robe Mariée "Princesse Yaye"</h3>
                                <p style={{ fontWeight: 'bold', color: '#f59e0b', fontSize: '17px' }}>150.000 FCFA <span style={{ fontSize: '11px', color: '#9ca3af', fontWeight: 'normal' }}>/ 3j</span></p>
                            </Link>
                        </div>

                    </div>

                    {/* View All Button */}
                    <div style={{ textAlign: 'center' }}>
                        <Link
                            href="/collection"
                            style={{
                                display: 'inline-block',
                                padding: '15px 45px',
                                border: '2px solid #111827',
                                color: '#111827',
                                fontWeight: 'bold',
                                fontSize: '13px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                textDecoration: 'none'
                            }}
                        >
                            Voir toute la collection
                        </Link>
                    </div>
                </div>
            </section>

            {/* VALUE PROPS */}
            <section style={{ padding: '60px 20px', backgroundColor: '#f9fafb', borderTop: '1px solid #e5e7eb' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '40px',
                        textAlign: 'center'
                    }}
                        className="value-grid">
                        <div>
                            <div style={{ fontSize: '42px', marginBottom: '18px' }}>✨</div>
                            <h3 style={{ fontWeight: 'bold', fontSize: '17px', marginBottom: '10px', color: '#111827' }}>Qualité Premium</h3>
                            <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.6' }}>
                                Nettoyage professionnel inclus
                            </p>
                        </div>
                        <div>
                            <div style={{ fontSize: '42px', marginBottom: '18px' }}>🚚</div>
                            <h3 style={{ fontWeight: 'bold', fontSize: '17px', marginBottom: '10px', color: '#111827' }}>Livraison 24H</h3>
                            <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.6' }}>
                                Partout à Dakar
                            </p>
                        </div>
                        <div>
                            <div style={{ fontSize: '42px', marginBottom: '18px' }}>💎</div>
                            <h3 style={{ fontWeight: 'bold', fontSize: '17px', marginBottom: '10px', color: '#111827' }}>Service VIP</h3>
                            <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.6' }}>
                                Retouches gratuites
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx>{`
        @media (max-width: 1024px) {
          .product-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .product-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .value-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}</style>
        </div>
    );
}
