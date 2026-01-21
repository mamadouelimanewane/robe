'use client';

import {
    TrendingUp,
    ShoppingBag,
    Calendar,
    Users,
    CreditCard,
    AlertCircle
} from 'lucide-react';

export default function AdminDashboard() {
    const stats = [
        {
            name: 'Réservations du mois',
            value: '45',
            change: '+12%',
            trend: 'up',
            icon: Calendar,
            color: 'bg-blue-500',
        },
        {
            name: 'Revenus du mois',
            value: '2 450 000 FCFA',
            change: '+23%',
            trend: 'up',
            icon: CreditCard,
            color: 'bg-green-500',
        },
        {
            name: 'Nouveaux clients',
            value: '28',
            change: '+8%',
            trend: 'up',
            icon: Users,
            color: 'bg-purple-500',
        },
        {
            name: 'Produits en location',
            value: '12',
            change: '-2',
            trend: 'down',
            icon: ShoppingBag,
            color: 'bg-orange-500',
        },
    ];

    const recentBookings = [
        {
            id: '1',
            client: 'Aminata Diallo',
            product: 'Robe Longue Dorée - Valentino',
            date: '15-25 Fév 2026',
            status: 'confirmed',
            amount: '85 000 FCFA',
        },
        {
            id: '2',
            client: 'Fatou Seck',
            product: 'Ensemble Bleu Nuit - Dior',
            date: '20-23 Fév 2026',
            status: 'pending',
            amount: '120 000 FCFA',
        },
        {
            id: '3',
            client: 'Khady Ba',
            product: 'Robe Cocktail Rose - Chanel',
            date: '18-21 Fév 2026',
            status: 'in_use',
            amount: '95 000 FCFA',
        },
    ];

    const alerts = [
        {
            type: 'warning',
            message: '3 réservations en attente de confirmation',
        },
        {
            type: 'info',
            message: '5 produits à retourner cette semaine',
        },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'confirmed': return 'bg-green-100 text-green-800';
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            case 'in_use': return 'bg-blue-100 text-blue-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusLabel = (status: string) => {
        switch (status) {
            case 'confirmed': return 'Confirmée';
            case 'pending': return 'En attente';
            case 'in_use': return 'En cours';
            default: return status;
        }
    };

    return (
        <div className="space-y-6">
            {/* Alerts */}
            {alerts.length > 0 && (
                <div className="space-y-3">
                    {alerts.map((alert, index) => (
                        <div
                            key={index}
                            className={`flex items-center space-x-3 p-4 rounded-lg ${alert.type === 'warning'
                                    ? 'bg-yellow-50 border border-yellow-200'
                                    : 'bg-blue-50 border border-blue-200'
                                }`}
                        >
                            <AlertCircle
                                className={`w-5 h-5 ${alert.type === 'warning' ? 'text-yellow-600' : 'text-blue-600'
                                    }`}
                            />
                            <span
                                className={`text-sm font-medium ${alert.type === 'warning' ? 'text-yellow-800' : 'text-blue-800'
                                    }`}
                            >
                                {alert.message}
                            </span>
                        </div>
                    ))}
                </div>
            )}

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div
                        key={stat.name}
                        className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 card-hover"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex-1">
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                                    {stat.name}
                                </p>
                                <p className="text-2xl font-bold mb-2">{stat.value}</p>
                                <div className="flex items-center space-x-1">
                                    <TrendingUp
                                        className={`w-4 h-4 ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                                            }`}
                                    />
                                    <span
                                        className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                                            }`}
                                    >
                                        {stat.change}
                                    </span>
                                </div>
                            </div>
                            <div className={`${stat.color} p-3 rounded-lg`}>
                                <stat.icon className="w-6 h-6 text-white" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Bookings */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-200 dark:border-slate-700">
                    <h2 className="text-xl font-bold">Réservations Récentes</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 dark:bg-slate-700">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Client
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Produit
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Dates
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Statut
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Montant
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
                            {recentBookings.map((booking) => (
                                <tr
                                    key={booking.id}
                                    className="hover:bg-gray-50 dark:hover:bg-slate-700 cursor-pointer"
                                >
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="font-medium">{booking.client}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm">{booking.product}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        {booking.date}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span
                                            className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                                                booking.status
                                            )}`}
                                        >
                                            {getStatusLabel(booking.status)}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium">
                                        {booking.amount}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <button className="bg-gradient-to-r from-primary-600 to-purple-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                    <h3 className="font-bold text-lg mb-2">Ajouter un Produit</h3>
                    <p className="text-sm opacity-90">Ajouter une nouvelle robe au catalogue</p>
                </button>
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                    <h3 className="font-bold text-lg mb-2">Nouvelle Réservation</h3>
                    <p className="text-sm opacity-90">Créer une réservation manuellement</p>
                </button>
                <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                    <h3 className="font-bold text-lg mb-2">Gérer les Retours</h3>
                    <p className="text-sm opacity-90">Traiter les retours de produits</p>
                </button>
            </div>
        </div>
    );
}
