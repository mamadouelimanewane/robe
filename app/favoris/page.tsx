'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useFavorites } from '@/context/FavoriteContext';
import { useCart } from '@/context/CartContext';
import { Trash2, ShoppingBag, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'react-hot-toast';

export default function FavoritesPage() {
    const { favorites, removeFavorite } = useFavorites();
    const { addToCart } = useCart();

    const handleAddToCart = (product: any) => {
        addToCart({
            id: product.id,
            name: product.name,
            brand: product.brand,
            price: product.price3Days, // Assuming default 3 days price
            image: product.image,
            duration: 3,
            startDate: new Date().toISOString(),
            endDate: new Date().toISOString(),
            deposit: 0 // Placeholder deposit
        });
        toast.success('Ajouté au panier !');
    };

    if (favorites.length === 0) {
        return (
            <div className="min-h-screen bg-white">
                <Header />
                <main className="max-w-7xl mx-auto px-4 py-20 text-center">
                    <div className="bg-slate-50 rounded-3xl p-12 max-w-lg mx-auto">
                        <Heart className="w-16 h-16 text-gray-300 mx-auto mb-6" />
                        <h1 className="text-2xl font-bold mb-4">Vos favoris sont vides</h1>
                        <p className="text-gray-500 mb-8">Sauvegardez vos coups de cœur pour les retrouver plus tard.</p>
                        <Link href="/collection" className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all">
                            Voir la collection
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-elegant font-bold mb-8">Mes Favoris ({favorites.length})</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {favorites.map((product) => (
                        <div key={product.id} className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all">
                            {/* Image */}
                            <div className="relative aspect-[3/4] bg-gray-100">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                />
                                <button
                                    onClick={() => removeFavorite(product.id)}
                                    className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-red-500 hover:bg-white transition-all shadow-sm"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                                    {product.brand}
                                </p>
                                <h3 className="font-bold text-slate-900 mb-3 truncate">{product.name}</h3>

                                <div className="flex items-center justify-between">
                                    <p className="font-semibold text-primary-600">
                                        {product.price.toLocaleString()} FCFA
                                    </p>
                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                                    >
                                        <ShoppingBag className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
