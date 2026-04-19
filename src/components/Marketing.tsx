import React from 'react';
import { Megaphone, Plus, Search, MousePointerClick, Users, TrendingUp, Edit, Trash2, Image as ImageIcon } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Marketing() {
  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Marketing & Campaign</h2>
          <p className="text-slate-500 text-sm mt-1">Kelola banner promosi aplikasi dan kampanye iklan</p>
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/30">
          <Plus className="w-5 h-5" />
          Buat Campaign Baru
        </button>
      </div>

      {/* Toolbar */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mb-6 flex items-center justify-between">
        <div className="relative w-full max-w-md group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 group-focus-within:text-emerald-500 transition-colors" />
          <input
            type="text"
            placeholder="Cari nama kampanye..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 rounded-xl text-sm font-medium transition-all outline-none"
          />
        </div>
        <div className="flex bg-slate-100 p-1 rounded-xl">
           <button className="px-4 py-1.5 rounded-lg text-sm font-bold bg-white text-slate-800 shadow-sm">Aktif</button>
           <button className="px-4 py-1.5 rounded-lg text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors">Selesai</button>
           <button className="px-4 py-1.5 rounded-lg text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors">Draft</button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Promo Spesial Ramadhan", platform: "App Banner", status: "Active", budget: "Rp 0 (Organik)", reach: "12.4K", clicks: "842", image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { title: "Diskon Early Bird Syawal", platform: "Instagram Ads", status: "Active", budget: "Rp 5.000.000", reach: "85.2K", clicks: "3,120", image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { title: "Cashback Agen Terbesar", platform: "Email Newsletter", status: "Active", budget: "Rp 0 (Organik)", reach: "4.5K", clicks: "612", image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ].map((campaign, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all group flex flex-col">
            <div className="h-40 relative overflow-hidden bg-slate-100">
              <img src={campaign.image} alt={campaign.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
              <span className="absolute top-4 left-4 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide">
                {campaign.status}
              </span>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-bold text-lg leading-tight">{campaign.title}</h3>
                <p className="text-slate-200 text-xs font-medium mt-1">{campaign.platform}</p>
              </div>
            </div>
            
            <div className="p-5 flex-1 flex flex-col">
               <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                     <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                        <Users className="w-3.5 h-3.5" />
                        <span className="text-xs font-semibold">Reach</span>
                     </div>
                     <p className="text-base font-bold text-slate-800">{campaign.reach}</p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                     <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                        <MousePointerClick className="w-3.5 h-3.5" />
                        <span className="text-xs font-semibold">Clicks</span>
                     </div>
                     <p className="text-base font-bold text-slate-800">{campaign.clicks}</p>
                  </div>
               </div>
               
               <div className="flex items-center justify-between text-sm mt-auto pt-4 border-t border-slate-100">
                 <div>
                   <p className="text-xs text-slate-400 font-semibold mb-0.5">Anggaran</p>
                   <p className="font-bold text-slate-700">{campaign.budget}</p>
                 </div>
                 <div className="flex items-center gap-2">
                    <button className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"><Edit className="w-4 h-4" /></button>
                    <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"><Trash2 className="w-4 h-4" /></button>
                 </div>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
