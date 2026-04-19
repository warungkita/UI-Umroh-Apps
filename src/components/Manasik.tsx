import React from 'react';
import { BookOpen, Plus, Search, CalendarCheck, MapPin, Users, Edit, Trash2, Clock, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Manasik() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Jadwal Manasik Umrah</h2>
          <p className="text-slate-500 text-sm mt-1">Kelola sesi bimbingan persiapan ibadah untuk calon jamaah</p>
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/30">
          <Plus className="w-5 h-5" />
          Buat Jadwal Manasik
        </button>
      </div>

      <div className="space-y-4">
         {[
           { date: "15 Okt 2024", title: "Manasik Kloter Syawal 1 & 2", time: "08:00 - 12:00 WIB", loc: "Asrama Haji Pondok Gede", pemateri: "Ust. Fulan Al-Hafidz", status: "Upcoming", pax: 120, checkin: 0 },
           { date: "20 Okt 2024", title: "Pemantapan Manasik (Online)", time: "19:30 - 21:00 WIB", loc: "Zoom Meeting", pemateri: "Ust. Hamba Allah", status: "Upcoming", pax: 250, checkin: 0 },
           { date: "01 Sep 2024", title: "Manasik Akbar Ramadhan", time: "08:00 - 15:00 WIB", loc: "Masjid Istiqlal", pemateri: "Ust. Dr. Syafiq Riza Basalamah", status: "Completed", pax: 500, checkin: 485 }
         ].map((event, i) => (
           <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 flex flex-col md:flex-row gap-6 hover:border-emerald-300 transition-colors group relative overflow-hidden">
             
             {/* Left Date Block */}
             <div className="w-full md:w-32 shrink-0 bg-slate-50 rounded-xl border border-slate-100 flex md:flex-col items-center justify-between md:justify-center p-4">
               {event.status === 'Completed' ? (
                 <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto md:mb-2" />
               ) : (
                 <CalendarCheck className="w-8 h-8 text-emerald-600 mx-auto md:mb-2" />
               )}
               <div className="text-right md:text-center">
                 <p className="font-bold text-slate-800">{event.date.split(' ')[0]} {event.date.split(' ')[1]}</p>
                 <p className="text-xs text-slate-500">{event.date.split(' ')[2]}</p>
               </div>
             </div>

             {/* Center Info */}
             <div className="flex-1 flex flex-col justify-center">
               <div className="flex items-start justify-between mb-2">
                 <h3 className="text-lg font-bold text-slate-800">{event.title}</h3>
                 <span className={cn(
                   "text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-md",
                   event.status === 'Completed' ? "bg-slate-100 text-slate-500" : "bg-emerald-100 text-emerald-700"
                 )}>
                   {event.status}
                 </span>
               </div>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mb-4">
                 <p className="text-sm font-medium text-slate-600 flex items-center gap-2"><Clock className="w-4 h-4 text-slate-400"/> {event.time}</p>
                 <p className="text-sm font-medium text-slate-600 flex items-center gap-2"><MapPin className="w-4 h-4 text-slate-400"/> {event.loc}</p>
                 <p className="text-sm font-medium text-slate-600 flex items-center gap-2"><BookOpen className="w-4 h-4 text-slate-400"/> {event.pemateri}</p>
                 <p className="text-sm font-medium text-slate-600 flex items-center gap-2"><Users className="w-4 h-4 text-slate-400"/> {event.pax} Peserta Terdaftar</p>
               </div>

               {/* Progress / Actions */}
               <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                  {event.status === 'Completed' ? (
                    <div className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">
                      Tingkat Kehadiran: {Math.round((event.checkin/event.pax)*100)}% ({event.checkin} / {event.pax})
                    </div>
                  ) : (
                    <div className="flex gap-2">
                       <button className="text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-lg transition-colors">Broadcast Undangan</button>
                       <button className="text-xs font-bold bg-white border border-emerald-200 text-emerald-700 px-3 py-1.5 rounded-lg hover:bg-emerald-50 transition-colors">Buka Scanner Kehadiran</button>
                    </div>
                  )}

                  <div className="flex gap-1">
                    <button className="p-2 text-slate-400 hover:text-emerald-600"><Edit className="w-4 h-4" /></button>
                    <button className="p-2 text-slate-400 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                  </div>
               </div>
             </div>
           </div>
         ))}
      </div>
    </div>
  );
}
