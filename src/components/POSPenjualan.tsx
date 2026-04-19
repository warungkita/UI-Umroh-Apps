import React, { useState } from 'react';
import { Search, ShoppingCart, User, Ticket, CreditCard, ChevronRight, X, Clock, Plus } from 'lucide-react';
import { cn } from '../lib/utils';

export default function POSPenjualan() {
  const [activeTab, setActiveTab] = useState('paket');

  return (
    <div className="max-w-[1600px] mx-auto h-full flex flex-col xl:flex-row gap-6">
      
      {/* Left Area: Product Selection */}
      <div className="flex-1 flex flex-col h-[calc(100vh-140px)]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">POS Penjualan</h2>
            <p className="text-slate-500 text-sm mt-1">Buat transaksi baru dengan cepat</p>
          </div>
        </div>

        {/* Tab & Search */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 bg-white p-2 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex rounded-xl bg-slate-100 p-1">
            <button onClick={() => setActiveTab('paket')} className={cn("px-6 py-2 rounded-lg text-sm font-semibold transition-all", activeTab === 'paket' ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-700")}>Paket Umrah</button>
            <button onClick={() => setActiveTab('layanan')} className={cn("px-6 py-2 rounded-lg text-sm font-semibold transition-all", activeTab === 'layanan' ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-700")}>Layanan Tambahan</button>
          </div>
          
          <div className="relative w-full sm:w-64 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 group-focus-within:text-emerald-500 transition-colors" />
            <input
              type="text"
              placeholder="Cari..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 rounded-xl text-sm font-medium transition-all outline-none"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1 overflow-y-auto pr-2 pb-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 hover:border-emerald-500 cursor-pointer transition-all group">
                <div className="w-full h-32 rounded-xl overflow-hidden mb-4 relative">
                  <img src="https://images.unsplash.com/photo-1565552643950-4fc7eec66fb7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Product" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-slate-900/20"></div>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-slate-800 text-sm leading-tight pr-2">Paket Umrah Reguler {item} Hari</h3>
                  <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-md shrink-0">Sisa 12</span>
                </div>
                <p className="text-xs text-slate-500 mb-4">Keberangkatan: 12 Des 2024</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-emerald-600 text-lg">Rp 28.5 Juta</span>
                  <button className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Area: Cart / Checkout Sidebar */}
      <div className="w-full xl:w-[400px] shrink-0 h-[calc(100vh-140px)] flex flex-col bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden relative">
        <div className="p-6 border-b border-slate-100 bg-slate-900 text-white">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold flex items-center gap-2"><ShoppingCart className="w-5 h-5"/> Ringkasan Transaksi</h3>
            <span className="bg-white/20 text-white text-xs font-bold px-2 py-1 rounded-lg">ID: #TRX-9481</span>
          </div>
          
          <button className="w-full flex items-center justify-between bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl p-3 transition-colors text-left group">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <User className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Pilih Jamaah</p>
                <p className="text-xs text-slate-300">Cari dari database</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
          {/* Empty state (optional) / Filled State */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-slate-800 text-sm">Paket Umrah Reguler 9 Hari</h4>
              <button className="text-slate-400 hover:text-red-500"><X className="w-4 h-4" /></button>
            </div>
            <p className="text-xs text-slate-500 mb-3">Keberangkatan: 12 Des 2024</p>
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-emerald-600">Rp 28.500.000</span>
              <div className="flex items-center gap-3 bg-slate-100 rounded-lg p-1">
                <button className="w-6 h-6 flex items-center justify-center bg-white rounded shadow-sm text-slate-600 font-bold">-</button>
                <span className="text-sm font-bold w-4 text-center">1</span>
                <button className="w-6 h-6 flex items-center justify-center bg-white rounded shadow-sm text-slate-600 font-bold">+</button>
              </div>
            </div>
          </div>
        </div>

        {/* Checkout Section */}
        <div className="p-6 border-t border-slate-100 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Subtotal</span>
              <span className="font-semibold text-slate-800">Rp 28.500.000</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500 flex items-center gap-1"><Ticket className="w-3.5 h-3.5"/> Diskon</span>
              <span className="font-semibold text-red-500">- Rp 0</span>
            </div>
            <div className="pt-3 border-t border-dashed border-slate-200 flex justify-between items-center">
              <span className="font-bold text-slate-800">Total Tagihan</span>
              <span className="text-2xl font-bold text-emerald-600">Rp 28.5M</span>
            </div>
          </div>
          
          <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg shadow-emerald-600/20 flex justify-center items-center gap-2 outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/30">
            <CreditCard className="w-5 h-5" />
            Proses Pembayaran
          </button>
        </div>
      </div>
    </div>
  );
}
