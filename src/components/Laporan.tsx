import React from 'react';
import { TrendingUp, Download, Calendar, FileSpreadsheet, PieChart, BarChart3, Filter, FileText } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Laporan() {
  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Laporan & Analitik</h2>
          <p className="text-slate-500 text-sm mt-1">Unduh laporan keuangan, manifes keberangkatan, dan performa operasional</p>
        </div>
      </div>

      {/* Main Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Form */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-800 text-lg mb-6 flex items-center gap-2">
              <Filter className="w-5 h-5 text-emerald-600" /> Filter Laporan
            </h3>
            
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Jenis Laporan</label>
                <select className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all cursor-pointer font-medium">
                  <option>Laporan Keuangan (Omzet)</option>
                  <option>Laporan Komisi Agen</option>
                  <option>Manifes Jamaah / Kloter</option>
                  <option>Performa Marketing</option>
                </select>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Rentang Waktu</label>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input type="date" className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl pl-9 pr-3 py-3 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium" />
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input type="date" className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl pl-9 pr-3 py-3 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Format Unduhan</label>
                <div className="flex gap-3">
                   <button className="flex-1 border-2 border-emerald-600 bg-emerald-50 text-emerald-700 font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all">
                     <FileSpreadsheet className="w-5 h-5" /> Excel
                   </button>
                   <button className="flex-1 border border-slate-200 bg-white text-slate-600 hover:border-red-500 hover:text-red-600 font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all">
                     <FileText className="w-5 h-5" /> PDF
                   </button>
                </div>
              </div>

              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-emerald-600/20 mt-4 flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Generate & Unduh
              </button>
            </div>
          </div>
        </div>

        {/* Right Templates */}
        <div className="lg:col-span-8">
          <h3 className="font-bold text-slate-800 text-lg mb-4">Laporan Cepat Terpopuler</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             {[
               { title: "Rekap Penjualan Bulan Ini", desc: "Ringkasan omzet, jamaah baru, dan paket terjual.", icon: <BarChart3 />, color: "bg-blue-50 text-blue-600" },
               { title: "Manifes Keberangkatan Terdekat", desc: "Data jamaah, passport, dan logistik kloter aktif.", icon: <FileText />, color: "bg-emerald-50 text-emerald-600" },
               { title: "Pencairan Komisi Outstanding", desc: "Daftar agen yang menunggu komisi dicairkan.", icon: <PieChart />, color: "bg-amber-50 text-amber-600" },
               { title: "Laporan Performa Cabang", desc: "Data komparasi penjualan masing-masing cabang.", icon: <TrendingUp />, color: "bg-purple-50 text-purple-600" }
             ].map((report, i) => (
               <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:border-emerald-300 transition-colors cursor-pointer group flex items-start gap-4">
                 <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shrink-0", report.color)}>
                   {React.cloneElement(report.icon as React.ReactElement, { className: "w-6 h-6" })}
                 </div>
                 <div>
                   <h4 className="font-bold text-slate-800 text-base mb-1 group-hover:text-emerald-700 transition-colors">{report.title}</h4>
                   <p className="text-sm text-slate-500 leading-relaxed mb-3">{report.desc}</p>
                   <div className="flex items-center gap-2">
                      <button className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded flex items-center gap-1.5"><FileSpreadsheet className="w-3.5 h-3.5"/> XLS</button>
                      <button className="text-xs font-bold text-red-600 bg-red-50 px-3 py-1.5 rounded flex items-center gap-1.5"><FileText className="w-3.5 h-3.5"/> PDF</button>
                   </div>
                 </div>
               </div>
             ))}
          </div>

          <div className="mt-8 bg-slate-900 rounded-2xl p-6 relative overflow-hidden flex items-center justify-between">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-emerald-500/20 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-white font-bold text-xl mb-2">Butuh Laporan Kustom?</h3>
              <p className="text-slate-400 text-sm max-w-md">Tim IT dapat membuatkan format laporan (query) custom sesuai kebutuhan operasional travel Anda.</p>
            </div>
            <button className="relative z-10 bg-white text-slate-900 px-5 py-2.5 rounded-xl shadow-sm font-bold text-sm whitespace-nowrap hover:bg-slate-100 transition-colors">
              Hubungi Support
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
