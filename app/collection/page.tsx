'use client';

import { useState, useEffect, Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Filter, Heart, Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function CollectionContent() {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeCategory, setActiveCategory] = useState('TOUT');
    const searchParams = useSearchParams();
    const occasionFilter = searchParams.get('occasion');

    const categories = [
        { label: 'Toute la collection', value: 'TOUT' },
        { label: 'Boubous & Traditions', value: 'BOUBOUS' },
        { label: 'Robes de Soirée', value: 'ROBES_SOIREE' },
        { label: 'Ensembles', value: 'ENSEMBLES' },
        { label: 'Accessoires', value: 'ACCESSOIRES' },
    ];

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                let url = '/api/products?';
                const params = new URLSearchParams();
                if (activeCategory !== 'TOUT') params.append('category', activeCategory);
                if (occasionFilter) params.append('occasion', occasionFilter.toUpperCase());

                const res = await fetch(url + params.toString());
                if (!res.ok) throw new Error('Erreur lors du chargement des produits');
                const data = await res.json();
                setProducts(data.products);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [activeCategory, occasionFilter]);

    return (
        <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filtres */}
            <aside className="w-full lg:w-64 space-y-8">
                <div>
                    <h3 className="text-lg font-bold mb-4 flex items-center">
                        <Filter className="w-5 h-5 mr-2" /> Catégories
                    </h3>
                    <div className="space-y-2">
                        {categories.map((cat) => (
                            <button
                                key={cat.value}
                                onClick={() => setActiveCategory(cat.value)}
                                className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${activeCategory === cat.value
                                    ? 'bg-primary-50 text-primary-700 font-semibold'
                                    : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="border-t pt-8">
                    <h3 className="text-lg font-bold mb-4">Tailles</h3>
                    <div className="grid grid-cols-3 gap-2">
                        {['34', '36', '38', '40', '42', '44+'].map((size) => (
                            <button
                                key={size}
                                className="px-2 py-1 border rounded hover:border-black text-sm"
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
            </aside>

            {/* Grille de Produits */}
            <div className="flex-1">
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <Loader2 className="w-10 h-10 text-primary-600 animate-spin mb-4" />
                        <p className="text-gray-500">Chargement de la collection...</p>
                    </div>
                ) : error ? (
                    <div className="text-center py-20 bg-red-50 rounded-xl">
                        <p className="text-red-600 font-semibold">{error}</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="mt-4 text-primary-600 underline font-medium"
                        >
                            Réessayer
                        </button>
                    </div>
                ) : products.length === 0 ? (
                    <div className="text-center py-20 bg-gray-50 rounded-xl">
                        <p className="text-gray-500">Aucun produit trouvé dans cette catégorie.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <div key={product.id} className="group flex flex-col h-full bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                                <Link href={`/collection/${product.id}`} className="relative aspect-[3/4] overflow-hidden">
                                    <Image
                                        src={product.images[0]}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {!product.available && (
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                            <span className="bg-white text-black px-4 py-1 text-sm font-bold rounded-full">Indisponible</span>
                                        </div>
                                    )}
                                    <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white">
                                        <Heart className="w-5 h-5" />
                                    </button>
                                </Link>

                                <div className="p-4 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{product.brand}</p>
                                            <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-1">{product.name}</h3>
                                        </div>
                                    </div>
                                    <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-50">
                                        <div>
                                            <span className="text-sm text-gray-500">Location dès</span>
                                            <p className="text-lg font-bold text-primary-600">{product.rentalPrice3Days.toLocaleString('fr-FR')} FCFA</p>
                                        </div>
                                        <Link
                                            href={`/collection/${product.id}`}
                                            className="px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                                        >
                                            Réserver
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default function CollectionPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Titre et Intro */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-elegant font-bold mb-4">Notre Collection</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Découvrez une sélection exclusive de tenues de créateurs pour vos moments d'exception au Sénégal.
                    </p>
                </div>

                <Suspense fallback={
                    <div className="flex flex-col items-center justify-center py-20">
                        <Loader2 className="w-10 h-10 text-primary-600 animate-spin mb-4" />
                        <p className="text-gray-500">Chargement...</p>
                    </div>
                }>
                    <CollectionContent />
                </Suspense>
            </main>

            <Footer />
        </div>
    );
}
