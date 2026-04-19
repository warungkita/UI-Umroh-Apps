import React from 'react';
import { Bell, Check, Trash2, MailOpen, Mail, ShieldAlert, BadgeInfo } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Notifikasi() {
  return (
    <div className="max-w-[1000px] mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Pusat Notifikasi</h2>
          <p className="text-slate-500 text-sm mt-1">Aktivitas sistem, persetujuan, dan pemberitahuan penting</p>
        </div>
        <button className="text-emerald-600 hover:text-emerald-700 font-bold text-sm bg-emerald-50 hover:bg-emerald-100 px-4 py-2.5 rounded-xl transition-colors flex items-center gap-2">
          <Check className="w-4 h-4" />
          Tandai Semua Dibaca
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center gap-4 bg-slate-50/50">
          <button className="text-sm font-bold text-emerald-600 border-b-2 border-emerald-600 pb-1">Semua</button>
          <button className="text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors pb-1 border-b-2 border-transparent">Belum Dibaca (3)</button>
          <button className="text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors pb-1 border-b-2 border-transparent">Peringatan</button>
        </div>
        
        <div className="divide-y divide-slate-100">
          {[
            { read: false, type: 'alert', title: "Sisa Kuota Kloter 3 Hampir Habis", desc: "Kloter 3 (Keberangkatan 12 Sep) hanya menyisakan 2 seat. Segera kunci pendaftaran.", time: "10 menit yang lalu", icon: <ShieldAlert className="text-red-600" /> },
            { read: false, type: 'info', title: "Pembayaran Lunas: Ahmad Subarkah", desc: "Pembayaran Rp 28.500.000 untuk paket Kelas VIP berhasil diverifikasi otomatis.", time: "1 jam yang lalu", icon: <BadgeInfo className="text-emerald-600" /> },
            { read: false, type: 'info', title: "Agen Baru Meminta Persetujuan", desc: "PT Makmur Berkah mendaftar sebagai agen. Harap tinjau dokumen administrasi.", time: "2 jam yang lalu", icon: <Mail className="text-blue-600" /> },
            { read: true, type: 'info', title: "Persiapan Passport Diperlukan", desc: "15 Jamaah Kloter 2 belum mengumpulkan passport fisik ke kantor pusat.", time: "Kemarin", icon: <MailOpen className="text-slate-400" /> },
            { read: true, type: 'info', title: "Broadcast Selesai", desc: "Pesan WhatsApp Promo Ramadhan telah terkirim kepada 1,240 kontak.", time: "Kemarin", icon: <Check className="text-slate-400" /> },
          ].map((notif, i) => (
            <div key={i} className={cn(
              "p-5 flex gap-4 transition-colors hover:bg-slate-50 relative group cursor-pointer",
              !notif.read ? "bg-emerald-50/30" : ""
            )}>
              {!notif.read && <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>}
              
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center shrink-0 border",
                !notif.read && notif.type === 'alert' ? "bg-red-50 border-red-100" :
                !notif.read ? "bg-white border-emerald-100 shadow-sm" : "bg-slate-100 border-slate-200"
              )}>
                {React.cloneElement(notif.icon as React.ReactElement, { className: "w-5 h-5" })}
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className={cn("text-base", !notif.read ? "font-bold text-slate-800" : "font-semibold text-slate-700")}>{notif.title}</h4>
                  <span className="text-xs text-slate-400 whitespace-nowrap ml-4">{notif.time}</span>
                </div>
                <p className={cn("text-sm leading-relaxed", !notif.read ? "text-slate-600" : "text-slate-500")}>
                  {notif.desc}
                </p>
                
                {!notif.read && notif.type === 'alert' && (
                  <button className="mt-3 text-xs font-bold text-white bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded-lg transition-colors">Lihat Detail</button>
                )}
                {!notif.read && notif.type === 'info' && (
                  <button className="mt-3 text-xs font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 px-3 py-1.5 rounded-lg transition-colors">Tandai Dibaca</button>
                )}
              </div>
              
              <div className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 hidden sm:flex items-center">
                <button className="p-2 text-slate-400 hover:text-red-600 rounded-lg"><Trash2 className="w-5 h-5" /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
