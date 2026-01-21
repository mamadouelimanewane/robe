'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=2000"
                        alt="Femme africaine souriante en tenue élégant"
                        className="w-full h-full object-cover brightness-[0.6]"
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                    <div className="max-w-2xl animate-fade-in-up">
                        <span className="inline-block px-4 py-1 rounded-full bg-primary-500/20 backdrop-blur-md border border-primary-500/30 text-primary-200 text-sm font-semibold mb-6 tracking-wide uppercase">
                            🇸🇳 L'élégance à la Sénégalaise
                        </span>
                        <h1 className="text-5xl md:text-7xl font-elegant font-bold mb-6 leading-tight">
                            Rayonnez en <br />
                            <span className="gradient-text">Grande Dame.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-lg">
                            Des Boubous riches aux Robes de soirée occidentales. Louez l'excellence pour vos Magals, Mariages et Galas sans vous ruiner.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/collection" className="btn-primary text-center">
                                Voir la Collection
                            </Link>
                            <Link href="/comment-ca-marche" className="px-8 py-3 rounded-lg border-2 border-white/50 backdrop-blur-sm hover:bg-white hover:text-black transition-all font-semibold text-center">
                                Comment ça marche ?
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 bg-slate-50 relative overflow-hidden">
                {/* Decorative pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full blur-[100px] opacity-30 -translate-y-1/2 translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-elegant font-bold text-slate-900 mb-4">Pourquoi Choisir RobeSénégal ?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Nous connaissons les exigences des grandes cérémonies dakaroises.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
                            <div className="p-4 bg-primary-50 rounded-2xl w-fit text-primary-600 mb-6 group-hover:scale-110 transition-transform">
                                <Shield className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 font-elegant">Qualité "Thiébou Dieune"</h3>
                            <p className="text-gray-600">Bazin riche, Soie naturelle, Dentelle autrichienne... Des matières nobles entretenues par les meilleurs pressings de la place.</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
                            <div className="p-4 bg-gold-50 rounded-2xl w-fit text-gold-600 mb-6 group-hover:scale-110 transition-transform">
                                <Clock className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 font-elegant">Zéro Stress</h3>
                            <p className="text-gray-600">Livraison express en 24H partout à Dakar (Plateau, Almadies, Mermoz...). On livre, vous portez, on récupère.</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
                            <div className="p-4 bg-purple-50 rounded-2xl w-fit text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                                <Star className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 font-elegant">Service Sur-Mesure</h3>
                            <p className="text-gray-600">Besoin d'un ourlet ou d'un ajustement ? Notre équipe de tailleurs experts s'assure que tout tombe parfaitement.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual Mosaic Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1546522306-69a48f6828af?q=80&w=1000"
                                alt="Collection Robes Afro Chic"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                                <h3 className="text-white text-2xl font-elegant font-bold">Collection Afro-Chic</h3>
                                <p className="text-gray-200 mt-2">Le mariage parfait entre tradition et modernité.</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-4xl font-elegant font-bold text-slate-900 leading-tight">
                                Sublimez votre présence à chaque événement.
                            </h2>
                            <p className="text-lg text-gray-600">
                                Que ce soit pour un mariage grandiose au King Fahd ou une soirée privée aux Almadies, nous avons la tenue qui fera tourner les têtes.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-700">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600"><ArrowRight className="w-4 h-4" /></div>
                                    <span>Plus de 500 modèles uniques</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600"><ArrowRight className="w-4 h-4" /></div>
                                    <span>Nouveautés chaque semaine</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600"><ArrowRight className="w-4 h-4" /></div>
                                    <span>Essayage à domicile disponible</span>
                                </li>
                            </ul>
                            <div className="pt-4">
                                <Link href="/registre" className="btn-secondary inline-block">
                                    Créer mon compte gratuit
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=2000"
                        alt="Background Texture"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-900/80 z-0"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-elegant font-bold mb-6 text-white">Prête à briller ?</h2>
                        <p className="text-xl text-gray-300 mb-10">
                            Rejoignez la communauté des "Driankés" modernes.
                        </p>
                        <Link href="/collection" className="inline-flex items-center gap-2 bg-white text-black px-10 py-4 rounded-xl font-bold hover:bg-gold-500 hover:text-white transition-all transform hover:scale-105 shadow-xl">
                            Voir le catalogue <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
