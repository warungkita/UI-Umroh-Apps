import React from 'react';
import { Search, Download, Filter, CheckCircle2, Clock, DollarSign, Wallet } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Komisi() {
  return (
    <div className="max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Manajemen Komisi</h2>
          <p className="text-slate-500 text-sm mt-1">Laporan komisi agen, pencairan, dan riwayat transaksi</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-5">
          <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
            <Wallet className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Total Dibayarkan (Bulan Ini)</p>
            <h3 className="text-2xl font-bold text-slate-800 mt-1">Rp 125.000.000</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-5 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-2 h-full bg-amber-500"></div>
          <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Menunggu Pencairan</p>
            <h3 className="text-2xl font-bold text-slate-800 mt-1">Rp 45.500.000</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-5">
          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
            <DollarSign className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Rata-rata Komisi / Bulan</p>
            <h3 className="text-2xl font-bold text-slate-800 mt-1">Rp 110.2M</h3>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-96 group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 group-focus-within:text-emerald-500 transition-colors" />
          <input
            type="text"
            placeholder="Cari referensi atau nama agen..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 rounded-xl text-sm font-medium transition-all outline-none"
          />
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all text-sm shadow-lg shadow-slate-900/10">
            Cairkan Semua Pending
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 text-slate-500 text-[11px] uppercase font-bold tracking-wider border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 whitespace-nowrap">ID Ref</th>
                <th className="px-6 py-4 whitespace-nowrap">Agen</th>
                <th className="px-6 py-4 whitespace-nowrap">Jamaah Transaksi</th>
                <th className="px-6 py-4 whitespace-nowrap">Nominal Komisi</th>
                <th className="px-6 py-4 whitespace-nowrap">Status</th>
                <th className="px-6 py-4 whitespace-nowrap text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item} className="hover:bg-slate-50/80 transition-colors group">
                  <td className="px-6 py-4">
                    <p className="font-mono text-xs font-semibold text-slate-700">TRX-098{item}</p>
                    <p className="text-xs text-slate-400 mt-0.5">12 Sep 2024</p>
                  </td>
                  <td className="px-6 py-4 font-semibold text-slate-800">
                    PT Harapan Mandiri {item}
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-slate-700">Ahmad Fauzi + 2 Keluarga</p>
                    <p className="text-xs text-slate-500 mt-0.5">Paket Reguler 9 Hari</p>
                  </td>
                  <td className="px-6 py-4 font-bold text-emerald-600">
                    Rp {item * 1.5}00.000
                  </td>
                  <td className="px-6 py-4">
                    {item % 2 === 0 ? (
                      <div className="flex items-center gap-1.5 text-emerald-600 font-semibold text-xs border border-emerald-200 bg-emerald-50 px-2.5 py-1 rounded-lg w-max">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Lunas / Cair
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 text-amber-600 font-semibold text-xs border border-amber-200 bg-amber-50 px-2.5 py-1 rounded-lg w-max">
                        <Clock className="w-3.5 h-3.5" /> Pending Tertahan
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    {item % 2 !== 0 && (
                      <button className="text-emerald-600 font-bold hover:text-emerald-700 text-sm bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg transition-colors">
                        Approve
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
