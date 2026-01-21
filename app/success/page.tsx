'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Calendar, ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function SuccessPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="max-w-3xl mx-auto px-4 py-20 text-center">
                <div className="mb-8 flex justify-center">
                    <div className="bg-green-100 p-4 rounded-full animate-bounce">
                        <CheckCircle className="w-16 h-16 text-green-600" />
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-elegant font-bold text-slate-900 mb-4">
                    Réservation Confirmée !
                </h1>
                <p className="text-xl text-gray-500 mb-12">
                    Merci Abdou ! Votre tenue est réservée. Vous recevrez un SMS de confirmation sous peu.
                </p>

                <div className="bg-slate-50 rounded-3xl p-8 mb-12 text-left border border-slate-100">
                    <div className="flex items-center space-x-6 mb-6">
                        <div className="relative w-20 h-28 rounded-xl overflow-hidden shadow-md">
                            <Image src="https://images.unsplash.com/photo-1546193430-c2d20e03daa9?q=80&w=800" alt="" fill className="object-cover" />
                        </div>
                        <div>
                            <p className="font-bold text-lg text-slate-800">Robe de Mariée "Sira"</p>
                            <p className="text-sm text-gray-500">Réception prévue le 15 Février 2026</p>
                            <p className="text-sm font-bold text-primary-600 mt-1">Numéro de commande : #RES-8921</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-200 pt-6">
                        <div className="flex items-center space-x-3">
                            <div className="bg-white p-2 rounded-lg shadow-sm text-primary-600"><Calendar className="w-5 h-5" /></div>
                            <div>
                                <p className="text-[10px] text-gray-400 font-bold uppercase">Durée</p>
                                <p className="text-sm font-semibold">3 jours de location</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="bg-white p-2 rounded-lg shadow-sm text-primary-600"><Download className="w-5 h-5" /></div>
                            <div>
                                <p className="text-[10px] text-gray-400 font-bold uppercase">Documents</p>
                                <button className="text-sm font-semibold text-primary-600 hover:underline">Télécharger le reçu</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/compte" className="btn-primary py-4 px-8 rounded-2xl font-bold flex items-center justify-center space-x-2">
                        <span>Suivre ma location</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link href="/collection" className="btn-secondary py-4 px-8 rounded-2xl font-bold">
                        Retourner à la boutique
                    </Link>
                </div>

                <p className="mt-12 text-sm text-gray-400">
                    Une question ? Contactez notre service client au +221 77 123 45 67
                </p>
            </main>

            <Footer />
        </div>
    );
}
