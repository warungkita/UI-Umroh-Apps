import React from 'react';
import { Users, PlaneTakeoff, Wallet, Briefcase, Filter, Download, MoreVertical, MessageCircle, Clock } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from '../lib/utils';

const chartData = [
  { name: 'Jan', value: 65 },
  { name: 'Feb', value: 59 },
  { name: 'Mar', value: 80 },
  { name: 'Apr', value: 81 },
  { name: 'Mei', value: 56 },
  { name: 'Jun', value: 95 },
];

export default function DashboardOverview() {
  return (
    <div className="max-w-[1600px] mx-auto">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={Users}
          title="Total Jamaah"
          value="1,284"
          trend="+12%"
          trendUp={true}
          colorClass="text-blue-600"
          bgClass="bg-blue-50"
        />
        <StatCard
          icon={PlaneTakeoff}
          title="Keberangkatan Aktif"
          value="42 kloter"
          subtitle="Musim Ini"
          colorClass="text-emerald-600"
          bgClass="bg-emerald-50"
        />
        <StatCard
          icon={Wallet}
          title="Omzet Bulan Ini"
          value="Rp 4.2B"
          trend="-3%"
          trendUp={false}
          colorClass="text-amber-600"
          bgClass="bg-amber-50"
        />
        <StatCard
          icon={Briefcase}
          title="Agen Aktif"
          value="156"
          trend="+5"
          trendUp={true}
          colorClass="text-purple-600"
          bgClass="bg-purple-50"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800 text-lg">Tren Pendaftaran Jamaah</h3>
            <select className="bg-slate-50 border-none text-xs font-semibold text-slate-500 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer">
              <option>6 Bulan Terakhir</option>
              <option>1 Tahun Terakhir</option>
            </select>
          </div>
          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                <Tooltip contentStyle={{borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={3} dot={{ r: 4, strokeWidth: 2, fill: '#fff', stroke: '#10b981' }} activeDot={{ r: 6, fill: '#10b981', stroke: '#fff', strokeWidth: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity / Notifications */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800 text-lg">Antrean Broadcast WA</h3>
            <button className="text-emerald-600 text-sm font-bold hover:underline">Lihat Semua</button>
          </div>
          <div className="space-y-4 flex-1">
            <div className="flex gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-100">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-800">Promo Paket Ramadhan</p>
                <p className="text-xs text-slate-500 mt-0.5">Menunggu: 1,240 kontak</p>
                <div className="w-full bg-slate-100 h-1.5 mt-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>
            <div className="flex gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-100">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-800">Reminder Manasik</p>
                <p className="text-xs text-slate-500 mt-0.5">Terjadwal: Besok, 09:00 WIB</p>
              </div>
            </div>
          </div>
          <button className="mt-6 w-full py-2.5 bg-slate-800 text-white rounded-xl text-sm font-semibold hover:bg-slate-700 transition-colors">
            Buat Campaign Baru
          </button>
        </div>
      </div>

      {/* Data Table Preview */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row gap-4 sm:items-center justify-between bg-white sticky top-0">
          <div>
            <h3 className="font-bold text-slate-800 text-lg">Jamaah Terbaru</h3>
            <p className="text-sm text-slate-500 md:mt-0.5">Daftar pendaftar 24 jam terakhir</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-slate-400 hover:bg-slate-50 hover:text-emerald-600 rounded-lg transition-colors border border-transparent hover:border-slate-200">
              <Filter className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-400 hover:bg-slate-50 hover:text-emerald-600 rounded-lg transition-colors border border-transparent hover:border-slate-200">
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 text-slate-500 text-[11px] uppercase font-bold tracking-wider">
              <tr>
                <th className="px-6 py-4 whitespace-nowrap">Nama Jamaah</th>
                <th className="px-6 py-4 whitespace-nowrap">Paket</th>
                <th className="px-6 py-4 whitespace-nowrap">Status Bayar</th>
                <th className="px-6 py-4 whitespace-nowrap">Progress Dokumen</th>
                <th className="px-6 py-4 whitespace-nowrap text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              <TableRow
                initials="AS"
                initialsBg="bg-blue-100 text-blue-600"
                name="Ahmad Subarkah"
                phone="0812-3456-xxxx"
                packageType="Umrah Reguler Plus"
                packageBg="bg-emerald-50 text-emerald-700 font-bold border border-emerald-100"
                status="Lunas"
                statusColor="bg-emerald-500"
                progress={100}
                progressLabel="Selesai"
                progressColor="bg-emerald-500"
                progressTextColor="text-emerald-600"
              />
              <TableRow
                initials="SP"
                initialsBg="bg-purple-100 text-purple-600"
                name="Siti Patimah"
                phone="0899-7766-xxxx"
                packageType="Umrah Itikaf Ramadhan"
                packageBg="bg-blue-50 text-blue-700 font-bold border border-blue-100"
                status="DP (Deposit)"
                statusColor="bg-amber-500"
                progress={40}
                progressLabel="40%"
                progressColor="bg-amber-500"
                progressTextColor="text-amber-600"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, title, value, trend, trendUp, subtitle, colorClass, bgClass }: any) {
  return (
    <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
      <div className="flex justify-between items-start mb-4">
        <div className={cn("p-3 rounded-xl transition-colors", bgClass, colorClass, "group-hover:bg-opacity-80")}>
          <Icon className="w-6 h-6" />
        </div>
        {trend && (
          <span className={cn("text-xs font-bold px-2.5 py-1 rounded-full", trendUp ? "text-emerald-700 bg-emerald-50" : "text-red-700 bg-red-50")}>
            {trend}
          </span>
        )}
        {subtitle && (
          <span className="text-slate-500 text-xs font-semibold bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-full">
            {subtitle}
          </span>
        )}
      </div>
      <p className="text-slate-500 text-sm font-medium">{title}</p>
      <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mt-1">{value}</h3>
    </div>
  );
}

function TableRow({ initials, initialsBg, name, phone, packageType, packageBg, status, statusColor, progress, progressLabel, progressColor, progressTextColor }: any) {
  return (
    <tr className="hover:bg-slate-50/80 transition-colors group">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className={cn("w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0", initialsBg)}>
            {initials}
          </div>
          <div>
            <p className="font-semibold text-slate-800">{name}</p>
            <p className="text-xs text-slate-500 mt-0.5">{phone}</p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4"><span className={cn("px-2.5 py-1.5 rounded-lg text-xs", packageBg)}>{packageType}</span></td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <div className={cn("w-2 h-2 rounded-full", statusColor)}></div><span className="text-slate-700 font-medium">{status}</span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex-1 bg-slate-100 h-2 rounded-full overflow-hidden min-w-[120px]">
            <div className={cn("h-full rounded-full", progressColor)} style={{ width: `${progress}%` }}></div>
          </div>
          <span className={cn("text-xs font-bold w-12", progressTextColor)}>{progressLabel}</span>
        </div>
      </td>
      <td className="px-6 py-4 text-right">
        <button className="p-2 text-slate-400 sm:opacity-0 focus:opacity-100 group-hover:opacity-100 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-all outline-none">
          <MoreVertical className="w-5 h-5" />
        </button>
      </td>
    </tr>
  );
}
