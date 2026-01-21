'use client';

import { useState } from 'react';
import { Plus, Search, Filter, Edit, Trash2, Eye } from 'lucide-react';

export default function ProduitsPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const products = [
        {
            id: '1',
            name: 'Robe Longue Dorée',
            brand: 'Valentino',
            category: 'Robes Longues',
            price3Days: 85000,
            price4Days: 110000,
            price7Days: 150000,
            stock: 1,
            available: true,
            image: '/images/robe1.jpg',
        },
        {
            id: '2',
            name: 'Ensemble Bleu Nuit',
            brand: 'Dior',
            category: 'Smokings & Ensembles',
            price3Days: 120000,
            price4Days: 155000,
            price7Days: 200000,
            stock: 1,
            available: false,
            image: '/images/ensemble1.jpg',
        },
        {
            id: '3',
            name: 'Robe Cocktail Rose',
            brand: 'Chanel',
            category: 'Robes Courtes',
            price3Days: 95000,
            price4Days: 125000,
            price7Days: 165000,
            stock: 1,
            available: true,
            image: '/images/robe2.jpg',
        },
    ];

    return (
        <div className="space-y-6">
            {/* Header Actions */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1 max-w-md">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Rechercher un produit..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-slate-700"
                        />
                    </div>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                        <Filter className="w-5 h-5" />
                        <span>Filtrer</span>
                    </button>
                    <button className="btn-primary flex items-center space-x-2">
                        <Plus className="w-5 h-5" />
                        <span>Ajouter un Produit</span>
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Total Produits</p>
                    <p className="text-2xl font-bold">156</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Disponibles</p>
                    <p className="text-2xl font-bold text-green-500">142</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow">
                    <p className="text-sm text-gray-600 dark:text-gray-400">En Location</p>
                    <p className="text-2xl font-bold text-blue-500">12</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow">
                    <p className="text-sm text-gray-600 dark:text-gray-400">En Maintenance</p>
                    <p className="text-2xl font-bold text-orange-500">2</p>
                </div>
            </div>

            {/* Products Table */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 dark:bg-slate-700">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Produit
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Catégorie
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Prix 3J
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Prix 4J
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Prix 7J
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Statut
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
                            {products.map((product) => (
                                <tr
                                    key={product.id}
                                    className="hover:bg-gray-50 dark:hover:bg-slate-700"
                                >
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="h-12 w-12 flex-shrink-0 bg-gray-200 dark:bg-slate-600 rounded-lg"></div>
                                            <div className="ml-4">
                                                <div className="font-medium">{product.name}</div>
                                                <div className="text-sm text-gray-500">{product.brand}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="text-sm">{product.category}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="font-medium">{product.price3Days.toLocaleString()} FCFA</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="font-medium">{product.price4Days.toLocaleString()} FCFA</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="font-medium">{product.price7Days.toLocaleString()} FCFA</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span
                                            className={`px-2 py-1 text-xs font-medium rounded-full ${product.available
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-red-100 text-red-800'
                                                }`}
                                        >
                                            {product.available ? 'Disponible' : 'Indisponible'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <div className="flex items-center justify-end space-x-2">
                                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Affichage de 1 à 3 sur 156 produits
                </p>
                <div className="flex space-x-2">
                    <button className="px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700">
                        Précédent
                    </button>
                    <button className="px-4 py-2 bg-primary-600 text-white rounded-lg">
                        1
                    </button>
                    <button className="px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700">
                        2
                    </button>
                    <button className="px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700">
                        Suivant
                    </button>
                </div>
            </div>
        </div>
    );
}
