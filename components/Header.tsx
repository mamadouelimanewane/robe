'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ShoppingBag, Heart, User, Menu, X, Search } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { totalItems } = useCart();

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Bar */}
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <div className="text-xl md:text-2xl font-elegant font-bold text-slate-900">
                            RobeSénégal
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        <Link href="/collection" className="text-sm font-semibold text-gray-700 hover:text-amber-600 transition-colors">
                            Toutes les Robes
                        </Link>
                        <Link href="/collection?category=BOUBOUS" className="text-sm font-semibold text-gray-700 hover:text-amber-600 transition-colors">
                            Bazin & Traditions
                        </Link>
                        <Link href="/collection?category=ROBES_SOIREE" className="text-sm font-semibold text-gray-700 hover:text-amber-600 transition-colors">
                            Soirée
                        </Link>
                        <Link href="/collection?occasion=MARIAGE" className="text-sm font-semibold text-gray-700 hover:text-amber-600 transition-colors">
                            Mariages
                        </Link>
                        <Link href="/comment-ca-marche" className="text-sm font-semibold text-gray-700 hover:text-amber-600 transition-colors">
                            Comment ça marche ?
                        </Link>
                    </nav>

                    {/* Right Actions */}
                    <div className="flex items-center space-x-4 md:space-x-6">
                        <button className="p-2 hover:text-amber-600 transition-colors hidden md:block">
                            <Search className="w-5 h-5" />
                        </button>
                        <Link href="/favoris" className="p-2 hover:text-amber-600 transition-colors relative">
                            <Heart className="w-5 h-5" />
                            <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full font-bold">
                                0
                            </span>
                        </Link>
                        <Link href="/panier" className="p-2 hover:text-amber-600 transition-colors relative">
                            <ShoppingBag className="w-5 h-5" />
                            {totalItems > 0 && (
                                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full font-bold">
                                    {totalItems}
                                </span>
                            )}
                        </Link>
                        <Link href="/login" className="p-2 hover:text-amber-600 transition-colors">
                            <User className="w-5 h-5" />
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 hover:text-amber-600 transition-colors"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-gray-100">
                        <nav className="flex flex-col space-y-4">
                            <Link
                                href="/collection"
                                className="text-sm font-semibold text-gray-700 hover:text-amber-600 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Toutes les Robes
                            </Link>
                            <Link
                                href="/collection?category=BOUBOUS"
                                className="text-sm font-semibold text-gray-700 hover:text-amber-600 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Bazin & Traditions
                            </Link>
                            <Link
                                href="/collection?category=ROBES_SOIREE"
                                className="text-sm font-semibold text-gray-700 hover:text-amber-600 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Robes de Soirée
                            </Link>
                            <Link
                                href="/collection?occasion=MARIAGE"
                                className="text-sm font-semibold text-gray-700 hover:text-amber-600 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Mariages & Cérémonies
                            </Link>
                            <Link
                                href="/comment-ca-marche"
                                className="text-sm font-semibold text-gray-700 hover:text-amber-600 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Comment ça marche ?
                            </Link>
                            <Link
                                href="/admin"
                                className="text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors border-t border-gray-100 pt-4"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Espace Admin
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
