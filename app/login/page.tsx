'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LoginPage() {
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
                <div className="max-w-md w-full">
                    {/* Card */}
                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-slate-100">
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-elegant font-bold text-slate-900 mb-2">Bon retour</h1>
                            <p className="text-gray-500">Connectez-vous pour gérer vos locations</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Email */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 ml-1">Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="email"
                                        required
                                        placeholder="votre@email.com"
                                        className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-center ml-1">
                                    <label className="text-sm font-semibold text-slate-700">Mot de passe</label>
                                    <Link href="/forgot-password" title="Mot de passe oublié" className="text-xs text-primary-600 hover:text-primary-700 font-medium">
                                        Oublié ?
                                    </Link>
                                </div>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        required
                                        placeholder="••••••••"
                                        className="w-full pl-12 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
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

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full btn-primary py-4 rounded-xl flex items-center justify-center space-x-2 font-bold disabled:opacity-70"
                            >
                                <span>{isLoading ? 'Connexion en cours...' : 'Se connecter'}</span>
                                {!isLoading && <ArrowRight className="w-5 h-5" />}
                            </button>
                        </form>

                        {/* Social Login (Optional/Visual) */}
                        <div className="mt-8 text-center">
                            <div className="relative mb-6">
                                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
                                <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-400 font-medium tracking-wider">Ou continuer avec</span></div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <button title="Google" className="flex items-center justify-center py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#EA4335" d="M12.48 10.92v3.28h7.84c-.24 1.84-.92 3.28-2.04 4.36-1.12 1.12-2.76 1.96-5.8 1.96-4.84 0-8.72-3.88-8.72-8.72S7.64 3 12.48 3c2.6 0 4.52.92 6.04 2.36l2.32-2.32C18.6 1.04 15.84 0 12.48 0 5.48 0 0 5.48 0 12.48S5.48 24.96 12.48 24.96c3.68 0 6.44-1.2 8.64-3.48 2.2-2.2 2.92-5.44 2.92-8.08 0-.68-.04-1.32-.16-1.92h-11.4z" /></svg>
                                </button>
                                <button title="Facebook" className="flex items-center justify-center py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                                    <svg className="w-6 h-6" fill="#1877F2" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                </button>
                            </div>
                        </div>

                        <p className="mt-8 text-center text-sm text-gray-500">
                            Pas encore de compte ?{' '}
                            <Link href="/registre" className="text-primary-600 font-bold hover:text-primary-700">
                                S'inscrire gratuitement
                            </Link>
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
