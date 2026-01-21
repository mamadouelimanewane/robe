'use client';

import { useCart } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Trash2, Calendar, CreditCard, Wallet, ArrowRight, Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

export default function CartPage() {
    const { cart, removeFromCart, totalPrice, clearCart } = useCart();
    const [loading, setLoading] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState<'WAVE' | 'ORANGE_MONEY' | 'FREE_MONEY' | 'CARTE_BANCAIRE' | 'ESPECES'>('WAVE');
    const router = useRouter();

    const handleCheckout = async () => {
        if (cart.length === 0) return;
        setLoading(true);

        try {
            // Dans un vrai flux, on appellerait l'API pour chaque item ou globalement
            for (const item of cart) {
                const res = await fetch('/api/bookings', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        productId: item.id,
                        startDate: item.startDate,
                        endDate: item.endDate,
                        rentalDays: item.duration,
                        totalPrice: item.price,
                        deposit: item.deposit,
                        paymentMethod: paymentMethod
                    })
                });

                if (!res.ok) {
                    const error = await res.json();
                    throw new Error(error.error || 'Erreur lors de la réservation');
                }
            }

            toast.success('Réservation enregistrée ! Redirection vers le paiement...');

            // Simulation du délai de redirection vers l'API de paiement (Wave/OM)
            setTimeout(() => {
                clearCart();
                router.push('/success');
            }, 1500);

        } catch (err: any) {
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (cart.length === 0) {
        return (
            <div className="min-h-screen bg-white">
                <Header />
                <main className="max-w-7xl mx-auto px-4 py-20 text-center">
                    <div className="bg-slate-50 rounded-3xl p-12 max-w-lg mx-auto">
                        <h1 className="text-2xl font-bold mb-4">Votre panier est vide</h1>
                        <p className="text-gray-500 mb-8">Découvrez notre collection pour trouver la tenue parfaite.</p>
                        <Link href="/collection" className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all">
                            Voir la collection <ArrowRight className="w-5 h-5" />
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
                <h1 className="text-3xl font-elegant font-bold mb-8">Votre Panier</h1>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Liste des items */}
                    <div className="flex-1 space-y-6">
                        {cart.map((item, idx) => (
                            <div key={`${item.id}-${idx}`} className="flex gap-6 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="relative w-24 h-32 rounded-xl overflow-hidden flex-shrink-0">
                                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-xs text-primary-600 font-bold uppercase tracking-wider">{item.brand}</p>
                                            <h3 className="font-bold text-lg">{item.name}</h3>
                                        </div>
                                        <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 p-2">
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            {format(new Date(item.startDate), 'dd/MM')} au {format(new Date(item.endDate), 'dd/MM')}
                                        </div>
                                        <div className="font-semibold text-slate-800">
                                            {item.duration} jours
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-between items-end">
                                        <p className="font-bold text-primary-700">{item.price.toLocaleString('fr-FR')} FCFA</p>
                                        <p className="text-xs text-gray-400">Caution: {item.deposit.toLocaleString('fr-FR')} FCFA</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Résumé et Paiement */}
                    <div className="w-full lg:w-96">
                        <div className="bg-slate-50 rounded-3xl p-8 sticky top-24">
                            <h2 className="text-xl font-bold mb-6">Résumé de la commande</h2>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-gray-600">
                                    <span>Location</span>
                                    <span>{totalPrice.toLocaleString('fr-FR')} FCFA</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Caution totale</span>
                                    <span>{cart.reduce((sum, i) => sum + i.deposit, 0).toLocaleString('fr-FR')} FCFA</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Frais de livraison</span>
                                    <span className="text-green-600 font-medium">Gratuit</span>
                                </div>
                                <div className="pt-4 border-t border-slate-200 flex justify-between font-bold text-xl">
                                    <span>Total</span>
                                    <span className="text-primary-700">{totalPrice.toLocaleString('fr-FR')} FCFA</span>
                                </div>
                                <p className="text-[10px] text-gray-400 italic">
                                    * La caution sera pré-autorisée et restituée après retour de l'article en bon état.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <label className="block text-sm font-bold text-slate-700">Mode de paiement</label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        onClick={() => setPaymentMethod('WAVE')}
                                        className={`p-3 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${paymentMethod === 'WAVE' ? 'border-primary-600 bg-white shadow-sm' : 'border-transparent bg-slate-100 hover:bg-slate-200'}`}
                                    >
                                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">W</div>
                                        <span className="text-xs font-bold">Wave</span>
                                    </button>
                                    <button
                                        onClick={() => setPaymentMethod('ORANGE_MONEY')}
                                        className={`p-3 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${paymentMethod === 'ORANGE_MONEY' ? 'border-primary-600 bg-white shadow-sm' : 'border-transparent bg-slate-100 hover:bg-slate-200'}`}
                                    >
                                        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">OM</div>
                                        <span className="text-xs font-bold">Orange</span>
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={handleCheckout}
                                disabled={loading}
                                className="w-full mt-8 bg-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-gray-800 transition-all disabled:bg-gray-400"
                            >
                                {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <CreditCard className="w-6 h-6" />}
                                Payer maintenant
                            </button>

                            <div className="mt-6 flex items-center justify-center gap-4">
                                <Wallet className="w-5 h-5 text-gray-400" />
                                <span className="text-xs text-gray-500">Paiement 100% sécurisé au Sénégal</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
