'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, Calendar, Truck, CheckCircle, Package, CreditCard } from 'lucide-react';

export default function CommentCaMarchePage() {
    const steps = [
        {
            icon: <Search className="w-12 h-12" />,
            title: '1. Parcourez notre Collection',
            description: 'Explorez notre catalogue de robes et tenues de luxe. Filtrez par catégorie, occasion, taille et couleur pour trouver la tenue parfaite.',
        },
        {
            icon: <Calendar className="w-12 h-12" />,
            title: '2. Choisissez vos Dates',
            description: 'Sélectionnez votre période de location (3, 4 ou 7 jours). Vérifiez la disponibilité en temps réel sur notre calendrier.',
        },
        {
            icon: <CreditCard className="w-12 h-12" />,
            title: '3. Réservez et Payez',
            description: 'Payez en toute sécurité avec Wave, Orange Money, Free Money ou carte bancaire. Une caution est demandée et remboursée après retour.',
        },
        {
            icon: <Truck className="w-12 h-12" />,
            title: '4. Recevez votre Tenue',
            description: 'Livraison gratuite à Dakar 1-2 jours avant votre événement. Possibilité de retrait en boutique à Almadies.',
        },
        {
            icon: <CheckCircle className="w-12 h-12" />,
            title: '5. Brillez lors de votre Événement',
            description: 'Profitez de votre cérémonie avec élégance ! La tenue est déjà lavée et prête à porter.',
        },
        {
            icon: <Package className="w-12 h-12" />,
            title: '6. Retournez la Tenue',
            description: 'Retour gratuit par coursier ou dépôt en boutique. Pas besoin de nettoyer, nous nous en occupons !',
        },
    ];

    const faqs = [
        {
            question: 'Quelle est la durée minimale de location ?',
            answer: 'La durée minimale est de 3 jours. Vous pouvez louer pour 3, 4 ou 7 jours selon vos besoins.',
        },
        {
            question: 'Comment fonctionne la caution ?',
            answer: 'Une caution équivalente à 50% du prix de location est demandée. Elle est entièrement remboursée dans les 3 jours suivant le retour de la tenue en bon état.',
        },
        {
            question: 'Que se passe-t-il si la tenue ne me va pas ?',
            answer: 'Nous vous conseillons de bien vérifier vos mesures avant la réservation. En cas de problème, contactez-nous immédiatement pour un échange (sous réserve de disponibilité).',
        },
        {
            question: 'Puis-je annuler ma réservation ?',
            answer: 'Oui, une annulation est possible jusqu\'à 7 jours avant la date de réception. Au-delà, des frais d\'annulation peuvent s\'appliquer.',
        },
    ];

    return (
        <div className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary-600 to-purple-700 py-20 px-4">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h1 className="text-5xl font-elegant font-bold mb-6">
                        Comment ça Marche ?
                    </h1>
                    <p className="text-xl text-gray-100">
                        Louer une tenue de luxe n'a jamais été aussi simple. Suivez ces 6 étapes faciles.
                    </p>
                </div>
            </section>

            {/* Steps Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg card-hover"
                            >
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full text-white mb-6">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 px-4 bg-gray-50 dark:bg-slate-900">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-elegant font-bold text-center mb-12">
                        Nos <span className="gradient-text">Tarifs</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg text-center">
                            <div className="text-4xl font-bold mb-2 gradient-text">3 Jours</div>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">Weekend</p>
                            <p className="text-sm text-gray-500">À partir de</p>
                            <p className="text-3xl font-bold mb-4">50 000 FCFA</p>
                        </div>
                        <div className="bg-gradient-to-br from-primary-500 to-purple-600 p-8 rounded-2xl shadow-xl text-center text-white transform scale-105">
                            <div className="text-sm font-semibold mb-2">POPULAIRE</div>
                            <div className="text-4xl font-bold mb-2">4 Jours</div>
                            <p className="mb-4 opacity-90">Long Weekend</p>
                            <p className="text-sm opacity-80">À partir de</p>
                            <p className="text-3xl font-bold mb-4">65 000 FCFA</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg text-center">
                            <div className="text-4xl font-bold mb-2 gradient-text">7 Jours</div>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">Semaine</p>
                            <p className="text-sm text-gray-500">À partir de</p>
                            <p className="text-3xl font-bold mb-4">90 000 FCFA</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-elegant font-bold text-center mb-12">
                        Questions <span className="gradient-text">Fréquentes</span>
                    </h2>
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg"
                            >
                                <h3 className="text-lg font-bold mb-3 flex items-start">
                                    <span className="text-primary-600 mr-3">Q:</span>
                                    {faq.question}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 ml-8">
                                    <span className="text-gold-600 font-bold mr-2">R:</span>
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-br from-primary-600 to-purple-700">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-4xl font-elegant font-bold mb-6">
                        Prête à Commencer ?
                    </h2>
                    <p className="text-xl mb-8 text-gray-100">
                        Parcourez notre collection et réservez votre tenue dès maintenant
                    </p>
                    <a href="/location-luxe" className="btn-secondary inline-block">
                        Voir la Collection
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}
