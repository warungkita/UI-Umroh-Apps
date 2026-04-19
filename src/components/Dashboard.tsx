import React, { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  PlaneTakeoff,
  Package,
  CreditCard,
  Briefcase,
  Percent,
  Medal,
  Bell,
  MessageCircle,
  FileCode,
  Megaphone,
  Ticket,
  GraduationCap,
  TrendingUp,
  Map,
  Hotel,
  BookOpen,
  ShieldCheck,
  Heart,
  LogOut,
  Menu,
  Search,
  MessageSquare,
  Plus,
  MoonStar
} from 'lucide-react';
import { cn } from '../lib/utils';
import DashboardOverview from './DashboardOverview';
import DataJamaah from './DataJamaah';
import Keberangkatan from './Keberangkatan';
import PaketUmrah from './PaketUmrah';
import POSPenjualan from './POSPenjualan';
import Agen from './Agen';
import Komisi from './Komisi';
import Reward from './Reward';
import Notifikasi from './Notifikasi';
import BroadcastWA from './BroadcastWA';
import WATemplates from './WATemplates';
import Marketing from './Marketing';
import Voucher from './Voucher';
import Akademik from './Akademik';
import Laporan from './Laporan';
import Itinerary from './Itinerary';
import Akomodasi from './Akomodasi';
import Manasik from './Manasik';
import Mutowif from './Mutowif';
import PanduanIbadah from './PanduanIbadah';

