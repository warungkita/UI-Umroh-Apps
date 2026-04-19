import React from 'react';
import { PlaneTakeoff, Search, Plus, Calendar, MapPin, Users, Ticket, Edit, Eye, MoreVertical } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Keberangkatan() {
  return (
    <div className="max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Manajemen Keberangkatan</h2>
          <p className="text-slate-500 text-sm mt-1">Kelola kloter, maskapai, dan pemandu mutowif</p>
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/30">
          <Plus className="w-5 h-5" />
          Buat Kloter Baru
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left Side: Active Kloter Cards */}
        <div className="xl:col-span-2 space-y-4">
          <div className="flex gap-4 items-center mb-6">
            <div className="relative flex-1 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 group-focus-within:text-emerald-500 transition-colors" />
              <input
                type="text"
                placeholder="Cari kloter atau maskapai..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 rounded-xl text-sm font-medium transition-all outline-none"
              />
            </div>
            <select className="bg-white border border-slate-200 text-sm font-semibold text-slate-600 px-4 py-2.5 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500">
              <option>Semua Status</option>
              <option>Persiapan</option>
              <option>Berangkat</option>
              <option>Selesai</option>
            </select>
          </div>

          {[1, 2, 3].map((kloter) => (
            <div key={kloter} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-emerald-200 transition-all group">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={cn(
                      "px-3 py-1 rounded-lg text-xs font-bold border",
                      kloter === 1 ? "bg-amber-50 text-amber-700 border-amber-200" : "bg-emerald-50 text-emerald-700 border-emerald-200"
                    )}>
                      {kloter === 1 ? 'Menunggu Keberangkatan' : 'Sedang Berjalan'}
                    </span>
                    <span className="text-slate-400 text-xs font-mono">ID: KL-{202400 + kloter}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Kloter {kloter}: Umrah Akbar Awal Musim</h3>
                  
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <div>
                        <p className="text-[10px] uppercase font-bold text-slate-400">Keberangkatan</p>
                        <p className="text-sm font-semibold text-slate-700">12 Sep 2024</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <PlaneTakeoff className="w-4 h-4 text-slate-400" />
                      <div>
                        <p className="text-[10px] uppercase font-bold text-slate-400">Maskapai (Flight)</p>
                        <p className="text-sm font-semibold text-slate-700">Saudia (SV-816)</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-slate-400" />
                      <div>
                        <p className="text-[10px] uppercase font-bold text-slate-400">Rute</p>
                        <p className="text-sm font-semibold text-slate-700">CGK - MED - JED - CGK</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-slate-400" />
                      <div>
                        <p className="text-[10px] uppercase font-bold text-slate-400">Tour Leader</p>
                        <p className="text-sm font-semibold text-slate-700">Ust. Ahmad Zaki</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-48 xl:w-56 shrink-0 flex flex-col justify-between border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6">
                  <div>
                    <p className="text-sm text-slate-500 font-medium mb-1">Kuota Terisi</p>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-2xl font-bold text-slate-800">43</span>
                      <span className="text-sm font-medium text-slate-400">/ 45 Pax</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full rounded-full bg-emerald-500" style={{width: `${(43/45)*100}%`}}></div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-6 md:mt-0">
                    <button className="flex-1 bg-white border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 text-slate-600 hover:text-emerald-700 text-sm font-semibold py-2 rounded-xl transition-colors">Detail</button>
                    <button className="flex-1 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold py-2 rounded-xl transition-colors">Manifest</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Quick Stats & Logistics */}
        <div className="space-y-6">
          <div className="bg-slate-900 rounded-2xl p-6 text-white relative overflow-hidden">
            <div className="absolute right-0 top-0 opacity-10">
              <PlaneTakeoff className="w-32 h-32 -mt-4 -mr-4" />
            </div>
            <h3 className="font-bold text-lg relative z-10 mb-1">Status Logistik</h3>
            <p className="text-slate-400 text-sm mb-6 relative z-10">Musim 1445 H</p>
            
            <div className="space-y-4 relative z-10">
              <div className="bg-white/10 backdrop-blur border border-white/10 rounded-xl p-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-slate-300">Koper Diserahkan</span>
                  <span className="text-sm font-bold text-emerald-400">84%</span>
                </div>
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-emerald-400" style={{width: '84%'}}></div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur border border-white/10 rounded-xl p-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-slate-300">Visa Terbit</span>
                  <span className="text-sm font-bold text-emerald-400">92%</span>
                </div>
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-emerald-400" style={{width: '92%'}}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-800 mb-4">Jadwal Terdekat</h3>
            <div className="space-y-4">
              {[1, 2].map((i) => (
                <div key={i} className="flex gap-4 items-start pb-4 border-b border-slate-50 last:border-0 last:pb-0">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex flex-col items-center justify-center shrink-0 border border-blue-100">
                    <span className="text-[10px] font-bold uppercase">Sep</span>
                    <span className="text-lg font-bold leading-none">{12 + i}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm">Manasik Umrah Kloter {i}</h4>
                    <p className="text-xs text-slate-500 mt-1 flex items-center gap-1"><MapPin className="w-3 h-3"/> Asrama Haji Pondok Gede</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
