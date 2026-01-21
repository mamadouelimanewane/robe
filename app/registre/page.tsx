'use client';

import { useState } from 'react';
import Link from 'next/link';
import { User, Mail, Phone, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulation
        setTimeout(() => setIsLoading(false), 2000);
    };

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Header />

            <main className="flex-grow flex items-center justify-center py-20 px-4">
                <div className="max-w-xl w-full">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-slate-100">
                        <div className="text-center mb-10">
                            <h1 className="text-3xl font-elegant font-bold text-slate-900 mb-2">Rejoignez RobeSénégal</h1>
                            <p className="text-gray-500">Louez des tenues d'exception en quelques clics</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Prénom */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 ml-1">Prénom</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input type="text" required placeholder="Abdou" className="register-input pl-12" />
                                    </div>
                                </div>
                                {/* Nom */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 ml-1">Nom</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input type="text" required placeholder="Diallo" className="register-input pl-12" />
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 ml-1">Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input type="email" required placeholder="abdou@email.com" className="register-input pl-12" />
                                </div>
                            </div>

                            {/* Téléphone (Clé pour Wave/OM au Sénégal) */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 ml-1">Numéro de Téléphone (Optionnel pour Wave)</label>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input type="tel" placeholder="+221 77 123 45 67" className="register-input pl-12" />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 ml-1">Mot de passe</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        required
                                        placeholder="Min. 8 caractères"
                                        className="register-input pl-12 pr-12"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-slate-600"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full btn-primary py-4 rounded-xl flex items-center justify-center space-x-2 font-bold disabled:opacity-70"
                                >
                                    <span>{isLoading ? 'Création en cours...' : 'Créer mon compte'}</span>
                                    {!isLoading && <ArrowRight className="w-5 h-5" />}
                                </button>
                            </div>
                        </form>

                        <p className="mt-8 text-center text-sm text-gray-500">
                            Déjà un compte ?{' '}
                            <Link href="/login" className="text-primary-600 font-bold hover:text-primary-700">
                                Se connecter
                            </Link>
                        </p>
                    </div>
                </div>
            </main>

            <Footer />

            <style jsx>{`
        .register-input {
          width: 100%;
          padding: 0.75rem 1rem;
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 0.75rem;
          outline: none;
          transition: all 0.2s;
        }
        .register-input:focus {
          border-color: transparent;
          box-shadow: 0 0 0 2px #d946ef;
        }
      `}</style>
        </div>
    );
}
