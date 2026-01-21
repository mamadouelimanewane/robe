'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Star, Shield, Clock, Heart } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=2000"
                        alt="Background"
                        className="w-full h-full object-cover brightness-50"
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                    <div className="max-w-2xl animate-fade-in-up">
                        <span className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-sm font-semibold mb-6">
                            L'élégance à portée de main au Sénégal
                        </span>
                        <h1 className="text-5xl md:text-7xl font-elegant font-bold mb-6 leading-tight">
                            Portez l'Exception, <br />
                            <span className="gradient-text">Louez le Luxe.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
                            Louez des tenues de créateurs pour vos moments inoubliables. Mariages, baptêmes, galas... rayonnez sans vous ruiner.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/collection" className="btn-primary text-center">
                                Découvrir la Collection
                            </Link>
                            <Link href="/comment-ca-marche" className="px-8 py-3 rounded-lg border-2 border-white/50 backdrop-blur-sm hover:bg-white hover:text-black transition-all font-semibold text-center">
                                Comment ça marche ?
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100">
                            <div className="p-4 bg-primary-50 rounded-2xl w-fit text-primary-600 mb-6">
                                <Shield className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Qualité Premium</h3>
                            <p className="text-gray-600">Nos tenues sont minutieusement sélectionnées et entretenues par des experts du pressing.</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100">
                            <div className="p-4 bg-gold-50 rounded-2xl w-fit text-gold-600 mb-6">
                                <Clock className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Flexibilité</h3>
                            <p className="text-gray-600">Louez pour 3, 4 ou 7 jours selon vos besoins. Livraison express partout à Dakar.</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100">
                            <div className="p-4 bg-purple-50 rounded-2xl w-fit text-purple-600 mb-6">
                                <Star className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Service VIP</h3>
                            <p className="text-gray-600">Un accompagnement personnalisé pour choisir la tenue qui sublimera votre silhouette.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-elegant font-bold mb-6">Prête pour votre prochain événement ?</h2>
                        <p className="text-xl text-gray-400 mb-10">Rejoignez des milliers de femmes élégantes au Sénégal qui font confiance à RobeSénégal.</p>
                        <Link href="/collection" className="inline-flex items-center gap-2 bg-white text-black px-10 py-4 rounded-xl font-bold hover:bg-gold-500 hover:text-white transition-all transform hover:scale-105">
                            Voir le catalogue <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
