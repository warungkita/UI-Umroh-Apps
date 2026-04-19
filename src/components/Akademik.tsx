import React from 'react';
import { GraduationCap, Plus, Search, PlayCircle, FileText, BookOpen, Clock, Download, MoreVertical, Edit } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Akademik() {
  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Akademik & Manasik</h2>
          <p className="text-slate-500 text-sm mt-1">Pusat kelola materi edukasi, panduan ibadah jamaah, dan sertifikasi mutowif</p>
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/30">
          <Plus className="w-5 h-5" />
          Tambah Materi Baru
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 mb-6">
        <button className="px-6 py-3 font-bold text-sm text-emerald-600 border-b-2 border-emerald-600">Panduan Jamaah</button>
        <button className="px-6 py-3 font-semibold text-sm text-slate-500 hover:text-slate-800 transition-colors">Pelatihan Mutowif</button>
        <button className="px-6 py-3 font-semibold text-sm text-slate-500 hover:text-slate-800 transition-colors">Sertifikasi & Ujian</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Course Modules */}
        {[
          { title: "Tata Cara Tawaf & Sa'i", type: "video", duration: "45 Menit", category: "Rukun Umrah", viewer: 1250, image: "https://images.unsplash.com/photo-1591585806655-bfa53e41c4eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
          { title: "Panduan Fikih Safar", type: "pdf", duration: "12 Halaman", category: "Persiapan", viewer: 840, image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
          { title: "Doa-doa Mustajab saat Umrah", type: "audio", duration: "1.5 Jam", category: "Kumpulan Doa", viewer: 3100, image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
          { title: "Pengenalan Sejarah Madinah", type: "video", duration: "30 Menit", category: "Sejarah Islam", viewer: 950, image: "https://images.unsplash.com/photo-1563821013401-209214cdca0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-md transition-shadow flex flex-col">
            <div className="h-48 relative overflow-hidden bg-slate-100">
               <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/40 transition-colors flex items-center justify-center">
                 {item.type === 'video' ? <PlayCircle className="w-12 h-12 text-white/90 drop-shadow-md" /> :
                  item.type === 'pdf' ? <FileText className="w-12 h-12 text-white/90 drop-shadow-md" /> :
                  <BookOpen className="w-12 h-12 text-white/90 drop-shadow-md" />}
               </div>
               <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-800 text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase">
                 {item.category}
               </span>
            </div>
            
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-bold text-slate-800 text-lg mb-2 leading-tight">{item.title}</h3>
              <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 mb-6">
                 <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                   {item.type === 'video' ? <PlayCircle className="w-3.5 h-3.5"/> : <FileText className="w-3.5 h-3.5"/>}
                   {item.type.toUpperCase()}
                 </span>
                 <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5"/> {item.duration}</span>
              </div>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                <span className="text-sm font-medium text-slate-500">Akses: <strong>{item.viewer.toLocaleString()}</strong>x</span>
                <div className="flex items-center gap-1">
                   <button className="p-2 text-slate-400 hover:text-emerald-600 bg-slate-50 hover:bg-emerald-50 rounded-lg transition-colors"><Edit className="w-4 h-4" /></button>
                   <button className="p-2 text-slate-400 hover:text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors"><MoreVertical className="w-4 h-4" /></button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Add Card */}
        <div className="bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-8 text-center hover:border-emerald-500 hover:bg-emerald-50/50 transition-colors cursor-pointer group min-h-[300px]">
           <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 text-slate-400 group-hover:text-emerald-600 group-hover:scale-110 transition-all mb-4">
              <Plus className="w-6 h-6" />
           </div>
           <h3 className="font-bold text-slate-800 text-lg mb-1">Materi Baru</h3>
           <p className="text-sm text-slate-500 max-w-[200px]">Unggah video panduan, dokumen PDF, atau audio untuk jamaah</p>
        </div>
      </div>
    </div>
  );
}
