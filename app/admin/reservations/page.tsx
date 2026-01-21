'use client';

import { useState } from 'react';
import { Search, Filter, Calendar, User, ShoppingBag, ChevronRight, CheckCircle, Clock, AlertCircle } from 'lucide-react';

export default function AdminReservationsPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const reservations = [
        {
            id: 'RES-8921',
            client: 'Abdou Diallo',
            product: 'Robe Sira',
            startDate: '15/02/2026',
            endDate: '18/02/2026',
            totalPrice: '150 000 FCFA',
            status: 'CONFIRMED',
            payment: 'WAVE',
            paymentStatus: 'PAID'
        },
        {
            id: 'RES-8922',
            client: 'Fatou Sow',
            product: 'Ensemble Grand Boubou',
            startDate: '16/02/2026',
            endDate: '19/02/2026',
            totalPrice: '75 000 FCFA',
            status: 'PENDING',
            payment: 'ORANGE_MONEY',
            paymentStatus: 'PENDING'
        }
    ];

    const getStatusStyle = (status: string) => {
        switch (status) {
            case 'CONFIRMED': return 'bg-green-100 text-green-700 border-green-200';
            case 'PENDING': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
            case 'CANCELLED': return 'bg-red-100 text-red-700 border-red-200';
            default: return 'bg-gray-100 text-gray-700 border-gray-200';
        }
    };

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-slate-900">Gestion des Réservations</h1>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Rechercher par client ou ID..."
                        className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all font-medium">
                        <Filter className="w-5 h-5" /> Filtrer
                    </button>
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all font-medium">
                        <Calendar className="w-5 h-5" /> Aujourd'hui
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 gap-4">
                {reservations.map((res) => (
                    <div key={res.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="flex flex-wrap items-center gap-6">
                                <div className="space-y-1">
                                    <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Réservation</p>
                                    <p className="font-bold text-slate-800">#{res.id}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Client</p>
                                    <div className="flex items-center gap-2 font-medium text-slate-800">
                                        <User className="w-4 h-4 text-primary-500" /> {res.client}
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Article</p>
                                    <div className="flex items-center gap-2 font-medium text-slate-800">
                                        <ShoppingBag className="w-4 h-4 text-primary-500" /> {res.product}
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Dates</p>
                                    <p className="font-medium text-slate-800">{res.startDate} au {res.endDate}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 justify-between border-t md:border-t-0 pt-4 md:pt-0">
                                <div className="text-right">
                                    <p className="text-sm font-bold text-slate-900">{res.totalPrice}</p>
                                    <p className="text-[10px] font-bold text-blue-600">{res.payment}</p>
                                </div>
                                <div className={`px-4 py-2 rounded-full border text-xs font-bold ${getStatusStyle(res.status)}`}>
                                    {res.status}
                                </div>
                                <button className="p-2 hover:bg-slate-50 rounded-lg">
                                    <ChevronRight className="w-5 h-5 text-gray-400" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
