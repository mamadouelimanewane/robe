'use client';

import { CartProvider } from '@/context/CartContext';
import { FavoriteProvider } from '@/context/FavoriteContext';
import { Toaster } from 'react-hot-toast';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CartProvider>
            <FavoriteProvider>
                {children}
                <Toaster position="bottom-right" />
            </FavoriteProvider>
        </CartProvider>
    );
}
