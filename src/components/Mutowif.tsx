import React from 'react';
import { ShieldCheck, Plus, Search, Star, Award, Phone, Mail, Edit, Trash2, MapPin } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Mutowif() {
  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Direktori Mutowif & Tour Leader</h2>
          <p className="text-slate-500 text-sm mt-1">Database pembimbing ibadah, sertifikasi, dan riwayat penugasan kloter</p>
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/30">
          <Plus className="w-5 h-5" />
          Tambah Mutowif
        </button>
      </div>

       {/* Toolbar */}
       <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mb-6 flex items-center justify-between">
        <div className="relative w-full max-w-md group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 group-focus-within:text-emerald-500 transition-colors" />
          <input
            type="text"
            placeholder="Cari mutowif atau tour leader..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 rounded-xl text-sm font-medium transition-all outline-none"
          />
        </div>
        <div className="flex bg-slate-100 p-1 rounded-xl">
           <button className="px-4 py-1.5 rounded-lg text-sm font-bold bg-white text-slate-800 shadow-sm">Semua</button>
           <button className="px-4 py-1.5 rounded-lg text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors">Standby (Tersedia)</button>
           <button className="px-4 py-1.5 rounded-lg text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors">Sedang Bertugas</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "Ust. Fulan Al-Hafidz", role: "Mutowif & TL", rating: 4.9, tripes: 42, status: "Tersedia", lang: ["AR", "ID"], loc: "Makkah resident" },
          { name: "Ust. Hamba Allah", role: "Mutowif", rating: 4.8, tripes: 18, status: "Bertugas", lang: ["AR", "ID"], loc: "Indonesia" },
          { name: "Ahmad Subarjo", role: "Tour Leader", rating: 4.9, tripes: 56, status: "Tersedia", lang: ["ID", "EN"], loc: "Indonesia" },
          { name: "Ust. Abdul Aziz Lc", role: "Mutowif", rating: 5.0, tripes: 89, status: "Tersedia", lang: ["AR", "ID", "EN"], loc: "Makkah resident" }
        ].map((person, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col group hover:shadow-md hover:border-emerald-200 transition-all relative">
            <div className="absolute top-6 right-6">
               <span className={cn(
                 "px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider",
                 person.status === 'Tersedia' ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
               )}>
                 {person.status}
               </span>
            </div>
            
            <div className="flex items-center gap-4 mb-5">
              <div className="relative">
                <img src={`https://ui-avatars.com/api/?name=${person.name.split(' ').join('+')}&background=${i%2===0?'10b981':'0ea5e9'}&color=fff`} className="w-16 h-16 rounded-full shadow-sm" alt="Avatar" />
                <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                  <ShieldCheck className="w-5 h-5 text-blue-500" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-base leading-tight">{person.name}</h3>
                <p className="text-xs font-semibold text-emerald-600 mt-0.5 bg-emerald-50 w-max px-2 py-0.5 rounded-md">{person.role}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="flex flex-col p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-xs text-slate-500 font-medium mb-1 flex items-center gap-1"><Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500"/> Rating Tjamaah</span>
                <span className="font-bold text-slate-800">{person.rating} / 5.0</span>
              </div>
              <div className="flex flex-col p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-xs text-slate-500 font-medium mb-1 flex items-center gap-1"><Award className="w-3.5 h-3.5 text-blue-500"/> Pengalaman</span>
                <span className="font-bold text-slate-800">{person.tripes} Keberangkatan</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm font-medium text-slate-500 mb-6">
               <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4"/> {person.loc}</span>
               <div className="flex gap-1 ml-auto">
                 {person.lang.map(l => (
                   <span key={l} className="bg-slate-100 text-slate-600 text-[10px] font-bold px-1.5 py-0.5 rounded border border-slate-200">{l}</span>
                 ))}
               </div>
            </div>

            <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors"><Phone className="w-3.5 h-3.5" /></button>
                <button className="w-8 h-8 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"><Mail className="w-3.5 h-3.5" /></button>
              </div>
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                 <button className="p-1.5 text-slate-400 hover:text-emerald-600"><Edit className="w-4 h-4" /></button>
                 <button className="p-1.5 text-slate-400 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
