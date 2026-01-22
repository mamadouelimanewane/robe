'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ShoppingBag, Heart, User, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { totalItems } = useCart();

    return (
        <header style={{
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            backgroundColor: 'white',
            borderBottom: '1px solid #e5e7eb',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 20px'
            }}>
                {/* Desktop Header */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: '70px'
                }}>
                    {/* Logo */}
                    <Link href="/" style={{ textDecoration: 'none' }}>
                        <div style={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                            color: '#1f2937',
                            fontFamily: 'Georgia, serif'
                        }}>
                            RobeSénégal
                        </div>
                    </Link>

                    {/* Desktop Navigation - HORIZONTAL */}
                    <nav style={{
                        display: 'flex',
                        gap: '30px',
                        alignItems: 'center'
                    }}
                        className="desktop-nav">
                        <Link
                            href="/collection"
                            style={{
                                fontSize: '14px',
                                fontWeight: '600',
                                color: '#374151',
                                textDecoration: 'none',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            Toutes les Robes
                        </Link>
                        <Link
                            href="/collection?category=BOUBOUS"
                            style={{
                                fontSize: '14px',
                                fontWeight: '600',
                                color: '#374151',
                                textDecoration: 'none',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            Bazin & Traditions
                        </Link>
                        <Link
                            href="/collection?category=ROBES_SOIREE"
                            style={{
                                fontSize: '14px',
                                fontWeight: '600',
                                color: '#374151',
                                textDecoration: 'none',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            Soirée
                        </Link>
                        <Link
                            href="/collection?occasion=MARIAGE"
                            style={{
                                fontSize: '14px',
                                fontWeight: '600',
                                color: '#374151',
                                textDecoration: 'none',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            Mariages
                        </Link>
                    </nav>

                    {/* Right Icons */}
                    <div style={{
                        display: 'flex',
                        gap: '15px',
                        alignItems: 'center'
                    }}>
                        <Link href="/favoris" style={{ position: 'relative' }}>
                            <Heart style={{ width: '22px', height: '22px', color: '#374151' }} />
                            <span style={{
                                position: 'absolute',
                                top: '-5px',
                                right: '-5px',
                                backgroundColor: '#f59e0b',
                                color: 'white',
                                fontSize: '10px',
                                width: '16px',
                                height: '16px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 'bold'
                            }}>
                                0
                            </span>
                        </Link>
                        <Link href="/panier" style={{ position: 'relative' }}>
                            <ShoppingBag style={{ width: '22px', height: '22px', color: '#374151' }} />
                            {totalItems > 0 && (
                                <span style={{
                                    position: 'absolute',
                                    top: '-5px',
                                    right: '-5px',
                                    backgroundColor: '#f59e0b',
                                    color: 'white',
                                    fontSize: '10px',
                                    width: '16px',
                                    height: '16px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 'bold'
                                }}>
                                    {totalItems}
                                </span>
                            )}
                        </Link>
                        <Link href="/login">
                            <User style={{ width: '22px', height: '22px', color: '#374151' }} />
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            style={{
                                border: 'none',
                                background: 'none',
                                cursor: 'pointer',
                                padding: '5px'
                            }}
                            className="mobile-menu-btn"
                        >
                            {isMenuOpen ?
                                <X style={{ width: '24px', height: '24px' }} /> :
                                <Menu style={{ width: '24px', height: '24px' }} />
                            }
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div style={{
                        padding: '20px 0',
                        borderTop: '1px solid #e5e7eb'
                    }}>
                        <nav style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '15px'
                        }}>
                            <Link
                                href="/collection"
                                onClick={() => setIsMenuOpen(false)}
                                style={{
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    color: '#374151',
                                    textDecoration: 'none'
                                }}
                            >
                                Toutes les Robes
                            </Link>
                            <Link
                                href="/collection?category=BOUBOUS"
                                onClick={() => setIsMenuOpen(false)}
                                style={{
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    color: '#374151',
                                    textDecoration: 'none'
                                }}
                            >
                                Bazin & Traditions
                            </Link>
                            <Link
                                href="/collection?category=ROBES_SOIREE"
                                onClick={() => setIsMenuOpen(false)}
                                style={{
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    color: '#374151',
                                    textDecoration: 'none'
                                }}
                            >
                                Robes de Soirée
                            </Link>
                            <Link
                                href="/collection?occasion=MARIAGE"
                                onClick={() => setIsMenuOpen(false)}
                                style={{
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    color: '#374151',
                                    textDecoration: 'none'
                                }}
                            >
                                Mariages
                            </Link>
                        </nav>
                    </div>
                )}
            </div>

            <style jsx>{`
                @media (max-width: 768px) {
                    .desktop-nav {
                        display: none !important;
                    }
                }
                @media (min-width: 769px) {
                    .mobile-menu-btn {
                        display: none !important;
                    }
                }
            `}</style>
        </header>
    );
}
