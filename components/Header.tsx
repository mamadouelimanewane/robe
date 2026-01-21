'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ShoppingBag, Heart, User, Menu, X, Search } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { totalItems } = useCart();

    return (
        <header className="sticky top-0 z-50 glass-effect border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Bar */}
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="text-3xl font-elegant font-bold gradient-text">
                            RobeSénégal
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        <Link href="/collection" className="text-sm font-medium hover:text-primary-500 transition-colors">
                            Nos Robes
                        </Link>
                        <Link href="/collection?category=BOUBOUS" className="text-sm font-medium hover:text-primary-500 transition-colors">
                            Boubous & Traditions
                        </Link>
                        <Link href="/nouveautes" className="text-sm font-medium hover:text-primary-500 transition-colors">
                            Nouveautés
                        </Link>
                        <Link href="/comment-ca-marche" className="text-sm font-medium hover:text-primary-500 transition-colors">
                            Comment ça marche ?
                        </Link>
                    </nav>

                    {/* Right Actions */}
                    <div className="flex items-center space-x-4">
                        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                            <Search className="w-5 h-5" />
                        </button>
                        <Link href="/favoris" className="p-2 hover:bg-white/10 rounded-full transition-colors relative">
                            <Heart className="w-5 h-5" />
                            <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                0
                            </span>
                        </Link>
                        <Link href="/panier" className="p-2 hover:bg-white/10 rounded-full transition-colors relative">
                            <ShoppingBag className="w-5 h-5" />
                            <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                {totalItems}
                            </span>
                        </Link>
                        <Link href="/login" className="p-2 hover:bg-white/10 rounded-full transition-colors">
                            <User className="w-5 h-5" />
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-white/10">
                        <nav className="flex flex-col space-y-4">
                            <Link href="/collection" className="text-sm font-medium hover:text-primary-500 transition-colors">
                                Toutes les Robes
                            </Link>
                            <Link href="/collection?category=BOUBOUS" className="text-sm font-medium hover:text-primary-500 transition-colors">
                                Boubous & Traditions
                            </Link>
                            <Link href="/occasions" className="text-sm font-medium hover:text-primary-500 transition-colors">
                                Mariages & Cérémonies
                            </Link>
                            <Link href="/comment-ca-marche" className="text-sm font-medium hover:text-primary-500 transition-colors">
                                Comment ça marche ?
                            </Link>
                            <Link href="/admin" className="text-sm font-medium text-gold-500 hover:text-gold-600 transition-colors border-t border-white/10 pt-4">
                                Espace Admin
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
