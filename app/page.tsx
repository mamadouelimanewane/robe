'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Sparkles, Calendar, Shield, Truck } from 'lucide-react';

export default function Home() {
    const categories = [
        { name: 'Robes Longues', image: '/images/robes-longues.jpg', href: '/collection?category=ROBES_LONGUES' },
        { name: 'Robes Courtes', image: '/images/robes-courtes.jpg', href: '/collection?category=ROBES_COURTES_MIDI' },
        { name: 'Smokings & Ensembles', image: '/images/smokings.jpg', href: '/collection?category=SMOKINGS_ENSEMBLES' },
        { name: 'Accessoires', image: '/images/accessoires.jpg', href: '/collection?category=SACS_ACCESSOIRES' },
    ];

    const occasions = [
        { name: 'Mariages', emoji: '💒', href: '/collection?occasion=MARIAGE' },
        { name: 'Baptêmes', emoji: '👶', href: '/collection?occasion=BAPTEME' },
        { name: 'Tabaski', emoji: '🕌', href: '/collection?occasion=TABASKI' },
        { name: 'Galas', emoji: '🎭', href: '/collection?occasion=GALA' },
    ];

    const features = [
        {
            icon: <Sparkles className="w-8 h-8" />,
            title: 'Tenues de Luxe',
            description: 'Des robes et tenues de marques prestigieuses pour vos événements',
        },
        {
            icon: <Calendar className="w-8 h-8" />,
            title: 'Réservation Facile',
            description: 'Réservez en ligne et choisissez vos dates de location',
        },
        {
            icon: <Truck className="w-8 h-8" />,
            title: 'Livraison à Dakar',
            description: 'Livraison et retrait gratuits dans toute la région de Dakar',
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: 'Paiement Sécurisé',
            description: 'Wave, Orange Money, Free Money et carte bancaire acceptés',
        },
    ];

    return (
        <div className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Background with gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-purple-800 to-gold-900"></div>
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-72 h-72 bg-gold-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-elegant font-bold text-white mb-6 leading-tight">
                        Louez la Robe de vos Rêves
                        <br />
                        <span className="gradient-text bg-gradient-to-r from-gold-300 to-primary-300 bg-clip-text text-transparent">
                            Pour Votre Cérémonie
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                        Des tenues de luxe pour mariages, baptêmes, galas et toutes vos cérémonies au Sénégal
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/collection" className="btn-primary inline-flex items-center justify-center space-x-2">
                            <span>Découvrir la Collection</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link href="/comment-ca-marche" className="btn-secondary inline-flex items-center justify-center">
                            Comment ça marche ?
                        </Link>
                    </div>
                </div>
            </section>

            {/* Occasions Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-elegant font-bold text-center mb-12">
                        Pour Quelle <span className="gradient-text">Occasion</span> ?
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {occasions.map((occasion) => (
                            <Link
                                key={occasion.name}
                                href={occasion.href}
                                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-500 to-purple-600 p-8 text-center card-hover"
                            >
                                <div className="text-6xl mb-4">{occasion.emoji}</div>
                                <h3 className="text-xl font-semibold text-white">{occasion.name}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-20 px-4 bg-gray-50 dark:bg-slate-900">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-elegant font-bold text-center mb-12">
                        Nos <span className="gradient-text">Catégories</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories.map((category) => (
                            <Link
                                key={category.name}
                                href={category.href}
                                className="group relative overflow-hidden rounded-2xl h-80 card-hover"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                                <div className="absolute inset-0 bg-primary-600/20 group-hover:bg-primary-600/40 z-0 transition-colors"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                                    <h3 className="text-2xl font-elegant font-bold text-white mb-2">
                                        {category.name}
                                    </h3>
                                    <span className="text-gold-400 inline-flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                                        <span>Découvrir</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-elegant font-bold text-center mb-12">
                        Pourquoi <span className="gradient-text">RobeSénégal</span> ?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="text-center p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-lg card-hover"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full text-white mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-br from-primary-600 to-purple-700">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-4xl font-elegant font-bold mb-6">
                        Prête à Briller lors de Votre Prochaine Cérémonie ?
                    </h2>
                    <p className="text-xl mb-8 text-gray-100">
                        Parcourez notre collection et trouvez la tenue parfaite pour votre événement
                    </p>
                    <Link href="/collection" className="btn-secondary inline-flex items-center space-x-2">
                        <span>Voir Toutes les Robes</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
