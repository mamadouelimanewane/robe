'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Star, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
    const categories = [
        { name: 'Bazin Riche', image: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?q=80&w=400&h=400&fit=crop', link: '/collection?category=BOUBOUS' },
        { name: 'Soirée & Gala', image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=400&h=400&fit=crop', link: '/collection?category=ROBES_SOIREE' },
        { name: 'Ensembles', image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=400&h=400&fit=crop', link: '/collection?category=ENSEMBLES' },
        { name: 'Mariée', image: 'https://images.unsplash.com/photo-1546522306-69a48f6828af?q=80&w=400&h=400&fit=crop', link: '/collection?occasion=MARIAGE' },
        { name: 'Accessoires', image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=400&h=400&fit=crop', link: '/collection?category=ACCESSOIRES' },
        { name: 'Nouveautés', image: 'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?q=80&w=400&h=400&fit=crop', link: '/collection?sort=new' },
    ];

    const featuredProducts = [
        { id: 1, name: 'Boubou Bazin "Dakar"', price: '45.000', image: 'https://images.unsplash.com/photo-1620215869408-54b0e5170d7e?q=80&w=600&h=800&fit=crop' },
        { id: 2, name: 'Ensemble Soie "Saint-Louis"', price: '60.000', image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=600&h=800&fit=crop' },
        { id: 3, name: 'Robe Sirène "Saly"', price: '35.000', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&h=800&fit=crop' },
        { id: 4, name: 'Tenue "Teranga"', price: '50.000', image: 'https://images.unsplash.com/photo-1531123414780-f74242c2b052?q=80&w=600&h=800&fit=crop' },
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <Header />

            {/* 1. HERO BANNER - Full Width, High Fashion */}
            <section className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1607513549650-07bf115cb982?q=80&w=2000&auto=format&fit=crop"
                    alt="Nouvelle Collection"
                    fill
                    className="object-cover object-top"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
                    <div className="max-w-7xl mx-auto px-4 w-full">
                        <div className="max-w-xl text-white">
                            <h2 className="text-xl md:text-2xl font-light tracking-widest uppercase mb-4">Collection Tabaski 2026</h2>
                            <h1 className="text-5xl md:text-7xl font-elegant font-bold mb-8 leading-tight">
                                L'Art du <br /> <span className="text-amber-400">Bazin Riche.</span>
                            </h1>
                            <Link href="/collection" className="inline-block bg-white text-black px-10 py-4 font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors">
                                Découvrir
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. CATEGORY NAV - Circular/Icons style (Like Anka) */}
            <section className="py-12 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
                    <div className="flex space-x-8 md:justify-center min-w-max pb-4">
                        {categories.map((cat, idx) => (
                            <Link key={idx} href={cat.link} className="flex flex-col items-center group cursor-pointer">
                                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-transparent group-hover:border-amber-500 transition-all mb-3 relative">
                                    <Image src={cat.image} alt={cat.name} fill className="object-cover" />
                                </div>
                                <span className="text-sm font-semibold group-hover:text-amber-600 transition-colors">{cat.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. TRENDING GRID - Product Focused */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold font-elegant">Tendances de la semaine</h2>
                        <Link href="/collection" className="text-amber-600 font-semibold border-b-2 border-amber-600 pb-1 hover:text-amber-700">
                            Tout voir
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        {featuredProducts.map((product) => (
                            <Link href={`/collection/product-${product.id}`} key={product.id} className="group">
                                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <button className="absolute top-3 right-3 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500 shadow-sm">
                                        <Heart className="w-4 h-4" />
                                    </button>
                                    <div className="absolute bottom-0 left-0 bg-amber-500 text-white text-xs font-bold px-3 py-1">
                                        LOCATION
                                    </div>
                                </div>
                                <h3 className="font-medium text-gray-900 truncate">{product.name}</h3>
                                <p className="text-amber-600 font-bold">{product.price} FCFA <span className="text-xs text-gray-400 font-normal">/ 3 jours</span></p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. PROMO BANNER */}
            <section className="py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-[500px]">
                        <Image
                            src="https://images.unsplash.com/photo-1602494498579-d57b32d326f1?q=80&w=2000&auto=format&fit=crop"
                            alt="Promo"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-6">
                            <h2 className="text-4xl md:text-6xl font-elegant text-white font-bold mb-4">Mariage Civil ?</h2>
                            <p className="text-lg text-white/90 mb-8 max-w-xl">
                                Découvrez notre sélection exclusive de tailleurs et robes blanches pour votre grand jour.
                            </p>
                            <Link href="/collection?occasion=mariage" className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                                Voir la sélection
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. WHY US - Clean Icons */}
            <section className="py-16 bg-gray-50 border-t">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                        <h3 className="font-bold text-lg mb-2">Qualité Premium</h3>
                        <p className="text-gray-500 text-sm">Sélection rigoureuse des meilleurs créateurs sénégalais.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-2">Livraison Express</h3>
                        <p className="text-gray-500 text-sm">Livraison à Dakar en moins de 24h.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-2">Service Client VIP</h3>
                        <p className="text-gray-500 text-sm">Une équipe dédiée pour vous conseiller.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
