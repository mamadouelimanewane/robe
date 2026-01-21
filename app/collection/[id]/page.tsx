'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, ShoppingBag, ShieldCheck, Truck, RefreshCw, Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { toast } from 'react-hot-toast';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
    const [product, setProduct] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedDuration, setSelectedDuration] = useState(3);
    const [activeImage, setActiveImage] = useState(0);
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const res = await fetch(`/api/products/${params.id}`);
                if (!res.ok) throw new Error('Produit non trouvé');
                const data = await res.json();
                setProduct(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [params.id]);

    const getPrice = () => {
        if (!product) return 0;
        if (selectedDuration === 3) return product.rentalPrice3Days;
        if (selectedDuration === 4) return product.rentalPrice4Days;
        return product.rentalPrice7Days;
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-white">
                <Header />
                <div className="flex flex-col items-center justify-center py-40">
                    <Loader2 className="w-12 h-12 text-primary-600 animate-spin mb-4" />
                    <p className="text-gray-500">Chargement des détails du produit...</p>
                </div>
                <Footer />
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="min-h-screen bg-white">
                <Header />
                <div className="text-center py-40 mx-auto max-w-lg">
                    <div className="bg-red-50 p-8 rounded-3xl">
                        <p className="text-red-600 font-bold mb-4">{error || 'Produit non trouvé'}</p>
                        <Link href="/collection" className="text-primary-600 font-medium underline">
                            Retour à la collection
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Galerie Images */}
                    <div className="flex-1 space-y-4">
                        <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gray-50 shadow-inner">
                            <Image
                                src={product.images[activeImage]}
                                alt={product.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex gap-4 overflow-x-auto pb-2">
                            {product.images.map((img: string, idx: number) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImage(idx)}
                                    className={`relative flex-shrink-0 w-24 aspect-[3/4] rounded-xl overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-primary-600 scale-105' : 'border-transparent'
                                        }`}
                                >
                                    <Image src={img} alt="" fill className="object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Informations Achat/Location */}
                    <div className="flex-1 space-y-8">
                        <div>
                            <nav className="text-sm text-gray-500 mb-4">
                                Accueil / Collection / {product.category}
                            </nav>
                            <h1 className="text-3xl md:text-4xl font-elegant font-bold text-slate-900 mb-2">
                                {product.name}
                            </h1>
                            <p className="text-lg text-primary-600 font-semibold">{product.brand}</p>
                        </div>

                        <div className="p-6 bg-slate-50 rounded-2xl space-y-6">
                            {/* Choix Durée */}
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-3">Durée de location</label>
                                <div className="grid grid-cols-3 gap-3">
                                    {[3, 4, 7].map((d) => (
                                        <button
                                            key={d}
                                            onClick={() => setSelectedDuration(d)}
                                            className={`py-3 rounded-xl border-2 font-medium transition-all ${selectedDuration === d
                                                ? 'border-primary-600 bg-primary-50 text-primary-700'
                                                : 'border-white bg-white hover:border-gray-200'
                                                }`}
                                        >
                                            {d} jours
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center justify-between border-t border-slate-200 pt-6">
                                <div>
                                    <span className="text-sm text-gray-500">Tarif location ({selectedDuration}j)</span>
                                    <p className="text-3xl font-bold text-primary-700">{getPrice().toLocaleString('fr-FR')} FCFA</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs text-gray-400 capitalize">Caution (restituée)</span>
                                    <p className="font-semibold text-gray-600">{product.deposit.toLocaleString('fr-FR')} FCFA</p>
                                </div>
                            </div>

                            <button
                                onClick={() => {
                                    addToCart({
                                        id: params.id,
                                        name: product.name,
                                        brand: product.brand,
                                        price: getPrice(),
                                        image: product.images[0],
                                        duration: selectedDuration,
                                        startDate: new Date().toISOString(), // À remplacer par un vrai sélecteur de date
                                        endDate: new Date().toISOString(), // À remplacer par un vrai sélecteur de date
                                        deposit: product.deposit
                                    });
                                    toast.success('Ajouté au panier !');
                                }}
                                className="w-full bg-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-gray-800 transition-all hover:shadow-lg active:scale-95"
                            >
                                <ShoppingBag className="w-6 h-6" />
                                Ajouter au panier
                            </button>
                        </div>

                        {/* Description & Détails */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Description</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-green-50 rounded-lg text-green-600">
                                        <ShieldCheck className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-800">Nettoyage inclus</p>
                                        <p className="text-xs text-gray-500">Pressing premium offert</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                                        <Truck className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-800">Livraison Dakar</p>
                                        <p className="text-xs text-gray-500">Express en 24h</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                                        <RefreshCw className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-800">Ajustements</p>
                                        <p className="text-xs text-gray-500">Retouches légères possibles</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
