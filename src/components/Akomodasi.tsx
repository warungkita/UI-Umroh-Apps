import React from 'react';
import { Hotel, Plus, Search, Star, MapPin, Edit, Trash2, Users, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Akomodasi() {
  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Direktori Akomodasi</h2>
          <p className="text-slate-500 text-sm mt-1">Kelola data hotel, ketersediaan kamar (rooming list), dan fasilitas di Makkah & Madinah</p>
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/30">
          <Plus className="w-5 h-5" />
          Tambah Hotel
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 mb-6 gap-6">
        <button className="px-2 py-3 font-bold text-sm text-emerald-600 border-b-2 border-emerald-600">Makkah Al-Mukarramah</button>
        <button className="px-2 py-3 font-semibold text-sm text-slate-500 hover:text-slate-800 transition-colors">Madinah Al-Munawwarah</button>
        <button className="px-2 py-3 font-semibold text-sm text-slate-500 hover:text-slate-800 transition-colors">Transit / Lainnya</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "Swissôtel Al Maqam", star: 5, dist: "100m ke Haram", kloter: 2, capacity: "120 Slot Tersisa", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { name: "Pullman Zamzam Makkah", star: 5, dist: "50m ke Haram", kloter: 4, capacity: "Full Booked", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { name: "Anjum Hotel Makkah", star: 4, dist: "400m ke Haram", kloter: 1, capacity: "300 Slot Tersisa", image: "https://images.unsplash.com/photo-1551882547-ff40c0d5bf8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { name: "Rayhaan by Rotana", star: 5, dist: "150m ke Haram", kloter: 0, capacity: "150 Slot Tersisa", image: "https://images.unsplash.com/photo-1542314831-c6a4d142104d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ].map((hotel, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all group flex flex-col">
            <div className="h-44 relative overflow-hidden bg-slate-100">
              <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              
              <div className="absolute top-4 right-4 flex bg-white/90 backdrop-blur rounded-lg px-2 py-1 items-center gap-1 shadow-sm">
                 <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                 <span className="font-bold text-slate-800 text-xs">{hotel.star}.0</span>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                 <h3 className="font-bold text-lg mb-1">{hotel.name}</h3>
                 <div className="flex items-center gap-1.5 text-xs text-white/80">
                   <MapPin className="w-3.5 h-3.5" /> {hotel.dist}
                 </div>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <div className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-100 mb-5">
                 <div className="flex flex-col">
                    <span className="text-xs text-slate-500 font-semibold mb-0.5 flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> Digunakan</span>
                    <span className="font-bold text-slate-800">{hotel.kloter} Kloter Aktif</span>
                 </div>
                 <div className="flex flex-col text-right">
                    <span className="text-xs text-slate-500 font-semibold mb-0.5">Ketersediaan</span>
                    <span className={cn(
                      "font-bold text-sm",
                      hotel.capacity === 'Full Booked' ? "text-red-500" : "text-emerald-600"
                    )}>{hotel.capacity}</span>
                 </div>
              </div>

              <div className="flex gap-2 mt-auto">
                 <button className="flex-1 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-semibold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2">
                   Rooming List
                 </button>
                 <button className="flex-1 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-sm font-semibold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2">
                   <ExternalLink className="w-4 h-4" /> Detail
                 </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
