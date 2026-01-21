'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, MapPin, CreditCard, ShieldCheck, ChevronRight, Info, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CheckoutPage() {
    const [paymentMethod, setPaymentMethod] = useState('wave');
    const { cart, totalPrice } = useCart();

    if (cart.length === 0) {
        return (
            <div className="min-h-screen flex flex-col bg-slate-50">
                <Header />
                <main className="flex-grow flex flex-col items-center justify-center p-4">
                    <div className="bg-white p-12 rounded-3xl shadow-xl text-center max-w-md">
                        <div className="bg-primary-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <ShoppingBag className="w-10 h-10 text-primary-600" />
                        </div>
                        <h1 className="text-2xl font-bold text-slate-900 mb-4">Votre panier est vide</h1>
                        <p className="text-gray-500 mb-8">Découvrez notre collection et trouvez la tenue parfaite pour votre événement.</p>
                        <Link href="/collection" className="btn-primary block w-full py-4 rounded-xl font-bold">
                            Voir la collection
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    const firstItem = cart[0]; // Simplification for MVP

    return (
        <div className="min-h-screen bg-slate-50">
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Section Gauche : Détails */}
                    <div className="flex-grow space-y-6">
                        <h1 className="text-3xl font-elegant font-bold text-slate-900">Finaliser votre réservation</h1>

                        {/* 1. Dates & Lieu */}
                        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="bg-primary-100 p-2 rounded-lg text-primary-600"><Calendar className="w-6 h-6" /></div>
                                <h2 className="text-xl font-bold">Dates de location</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-slate-50 rounded-2xl">
                                    <p className="text-xs text-gray-500 uppercase font-bold mb-1">Réception le</p>
                                    <p className="font-semibold text-slate-800">15 Février 2026</p>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-2xl">
                                    <p className="text-xs text-gray-500 uppercase font-bold mb-1">Retour le</p>
                                    <p className="font-semibold text-slate-800">18 Février 2026</p>
                                </div>
                            </div>
                        </div>

                        {/* 2. Livraison */}
                        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="bg-primary-100 p-2 rounded-lg text-primary-600"><MapPin className="w-6 h-6" /></div>
                                <h2 className="text-xl font-bold">Lieu de livraison (Dakar)</h2>
                            </div>
                            <div className="space-y-4">
                                <input type="text" placeholder="Quartier (ex: Almadies, Plateau, Mermoz...)" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl" />
                                <textarea placeholder="Adresse précise ou instructions pour le coursier" rows={3} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl"></textarea>
                            </div>
                        </div>

                        {/* 3. Paiement */}
                        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="bg-primary-100 p-2 rounded-lg text-primary-600"><CreditCard className="w-6 h-6" /></div>
                                <h2 className="text-xl font-bold">Mode de paiement</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {[
                                    { id: 'wave', name: 'Wave', color: 'bg-sky-500' },
                                    { id: 'orange', name: 'Orange Money', color: 'bg-orange-500' },
                                    { id: 'card', name: 'Carte Bancaire', color: 'bg-slate-800' }
                                ].map((method) => (
                                    <button
                                        key={method.id}
                                        onClick={() => setPaymentMethod(method.id)}
                                        className={`relative p-4 rounded-2xl border-2 transition-all flex flex-col items-center justify-center space-y-2 ${paymentMethod === method.id ? 'border-primary-600 bg-primary-50' : 'border-slate-100 hover:border-slate-200'
                                            }`}
                                    >
                                        <div className={`w-10 h-10 rounded-full ${method.color} flex items-center justify-center text-white font-bold text-[10px]`}>
                                            {method.id === 'card' ? <CreditCard className="w-5 h-5" /> : method.name.split(' ')[0][0]}
                                        </div>
                                        <span className="text-sm font-bold">{method.name}</span>
                                        {paymentMethod === method.id && <div className="absolute top-2 right-2 w-3 h-3 bg-primary-600 rounded-full"></div>}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Droite : Récapitulatif Financier */}
                    <aside className="w-full lg:w-96">
                        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-100 sticky top-24">
                            <h3 className="text-xl font-bold mb-6">Votre sélection</h3>

                            {/* Cart Items */}
                            {cart.map((item) => (
                                <div key={item.id} className="flex space-x-4 mb-6 pb-6 border-b border-slate-100 last:border-0 last:mb-0 last:pb-0">
                                    <div className="relative w-20 h-28 rounded-xl overflow-hidden flex-shrink-0">
                                        <Image src={item.image} alt="" fill className="object-cover" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-primary-600 font-bold uppercase tracking-wider">{item.brand}</p>
                                        <p className="font-bold text-slate-800 text-sm leading-tight">{item.name}</p>
                                        <p className="text-xs text-gray-500 mt-1">{item.duration} jours • {item.price.toLocaleString()} F</p>
                                    </div>
                                </div>
                            ))}

                            {/* Détail Prix */}
                            <div className="space-y-4 border-t border-slate-100 pt-6 mb-8 mt-4">
                                <div className="flex justify-between text-slate-600">
                                    <span>Sous-total</span>
                                    <span className="font-semibold">{totalPrice.toLocaleString()} FCFA</span>
                                </div>
                                <div className="flex justify-between text-slate-600">
                                    <span>Livraison & Retrait</span>
                                    <span className="text-green-600 font-bold italic">Gratuit</span>
                                </div>
                                <div className="flex justify-between text-slate-800 font-bold text-lg pt-4 border-t border-slate-100">
                                    <span>Total à payer</span>
                                    <span className="text-primary-600">{totalPrice.toLocaleString()} FCFA</span>
                                </div>
                            </div>

                            {/* Caution Info */}
                            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 mb-8 flex items-start space-x-3">
                                <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                <p className="text-[11px] text-amber-800 leading-relaxed">
                                    <strong>Note sur la caution :</strong> Une caution cumulée sera demandée. Elle n'est pas encaissée immédiatement pour Wave.
                                </p>
                            </div>

                            {/* Bouton Final */}
                            <Link
                                href="/success"
                                className="w-full btn-primary py-4 rounded-2xl flex items-center justify-center space-x-2 font-bold mb-4"
                            >
                                <span>Payer {totalPrice.toLocaleString()} F avec {paymentMethod.toUpperCase()}</span>
                                <ChevronRight className="w-5 h-5" />
                            </Link>

                            <div className="flex items-center justify-center space-x-2 text-[10px] text-gray-400">
                                <ShieldCheck className="w-4 h-4" />
                                <span>Paiement sécurisé par cryptage SSL</span>
                            </div>
                        </div>
                    </aside>

                </div>
            </main>

            <Footer />
        </div>
    );
}
