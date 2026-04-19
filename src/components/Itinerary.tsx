import React from 'react';
import { Map, Plus, Search, MapPin, Clock, Edit, Trash2, GripVertical, CalendarDays, MoreVertical } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Itinerary() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Manajemen Itinerary</h2>
          <p className="text-slate-500 text-sm mt-1">Susun jadwal harian perjalanan umrah yang akan tampil di aplikasi jamaah</p>
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/30">
          <Plus className="w-5 h-5" />
          Buat Template Itinerary
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Template Selector */}
        <div className="w-full lg:w-80 shrink-0">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-4 border-b border-slate-100 bg-slate-50">
              <h3 className="font-bold text-slate-800 flex items-center gap-2"><Map className="w-5 h-5 text-emerald-600" /> Template Tersedia</h3>
            </div>
            <div className="p-3">
              <div className="relative w-full mb-3 group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 group-focus-within:text-emerald-500 transition-colors" />
                <input
                  type="text"
                  placeholder="Cari Itinerary..."
                  className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 rounded-xl text-sm font-medium transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                 {['Reguler 9 Hari', 'VIP 12 Hari (+Taif)', 'Lailatul Qadar 15 Hari', 'Plus Turki 10 Hari'].map((title, i) => (
                    <div key={i} className={cn(
                      "p-3 rounded-xl cursor-pointer border transition-all text-sm font-semibold",
                      i === 0 ? "bg-emerald-50 border-emerald-200 text-emerald-800 shadow-sm" : "bg-white border-slate-100 hover:border-slate-300 text-slate-600"
                    )}>
                      {title}
                      <p className="text-xs font-normal mt-1 opacity-80">{i === 0 ? 'Aktif digunakan 4 Kloter' : 'Belum ada kloter aktif'}</p>
                    </div>
                 ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Timeline Editor */}
        <div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
           <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100">
              <div>
                 <h3 className="text-lg font-bold text-slate-800">Itinerary: Reguler 9 Hari</h3>
                 <p className="text-sm text-slate-500">Makkah (4 Hari) - Madinah (3 Hari) - Perjalanan (2 Hari)</p>
              </div>
              <button className="text-slate-400 hover:text-slate-800 p-2"><MoreVertical className="w-5 h-5"/></button>
           </div>

           <div className="space-y-6 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
              {/* Timeline Item */}
              {[
                { day: "Hari 1", loc: "Jakarta - Jeddah", title: "Keberangkatan & Perjalanan", time: "14:00 WIB", desc: "Berkumpul di Bandara Soekarno Hatta Terminal 3 (Gate 2). Boarding menuju Jeddah menggunakan Saudia Airlines." },
                { day: "Hari 2", loc: "Jeddah - Makkah", title: "Kedatangan & Umrah Wajib", time: "08:00 WAS", desc: "Tiba di Jeddah. Melanjutkan perjalanan ke Makkah menggunakan bus. Check-in hotel, istirahat sejenak, lalu melaksanakan prosesi Umrah Wajib (Tawaf, Sa'i, Tahallul)." },
                { day: "Hari 3", loc: "Makkah", title: "Memperbanyak Ibadah di Masjidil Haram", time: "Sepanjang Hari", desc: "Acara bebas. Sangat disarankan untuk memperbanyak Thawaf sunnah, salat jamaah, dan tilawah di Masjidil Haram." },
                { day: "Hari 4", loc: "Makkah", title: "Ziarah Kota Makkah", time: "07:30 WAS", desc: "City tour mengunjungi Jabal Tsur, Padang Arafah, Jabal Rahmah, Muzdalifah, Mina, dan Jabal Nur." }
              ].map((item, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-slate-100 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:bg-emerald-500 group-hover:text-white transition-colors z-10 cursor-grab">
                    <GripVertical className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-4 rounded-xl shadow-sm border border-slate-100 bg-white group-hover:border-emerald-200 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                       <span className="font-bold text-emerald-600 border border-emerald-100 bg-emerald-50 px-2 py-0.5 rounded text-xs">{item.day}</span>
                       <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                         <button className="p-1 hover:text-emerald-600"><Edit className="w-3.5 h-3.5" /></button>
                         <button className="p-1 hover:text-red-500"><Trash2 className="w-3.5 h-3.5" /></button>
                       </div>
                    </div>
                    <h4 className="font-bold text-slate-800 text-base">{item.title}</h4>
                    <div className="flex items-center gap-3 text-xs font-semibold text-slate-500 mt-2 mb-3">
                       <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-slate-400" /> {item.loc}</span>
                       <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-slate-400" /> {item.time}</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
              
              <div className="relative flex items-center justify-center md:justify-center mt-8">
                 <button className="flex items-center gap-2 bg-slate-800 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg hover:bg-slate-700 transition-colors relative z-10">
                    <Plus className="w-4 h-4" /> Tambah Hari / Aktivitas
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
