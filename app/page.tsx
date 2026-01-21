'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <Header />

            {/* HERO SECTION - SPLIT LAYOUT (Texte Gauche / Images Droite) */}
            <section className="relative pt-8 pb-20 lg:pt-12 lg:pb-28 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                        {/* Colonne Texte (Gauche) */}
                        <div className="max-w-2xl">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-sm font-bold tracking-widest uppercase mb-6">
                                🇸🇳 Dakar, Sénégal
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-elegant font-bold leading-tight mb-6 text-slate-900">
                                L'Élégance <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500">
                                    Sur Mesure.
                                </span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Louez des tenues de haute couture pour vos cérémonies.
                                Boubous, Robes de soirée et Accessoires de luxe disponibles immédiatement à Dakar.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/collection"
                                    className="px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-all flex items-center"
                                >
                                    Voir le catalogue <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                                <Link
                                    href="/comment-ca-marche"
                                    className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 font-bold rounded-full hover:bg-slate-50 transition-all"
                                >
                                    Comment ça marche ?
                                </Link>
                            </div>

                            {/* Trust Indicators - Mini ligne horizontale */}
                            <div className="mt-10 flex items-center gap-6 text-sm text-gray-500 font-medium">
                                <div className="flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-amber-500" /> Qualité Premium
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-amber-500" /> Livraison 24h
                                </div>
                            </div>
                        </div>

                        {/* Colonne Images (Droite - Mosaïque) */}
                        <div className="relative hidden lg:block h-[600px]">
                            {/* Image Principale */}
                            <div className="absolute top-0 right-0 w-3/4 h-[85%] rounded-[2rem] overflow-hidden shadow-2xl z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000&auto=format&fit=crop"
                                    alt="Robe de soirée élégante"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Petite Image Flottante (Gauche Bas) */}
                            <div className="absolute bottom-0 left-0 w-1/2 h-[50%] rounded-[2rem] overflow-hidden shadow-2xl z-20 border-4 border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1546522306-69a48f6828af?q=80&w=1000&auto=format&fit=crop"
                                    alt="Tenue traditionnelle chic"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Cercle Décoratif */}
                            <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-amber-400 rounded-full blur-2xl opacity-20 -z-10"></div>
                        </div>

                        {/* Version Mobile de l'image (Une seule pour éviter le scroll vertical infini sur petit écran) */}
                        <div className="lg:hidden rounded-2xl overflow-hidden shadow-lg h-[400px]">
                            <img
                                src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000&auto=format&fit=crop"
                                alt="Femme africaine élégante"
                                className="w-full h-full object-cover"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* CATEGORIES GRID (3 Colonnes côte à côte) */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-elegant font-bold">Nos Collections</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Card 1 */}
                        <Link href="/collection?category=BOUBOUS" className="group relative h-80 rounded-2xl overflow-hidden shadow-md">
                            <img
                                src="https://images.unsplash.com/photo-1620215869408-54b0e5170d7e?q=80&w=800&auto=format&fit=crop"
                                alt="Boubous"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                            <div className="absolute bottom-0 left-0 p-6 text-white">
                                <h3 className="text-2xl font-bold font-elegant">Boubous</h3>
                                <p className="text-sm opacity-90">Tradition & Modernité</p>
                            </div>
                        </Link>

                        {/* Card 2 */}
                        <Link href="/collection?category=ROBES_SOIREE" className="group relative h-80 rounded-2xl overflow-hidden shadow-md">
                            <img
                                src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800&auto=format&fit=crop"
                                alt="Soirée"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                            <div className="absolute bottom-0 left-0 p-6 text-white">
                                <h3 className="text-2xl font-bold font-elegant">Soirée</h3>
                                <p className="text-sm opacity-90">Brillez de mille feux</p>
                            </div>
                        </Link>

                        {/* Card 3 */}
                        <Link href="/collection?occasion=MARIAGE" className="group relative h-80 rounded-2xl overflow-hidden shadow-md sm:col-span-2 lg:col-span-1">
                            <img
                                src="https://images.unsplash.com/photo-1546522306-69a48f6828af?q=80&w=800&auto=format&fit=crop"
                                alt="Mariage"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                            <div className="absolute bottom-0 left-0 p-6 text-white">
                                <h3 className="text-2xl font-bold font-elegant">Mariages</h3>
                                <p className="text-sm opacity-90">L'invitée parfaite</p>
                            </div>
                        </Link>

                    </div>
                </div>
            </section>

            {/* FEATURES BANNER (Horizontal) */}
            <section className="py-16 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
                        <div className="p-4">
                            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Qualité Garantie</h3>
                            <p className="text-gray-500 text-sm">Pressing inclus et état impeccable.</p>
                        </div>
                        <div className="p-4">
                            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Livraison & Retour</h3>
                            <p className="text-gray-500 text-sm">On livre et on récupère chez vous.</p>
                        </div>
                        <div className="p-4">
                            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Star className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Service Client</h3>
                            <p className="text-gray-500 text-sm">Une équipe à votre écoute 7j/7.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="py-20 bg-slate-900 text-white text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-elegant font-bold mb-6">Prête à sublimer votre événement ?</h2>
                    <Link href="/collection" className="inline-block px-10 py-4 bg-amber-500 text-white font-bold rounded-full hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/30">
                        Découvrir la Collection
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
