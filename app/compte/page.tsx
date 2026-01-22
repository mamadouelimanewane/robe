'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Package, Calendar, Clock, ChevronRight, User, Settings, LogOut } from 'lucide-react';
import Link from 'next/link';

export default function AccountPage() {
    const [activeTab, setActiveTab] = useState('locations');

    const myBookings = [
        {
            id: 'RES-8921',
            productName: 'Robe de Mariée "Sira"',
            image: 'https://images.unsplash.com/photo-1546193430-c2d20e03daa9?q=80&w=800',
            status: 'En cours',
            statusColor: 'text-blue-600 bg-blue-50',
            date: '15 - 18 Fév 2026',
            price: '150 000 FCFA'
        },
        {
            id: 'RES-7742',
            productName: 'Ensemble Grand Boubou Turquoise',
            image: 'https://images.unsplash.com/photo-1583073066166-3d6069927d63?q=80&w=800',
            status: 'Terminée',
            statusColor: 'text-green-600 bg-green-50',
            date: '10 - 13 Jan 2026',
            price: '75 000 FCFA'
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Menu Latéral */}
                    <aside className="w-full lg:w-64 space-y-2">
                        <button
                            onClick={() => setActiveTab('locations')}
                            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'locations' ? 'bg-primary-600 text-white shadow-lg' : 'hover:bg-white text-slate-600'
                                }`}
                        >
                            <Package className="w-5 h-5" />
                            <span className="font-bold">Mes Locations</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('profil')}
                            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'profil' ? 'bg-primary-600 text-white shadow-lg' : 'hover:bg-white text-slate-600'
                                }`}
                        >
                            <User className="w-5 h-5" />
                            <span className="font-bold">Profil Personnel</span>
                        </button>
                        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-white text-slate-600 transition-all">
                            <Settings className="w-5 h-5" />
                            <span className="font-bold">Paramètres</span>
                        </button>
                        <div className="pt-4 border-t border-slate-200 mt-4">
                            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-all">
                                <LogOut className="w-5 h-5" />
                                <span className="font-bold">Déconnexion</span>
                            </button>
                        </div>
                    </aside>

                    {/* Contenu Principal */}
                    <div className="flex-1 space-y-6">
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                            <h1 className="text-3xl font-elegant font-bold text-slate-900 mb-2">Bonjour, Abdou !</h1>
                            <p className="text-gray-500">Bienvenue dans votre espace personnel RobeSénégal.</p>
                        </div>

                        {activeTab === 'locations' && (
                            <div className="space-y-4">
                                <h2 className="text-xl font-bold text-slate-800 ml-2">Historique de vos locations</h2>

                                {myBookings.map((booking) => (
                                    <div key={booking.id} className="bg-white rounded-3xl p-4 md:p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                        <div className="flex flex-col md:flex-row items-center gap-6">
                                            <div className="relative w-24 h-32 rounded-2xl overflow-hidden flex-shrink-0">
                                                <Image
                                                    src={booking.image}
                                                    alt={booking.productName}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="flex-grow text-center md:text-left">
                                                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2 justify-center md:justify-start">
                                                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${booking.statusColor}`}>
                                                        {booking.status}
                                                    </span>
                                                    <span className="text-xs text-gray-400 font-medium">#{booking.id}</span>
                                                </div>
                                                <h3 className="text-lg font-bold text-slate-900 mb-1">{booking.productName}</h3>
                                                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-500 mt-3">
                                                    <div className="flex items-center space-x-1">
                                                        <Calendar className="w-4 h-4 text-primary-500" />
                                                        <span>{booking.date}</span>
                                                    </div>
                                                    <div className="flex items-center space-x-1">
                                                        <Clock className="w-4 h-4 text-primary-500" />
                                                        <span>3 jours</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center md:text-right border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-8 min-w-[150px]">
                                                <p className="text-xl font-bold text-slate-900 mb-3">{booking.price}</p>
                                                <button className="flex items-center justify-center space-x-1 text-sm font-bold text-primary-600 hover:text-primary-700 mx-auto md:ml-auto">
                                                    <span>Voir détails</span>
                                                    <ChevronRight className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <Link href="/collection" className="block text-center py-6 border-2 border-dashed border-slate-200 rounded-3xl text-gray-400 hover:border-primary-300 hover:text-primary-600 transition-all">
                                    <p className="font-bold">+ Découvrir de nouvelles tenues</p>
                                </Link>
                            </div>
                        )}

                        {activeTab === 'profil' && (
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                                <h2 className="text-xl font-bold mb-6">Informations personnelles</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-1">
                                        <p className="text-xs font-bold text-gray-400 uppercase">Prénom</p>
                                        <p className="font-medium text-slate-800">Abdou</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xs font-bold text-gray-400 uppercase">Nom</p>
                                        <p className="font-medium text-slate-800">Diallo</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xs font-bold text-gray-400 uppercase">Email</p>
                                        <p className="font-medium text-slate-800">abdou@email.com</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xs font-bold text-gray-400 uppercase">Téléphone</p>
                                        <p className="font-medium text-slate-800">+221 77 123 45 67</p>
                                    </div>
                                </div>
                                <button className="mt-8 btn-secondary py-3 px-8 rounded-xl font-bold">Modifier le profil</button>
                            </div>
                        )}
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
