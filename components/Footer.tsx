'use client';

import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#0f172a', color: 'white', marginTop: '80px', padding: '60px 0 30px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>

                {/* Structure FLEXBOX pour garantir l'horizontalité sur Desktop */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    gap: '40px'
                }}>

                    {/* Colonne 1: Brand */}
                    <div style={{ flex: '1 1 250px', minWidth: '250px' }}>
                        <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>
                            RobeSénégal
                        </h3>
                        <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
                            La première plateforme de location de tenues de cérémonie au Sénégal.
                            Des robes de luxe pour tous vos événements spéciaux.
                        </p>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <a href="#" style={{ padding: '8px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', color: 'white', display: 'flex' }}>
                                <Facebook size={20} />
                            </a>
                            <a href="#" style={{ padding: '8px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', color: 'white', display: 'flex' }}>
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Colonne 2: Liens Rapides */}
                    <div style={{ flex: '1 1 200px' }}>
                        <h4 style={{ fontWeight: '600', marginBottom: '20px' }}>Liens Rapides</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#94a3b8', fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <li><Link href="/comment-ca-marche" style={{ textDecoration: 'none', color: 'inherit' }}>Comment ça marche ?</Link></li>
                            <li><Link href="/faq" style={{ textDecoration: 'none', color: 'inherit' }}>FAQ</Link></li>
                            <li><Link href="/conditions" style={{ textDecoration: 'none', color: 'inherit' }}>Conditions de location</Link></li>
                            <li><Link href="/avis" style={{ textDecoration: 'none', color: 'inherit' }}>Avis clients</Link></li>
                        </ul>
                    </div>

                    {/* Colonne 3: Catégories */}
                    <div style={{ flex: '1 1 200px' }}>
                        <h4 style={{ fontWeight: '600', marginBottom: '20px' }}>Catégories</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#94a3b8', fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <li><Link href="/collection?category=BOUBOUS" style={{ textDecoration: 'none', color: 'inherit' }}>Boubous</Link></li>
                            <li><Link href="/collection?category=ROBES_SOIREE" style={{ textDecoration: 'none', color: 'inherit' }}>Robes de Soirée</Link></li>
                            <li><Link href="/collection?occasion=MARIAGE" style={{ textDecoration: 'none', color: 'inherit' }}>Mariages</Link></li>
                            <li><Link href="/collection?category=ACCESSOIRES" style={{ textDecoration: 'none', color: 'inherit' }}>Accessoires</Link></li>
                        </ul>
                    </div>

                    {/* Colonne 4: Contact */}
                    <div style={{ flex: '1 1 250px' }}>
                        <h4 style={{ fontWeight: '600', marginBottom: '20px' }}>Contact</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#94a3b8', fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <li style={{ display: 'flex', gap: '10px' }}>
                                <MapPin size={20} />
                                <span>Dakar, Sénégal<br />Almadies, Route des Almadies</span>
                            </li>
                            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <Phone size={20} />
                                <span>+221 77 123 45 67</span>
                            </li>
                            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <Mail size={20} />
                                <span>contact@robesenegal.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div style={{ borderTop: '1px solid #334155', marginTop: '40px', paddingTop: '30px', textAlign: 'center', fontSize: '14px', color: '#94a3b8' }}>
                    <p style={{ marginBottom: '10px' }}>&copy; {new Date().getFullYear()} RobeSénégal. Tous droits réservés.</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                        <Link href="/mentions-legales" style={{ textDecoration: 'none', color: 'inherit' }}>Mentions légales</Link>
                        <Link href="/confidentialite" style={{ textDecoration: 'none', color: 'inherit' }}>Confidentialité</Link>
                        <Link href="/cgv" style={{ textDecoration: 'none', color: 'inherit' }}>CGV</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
