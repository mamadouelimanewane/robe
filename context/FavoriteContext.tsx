'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Product {
    id: string;
    name: string;
    brand: string;
    price: number;
    image: string;
}

interface FavoriteContextType {
    favorites: Product[];
    addFavorite: (product: Product) => void;
    removeFavorite: (id: string) => void;
    isFavorite: (id: string) => boolean;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

export function FavoriteProvider({ children }: { children: ReactNode }) {
    const [favorites, setFavorites] = useState<Product[]>([]);

    useEffect(() => {
        const savedFavorites = localStorage.getItem('favorites');
        if (savedFavorites) {
            setFavorites(JSON.parse(savedFavorites));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (product: Product) => {
        setFavorites((prev) => {
            if (prev.some((p) => p.id === product.id)) return prev;
            return [...prev, product];
        });
    };

    const removeFavorite = (id: string) => {
        setFavorites((prev) => prev.filter((product) => product.id !== id));
    };

    const isFavorite = (id: string) => {
        return favorites.some((product) => product.id === id);
    };

    return (
        <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
            {children}
        </FavoriteContext.Provider>
    );
}

export function useFavorites() {
    const context = useContext(FavoriteContext);
    if (context === undefined) {
        throw new Error('useFavorites must be used within a FavoriteProvider');
    }
    return context;
}
