'use client';

import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About */}
                    <div>
                        <h3 className="text-2xl font-elegant font-bold gradient-text mb-4">
                            RobeSénégal
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                            La première plateforme de location de tenues de cérémonie au Sénégal.
                            Des robes de luxe pour tous vos événements spéciaux.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                                className="p-2 bg-white/10 rounded-full hover:bg-primary-600 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                                className="p-2 bg-white/10 rounded-full hover:bg-primary-600 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Liens Rapides</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/comment-ca-marche" className="hover:text-white transition-colors">Comment ça marche ?</Link></li>
                            <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                            <li><Link href="/conditions" className="hover:text-white transition-colors">Conditions de location</Link></li>
                            <li><Link href="/avis" className="hover:text-white transition-colors">Avis clients</Link></li>
                            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="font-semibold mb-4">Catégories</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/categories/robes-longues" className="hover:text-white transition-colors">Robes Longues</Link></li>
                            <li><Link href="/categories/robes-courtes" className="hover:text-white transition-colors">Robes Courtes</Link></li>
                            <li><Link href="/categories/accessoires" className="hover:text-white transition-colors">Accessoires</Link></li>
                            <li><Link href="/categories/hommes" className="hover:text-white transition-colors">Pour Lui</Link></li>
                            <li><Link href="/occasions/mariage" className="hover:text-white transition-colors">Mariages</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-start space-x-2">
                                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                <span>Dakar, Sénégal<br />Almadies, Route des Almadies</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Phone className="w-5 h-5 flex-shrink-0" />
                                <span>+221 77 123 45 67</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Mail className="w-5 h-5 flex-shrink-0" />
                                <span>contact@robesenegal.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} RobeSénégal. Tous droits réservés.</p>
                    <div className="mt-2 space-x-4">
                        <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
                        <Link href="/confidentialite" className="hover:text-white transition-colors">Confidentialité</Link>
                        <Link href="/cgv" className="hover:text-white transition-colors">CGV</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
