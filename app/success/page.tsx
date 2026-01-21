'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Calendar, ArrowRight, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function SuccessPage() {
    useEffect(() => {
        // Lancer des confettis pour célébrer !
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="max-w-3xl mx-auto px-4 py-20 text-center">
                <div className="bg-green-50 rounded-3xl p-12 shadow-sm border border-green-100">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-green-100 rounded-full text-green-600">
                            <CheckCircle className="w-16 h-16" />
                        </div>
                    </div>

                    <h1 className="text-4xl font-elegant font-bold text-slate-900 mb-4">
                        Réservation Confirmée !
                    </h1>

                    <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto">
                        Merci pour votre confiance. Votre tenue est réservée et sera préparée avec le plus grand soin par nos équipes.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                        <div className="bg-white p-6 rounded-2xl border border-green-200 text-left">
                            <div className="flex items-center gap-3 text-green-600 mb-2">
                                <Calendar className="w-5 h-5" />
                                <span className="font-bold">Prochaine étape</span>
                            </div>
                            <p className="text-sm text-gray-600">
                                Un conseiller va vous contacter par téléphone pour confirmer les détails de la livraison.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-green-200 text-left">
                            <div className="flex items-center gap-3 text-green-600 mb-2">
                                <ShoppingBag className="w-5 h-5" />
                                <span className="font-bold">Suivi</span>
                            </div>
                            <p className="text-sm text-gray-600">
                                Retrouvez le détail de votre commande dans votre espace client.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/compte"
                            className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all"
                        >
                            Mes Réservations
                        </Link>
                        <Link
                            href="/collection"
                            className="bg-white text-black border-2 border-slate-200 px-8 py-4 rounded-xl font-bold hover:border-black transition-all flex items-center justify-center gap-2"
                        >
                            Retour à la collection <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                <div className="mt-12 text-gray-400 text-sm">
                    Une question ? Contactez notre support au <span className="font-bold text-slate-600">+221 77 123 45 67</span>
                </div>
            </main>

            <Footer />
        </div>
    );
}