export default function Dashboard({ onLogout }: { onLogout?: () => void }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentView, setCurrentView] = useState('overview');

  const renderContent = () => {
    switch (currentView) {
      case 'jamaah': return <DataJamaah />;
      case 'keberangkatan': return <Keberangkatan />;
      case 'paket': return <PaketUmrah />;
      case 'pos': return <POSPenjualan />;
      case 'agen': return <Agen />;
      case 'komisi': return <Komisi />;
      case 'reward': return <Reward />;
      case 'notif': return <Notifikasi />;
      case 'broadcast': return <BroadcastWA />;
      case 'wa_templates': return <WATemplates />;
      case 'marketing': return <Marketing />;
      case 'voucher': return <Voucher />;
      case 'akademik': return <Akademik />;
      case 'laporan': return <Laporan />;
      case 'itinerary': return <Itinerary />;
      case 'akomodasi': return <Akomodasi />;
      case 'manasik': return <Manasik />;
      case 'mutowif': return <Mutowif />;
      case 'panduan_ibadah': return <PanduanIbadah />;
      case 'overview':
      default:
        return <DashboardOverview />;
    }
  };

  const getViewTitle = () => {
    switch (currentView) {
      case 'jamaah': return 'Data Jamaah';
      case 'keberangkatan': return 'Keberangkatan';
      case 'paket': return 'Paket Umrah';
      case 'pos': return 'POS Penjualan';
      case 'agen': return 'Direktori Agen';
      case 'komisi': return 'Manajemen Komisi';
      case 'reward': return 'Sistem Reward';
      case 'notif': return 'Notifikasi';
      case 'broadcast': return 'Broadcast WA';
      case 'wa_templates': return 'WA Templates';
      case 'marketing': return 'Marketing & Campaign';
      case 'voucher': return 'Voucher & Diskon';
      case 'akademik': return 'Akademik & Manasik';
      case 'laporan': return 'Laporan & Analitik';
      case 'itinerary': return 'Itinerary Builder';
      case 'akomodasi': return 'Akomodasi Hotel';
      case 'manasik': return 'Jadwal Manasik';
      case 'mutowif': return 'Direktori Mutowif';
      case 'panduan_ibadah': return 'Panduan Ibadah';
      default: return 'Dashboard Ringkasan';
    }
  };

  return (
    <div className="flex h-screen overflow-hidden font-sans bg-slate-50 text-slate-900">
      {/* SIDEBAR */}
      <aside
        className={cn(
          "bg-white border-r border-slate-200 flex flex-col transition-all duration-300 z-10 shrink-0",
          sidebarCollapsed ? "w-[80px]" : "w-[256px]"
        )}
      >
        {/* Logo */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-center sm:justify-start gap-3 h-[72px] shrink-0">
          <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shrink-0">
            <MoonStar className="w-5 h-5" />
          </div>
          {!sidebarCollapsed && (
            <span className="font-bold text-xl tracking-tight text-slate-800 whitespace-nowrap overflow-hidden">
              Umrah<span className="text-emerald-600">Sync</span>
            </span>
          )}
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-6 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full">
          {/* Category: Menu Utama */}
          <div>
            {!sidebarCollapsed && (
              <h3 className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-2">
                Menu Utama
              </h3>
            )}
            <div className="space-y-1">
              <NavItem onClick={() => setCurrentView('overview')} icon={LayoutDashboard} label="Dashboard" active={currentView === 'overview'} collapsed={sidebarCollapsed} />
              <NavItem onClick={() => setCurrentView('jamaah')} icon={Users} label="Data Jamaah" active={currentView === 'jamaah'} collapsed={sidebarCollapsed} />
              <NavItem onClick={() => setCurrentView('keberangkatan')} icon={PlaneTakeoff} label="Keberangkatan" active={currentView === 'keberangkatan'} collapsed={sidebarCollapsed} />
              <NavItem onClick={() => setCurrentView('paket')} icon={Package} label="Paket Umrah" active={currentView === 'paket'} collapsed={sidebarCollapsed} />
              <NavItem onClick={() => setCurrentView('pos')} icon={CreditCard} label="POS Penjualan" active={currentView === 'pos'} collapsed={sidebarCollapsed} />
              <NavItem onClick={() => setCurrentView('agen')} icon={Briefcase} label="Agen" active={currentView === 'agen'} collapsed={sidebarCollapsed} />
              <NavItem onClick={() => setCurrentView('komisi')} icon={Percent} label="Komisi" active={currentView === 'komisi'} collapsed={sidebarCollapsed} />
              <NavItem onClick={() => setCurrentView('reward')} icon={Medal} label="Reward" active={currentView === 'reward'} collapsed={sidebarCollapsed} />
              <NavItem onClick={() => setCurrentView('notif')} icon={Bell} label="Notifikasi" active={currentView === 'notif'} collapsed={sidebarCollapsed} />
              <NavItem onClick={() => setCurrentView('broadcast')} icon={MessageCircle} label="Broadcast WA" active={currentView === 'broadcast'} collapsed={sidebarCollapsed} />
              <NavItem onClick={() => setCurrentView('wa_templates')} icon={FileCode} label="WA Templates" active={currentView === 'wa_templates'} collapsed={sidebarCollapsed} />
            </div>
          </div>

          {/* Category: Konten & Tools */}
          <div>
            {!sidebarCollapsed && (
              <h3 className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-2">
                Konten & Tools
              </h3>
            )}
            <div className="space-y-1">
              <NavItem onClick={() => setCurrentView('marketing')} icon={Megaphone} label="Marketing" active={currentView === 'marketing'} collapsed={sidebarCollapsed} />
              <NavItem onClick={() => setCurrentView('voucher')} icon={Ticket} label="Voucher & Diskon" active={currentView === 'voucher'} collapsed={sidebarCollapsed} />
              <NavItem onClick={() => setCurrentView('akademik')} icon={GraduationCap} label="Akademik" active={currentView === 'akademik'} collapsed={sidebarCollapsed} />
              <NavItem onClick={() => setCurrentView('laporan')} icon={TrendingUp} label="Laporan" active={currentView === 'laporan'} collapsed={sidebarCollapsed} />
            </div>
          </div>

          {/* Category: Jamaah App */}
          <div>
            {!sidebarCollapsed && (
              <h3 className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-2">
                Jamaah App
              </h3>
            )}
            <div className="space-y-1">
              <NavItem onClick={() => setCurrentView('itinerary')} icon={Map} label="Itinerary" active={currentView === 'itinerary'} collapsed={sidebarCollapsed} />
              <NavItem onClick={() => setCurrentView('akomodasi')} icon={Hotel} label="Akomodasi" active={currentView === 'akomodasi'} collapsed={sidebarCollapsed} />
              <NavItem onClick={() => setCurrentView('manasik')} icon={BookOpen} label="Manasik" active={currentView === 'manasik'} collapsed={sidebarCollapsed} />
              <NavItem onClick={() => setCurrentView('mutowif')} icon={ShieldCheck} label="Mutowif" active={currentView === 'mutowif'} collapsed={sidebarCollapsed} />
              <NavItem onClick={() => setCurrentView('panduan_ibadah')} icon={Heart} label="Panduan Ibadah" active={currentView === 'panduan_ibadah'} collapsed={sidebarCollapsed} />
            </div>
          </div>
        </nav>

        {/* User Profile Bottom */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 shrink-0">
          <div className={cn("flex items-center gap-3", sidebarCollapsed && "justify-center")}>
            <img
              src="https://ui-avatars.com/api/?name=Admin+Travel&background=10b981&color=fff"
              className="w-10 h-10 rounded-full border border-white shrink-0"
              alt="Avatar"
            />
            {!sidebarCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-800 truncate">Admin Travel</p>
                <p className="text-xs text-slate-500 truncate">Super Admin</p>
              </div>
            )}
            {!sidebarCollapsed && (
              <button onClick={onLogout} className="text-slate-400 hover:text-red-500 transition-colors shrink-0">
                <LogOut className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden min-w-0">
        {/* Header */}
        <header className="h-[72px] bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-8 shrink-0">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h2 className="text-lg sm:text-xl font-semibold text-slate-800 hidden sm:block">{getViewTitle()}</h2>
          </div>

          <div className="flex items-center gap-6 overflow-hidden">
            {/* Search Bar */}
            <div className="relative hidden lg:block group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 group-focus-within:text-emerald-500 transition-colors" />
              <input
                type="text"
                placeholder="Pencarian global..."
                className="pl-10 pr-4 py-2.5 bg-slate-100 border-transparent focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 rounded-xl text-sm w-64 transition-all outline-none"
              />
            </div>

            {/* Icons */}
            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
              <button 
                onClick={() => setCurrentView('notif')}
                className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors hidden sm:block"
              >
                <Bell className={cn("w-5 h-5", currentView === 'notif' && "text-emerald-600")} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors hidden sm:block">
                <MessageSquare className="w-5 h-5" />
              </button>
              <div className="h-8 w-[1px] bg-slate-200 mx-1 hidden sm:block"></div>
              <button className="flex items-center gap-2 text-sm font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-xl transition-colors">
                <Plus className="w-4 h-4 text-emerald-600" /> 
                <span className="hidden sm:inline">Navigasi Cepat</span>
              </button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-50/50">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon: Icon, label, active, collapsed, onClick }: { icon: any, label: string, active?: boolean, collapsed?: boolean, onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group w-full outline-none focus-visible:ring-2 focus-visible:ring-emerald-500",
        active
          ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20"
          : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-700",
        collapsed && "justify-center px-0 h-10 w-10 mx-auto"
      )}
      title={label}
    >
      <Icon className={cn("w-5 h-5 shrink-0", active ? "text-white" : "text-slate-400 group-hover:text-emerald-600")} />
      {!collapsed && <span className="truncate">{label}</span>}
    </button>
  );
}

