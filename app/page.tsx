'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
    // Featured products - Mock data avec images de femmes africaines uniquement
    const featuredProducts = [
        {
            id: 1,
            name: 'Ensemble Bazin Brodé "Teranga"',
            price: '45.000',
            image: 'https://images.unsplash.com/photo-1620215869408-54b0e5170d7e?q=80&w=600&h=900&fit=crop',
            category: 'Bazin Riche'
        },
        {
            id: 2,
            name: 'Robe de Soirée "Dakar Nights"',
            price: '65.000',
            image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=600&h=900&fit=crop',
            category: 'Soirée'
        },
        {
            id: 3,
            name: 'Boubou Traditionnel "Royale"',
            price: '55.000',
            image: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?q=80&w=600&h=900&fit=crop',
            category: 'Tradition'
        },
        {
            id: 4,
            name: 'Robe Sirène "Almadies"',
            price: '70.000',
            image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&h=900&fit=crop',
            category: 'Evening Gown'
        },
        {
            id: 5,
            name: 'Tenue Wax Premium "Sahel"',
            price: '42.000',
            image: 'https://images.unsplash.com/photo-1531123414780-f74242c2b052?q=80&w=600&h=900&fit=crop',
            category: 'Wax'
        },
        {
            id: 6,
            name: 'Ensemble Soie "Saint-Louis"',
            price: '58.000',
            image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=600&h=900&fit=crop',
            category: 'Soie'
        },
        {
            id: 7,
            name: 'Robe Cocktail "Ngor"',
            price: '48.000',
            image: 'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?q=80&w=600&h=900&fit=crop',
            category: 'Cocktail'
        },
        {
            id: 8,
            name: 'Tenue Mariage "Gorée"',
            price: '75.000',
            image: 'https://images.unsplash.com/photo-1546522306-69a48f6828af?q=80&w=600&h=900&fit=crop',
            category: 'Mariage'
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* HERO BANNER - Full Width */}
            <section className="relative w-full h-[500px] md:h-[650px] overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1607513549650-07bf115cb982?q=80&w=2400&auto=format&fit=crop"
                    alt="Collection Premium"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                        <div className="max-w-xl text-white">
                            <p className="text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-4 text-amber-300">
                                Collection Tabaski 2026
                            </p>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-elegant font-bold mb-6 leading-tight">
                                L'Élégance<br />à la Sénégalaise
                            </h1>
                            <p className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed">
                                Louez des tenues de luxe pour vos cérémonies. Plus de 500 modèles disponibles.
                            </p>
                            <Link
                                href="/collection"
                                className="inline-block bg-white text-black px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-amber-400 hover:text-white transition-all duration-300"
                            >
                                Voir la Collection
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CATEGORIES BANNER */}
            <section className="py-8 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        <Link href="/collection?category=BOUBOUS" className="px-6 py-2 border border-gray-300 rounded-full hover:bg-black hover:text-white hover:border-black transition-all text-sm font-semibold">
                            Bazin Riche
                        </Link>
                        <Link href="/collection?category=ROBES_SOIREE" className="px-6 py-2 border border-gray-300 rounded-full hover:bg-black hover:text-white hover:border-black transition-all text-sm font-semibold">
                            Robes de Soirée
                        </Link>
                        <Link href="/collection?category=ENSEMBLES" className="px-6 py-2 border border-gray-300 rounded-full hover:bg-black hover:text-white hover:border-black transition-all text-sm font-semibold">
                            Ensembles
                        </Link>
                        <Link href="/collection?occasion=MARIAGE" className="px-6 py-2 border border-gray-300 rounded-full hover:bg-black hover:text-white hover:border-black transition-all text-sm font-semibold">
                            Mariages
                        </Link>
                        <Link href="/collection?sort=new" className="px-6 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-all text-sm font-semibold">
                            Nouveautés
                        </Link>
                    </div>
                </div>
            </section>

            {/* PRODUCTS GRID - Main Section */}
            <section className="py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Section Header */}
                    <div className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-elegant font-bold text-center mb-3">
                            Nos Tenues Premium
                        </h2>
                        <p className="text-center text-gray-500 max-w-2xl mx-auto">
                            Une sélection exclusive de tenues de créateurs sénégalais pour vos moments exceptionnels
                        </p>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {featuredProducts.map((product) => (
                            <Link
                                href={`/collection/product-${product.id}`}
                                key={product.id}
                                className="group bg-white"
                            >
                                {/* Product Image */}
                                <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 mb-3 rounded-lg">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Quick Actions Overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300">
                                        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2.5 bg-white rounded-full hover:bg-amber-500 hover:text-white transition-colors shadow-lg">
                                                <Heart className="w-4 h-4" />
                                            </button>
                                            <button className="p-2.5 bg-white rounded-full hover:bg-amber-500 hover:text-white transition-colors shadow-lg">
                                                <ShoppingBag className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Category Badge */}
                                    <div className="absolute bottom-3 left-3">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold text-black rounded-full">
                                            {product.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Product Info */}
                                <div className="px-1">
                                    <h3 className="font-medium text-sm md:text-base text-gray-900 mb-2 line-clamp-2 group-hover:text-amber-600 transition-colors">
                                        {product.name}
                                    </h3>
                                    <div className="flex items-baseline gap-2">
                                        <p className="text-base md:text-lg font-bold text-amber-600">
                                            {product.price} FCFA
                                        </p>
                                        <span className="text-xs text-gray-400">/ 3 jours</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* View All Button */}
                    <div className="text-center mt-12">
                        <Link
                            href="/collection"
                            className="inline-block px-10 py-3 border-2 border-black text-black font-bold uppercase text-sm tracking-wider hover:bg-black hover:text-white transition-all"
                        >
                            Voir toute la collection
                        </Link>
                    </div>
                </div>
            </section>

            {/* VALUE PROPOSITIONS */}
            <section className="py-12 bg-gray-50 border-t border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-3xl mb-3">✨</div>
                            <h3 className="font-bold text-lg mb-2">Qualité Premium</h3>
                            <p className="text-sm text-gray-600">
                                Tenues sélectionnées avec soin, nettoyage professionnel inclus
                            </p>
                        </div>
                        <div>
                            <div className="text-3xl mb-3">🚚</div>
                            <h3 className="font-bold text-lg mb-2">Livraison 24H</h3>
                            <p className="text-sm text-gray-600">
                                Livraison et retrait gratuits partout à Dakar
                            </p>
                        </div>
                        <div>
                            <div className="text-3xl mb-3">💎</div>
                            <h3 className="font-bold text-lg mb-2">Service VIP</h3>
                            <p className="text-sm text-gray-600">
                                Retouches gratuites et conseils personnalisés
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
