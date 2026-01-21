'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Header />

            {/* HERO SECTION */}
            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=2574&auto=format&fit=crop"
                        alt="Élégante femme africaine"
                        className="w-full h-full object-cover brightness-[0.65]"
                    />
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/40 text-amber-200 text-sm font-bold tracking-widest uppercase mb-6 animate-fade-in-up">
                        🇸🇳 L'Excellence Sénégalaise
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-elegant font-bold text-white mb-6 leading-tight animate-fade-in-up delay-100">
                        Rayonnez en <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
                            Grande Dame.
                        </span>
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
                        La première plateforme de location de tenues de luxe à Dakar. <br className="hidden md:block" />
                        Boubous, Robes de soirée, et Tenues traditionnelles pour vos plus beaux événements.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in-up delay-300">
                        <Link
                            href="/collection"
                            className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-amber-50 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
                        >
                            Voir la Collection <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* WHY US SECTION */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-elegant font-bold text-slate-900 mb-6">
                            L'Expérience RobeSénégal
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Nous savons qu'au Sénégal, l'habillement est un art. Nous le traitons avec le respect qu'il mérite.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Feature 1 */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                            <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform">
                                <Shield className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900">Qualité Exceptionnelle</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Bazin Riche, Soie, Dentelle Autrichienne... Nos tenues sont sélectionnées pour leur prestance et entretenues par les meilleurs pressings de Dakar.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                                <Clock className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900">Livraison Express</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Commandez aujourd'hui, recevez demain. Nous livrons partout à Dakar (Plateau, Almadies, Mermoz, Sacré-Cœur...).
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                            <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-600 mb-6 group-hover:scale-110 transition-transform">
                                <Star className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900">Service Sur-Mesure</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Notre équipe de retoucheuses s'assure que votre tenue vous va à la perfection. L'ajustement est inclus dans le service.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* COLLECTIONS PREVIEW */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-elegant font-bold text-slate-900 mb-2">Nos Univers</h2>
                            <p className="text-gray-500">Trouvez la tenue parfaite pour chaque occasion.</p>
                        </div>
                        <Link href="/collection" className="hidden md:flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors">
                            Tout voir <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1: Boubous */}
                        <Link href="/collection?category=BOUBOUS" className="group cursor-pointer">
                            <div className="relative h-[500px] rounded-2xl overflow-hidden mb-4 shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1620215869408-54b0e5170d7e?q=80&w=2670&auto=format&fit=crop"
                                    alt="Boubous Traditionnels"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-2xl font-bold font-elegant">Boubous & Traditions</h3>
                                    <p className="text-sm text-gray-200 mt-1 opacity-100 transform translate-y-0 transition-all">L'élégance pure.</p>
                                </div>
                            </div>
                        </Link>

                        {/* Card 2: Robes Soirée */}
                        <Link href="/collection?category=ROBES_SOIREE" className="group cursor-pointer">
                            <div className="relative h-[500px] rounded-2xl overflow-hidden mb-4 shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=2524&auto=format&fit=crop"
                                    alt="Robes de Soirée"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-2xl font-bold font-elegant">Robes de Soirée</h3>
                                    <p className="text-sm text-gray-200 mt-1 opacity-100 transform translate-y-0 transition-all">Pour briller de mille feux.</p>
                                </div>
                            </div>
                        </Link>

                        {/* Card 3: Mariage */}
                        <Link href="/collection?occasion=MARIAGE" className="group cursor-pointer md:col-span-2 lg:col-span-1">
                            <div className="relative h-[500px] rounded-2xl overflow-hidden mb-4 shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1546522306-69a48f6828af?q=80&w=2574&auto=format&fit=crop"
                                    alt="Mariages & Cérémonies"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-2xl font-bold font-elegant">Mariages & Cérémonies</h3>
                                    <p className="text-sm text-gray-200 mt-1 opacity-100 transform translate-y-0 transition-all">Soyez l'invitée parfaite.</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <Link href="/collection" className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors">
                            Tout voir <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <section className="py-24 bg-slate-900 overflow-hidden relative">
                <div className="absolute inset-0 z-0 opacity-10">
                    <img
                        src="https://www.transparenttextures.com/patterns/cubes.png"
                        alt="Texture"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-elegant font-bold text-white mb-6">
                        Votre prochaine tenue vous attend.
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        Rejoignez la communauté des "Driankés" modernes et accédez à un dressing de rêve illimité.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/registre"
                            className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-all"
                        >
                            Créer un compte
                        </Link>
                        <Link
                            href="/collection"
                            className="px-8 py-4 bg-amber-500 text-white font-bold rounded-full hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/30"
                        >
                            Louer maintenant
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
