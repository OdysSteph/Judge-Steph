import Link from 'next/link';
import { LayoutDashboard, Code, Trophy, LogsIcon} from 'lucide-react';

export default function Sidebar() {
  const menus = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/' },
    { name: 'Assignments', icon: Code, href: '/assignments' },
    { name: 'Hall of Fame', icon: Trophy, href: '/hof' },
  ];

  return (
    <aside className="w-64 h-screen flex-shrink-0 border-r border-neutral-800 bg-[#0a0a0a] flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-bold tracking-wider text-white">
          Steph<span className="text-blue-500">Judge</span>
        </h1>
      </div>
      
      <nav className="flex-1 px-4 mt-6 space-y-2">
        {menus.map((menu) => {
          const Icon = menu.icon;
          return (
            <Link 
              key={menu.name} 
              href={menu.href}
              className="flex items-center gap-3 px-4 py-3 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-lg transition-colors"
            >
              <Icon size={20} />
              <span className="font-medium">{menu.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-neutral-800">
        <div className="flex items-center gap-3 px-4 py-2">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            M
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-white">Mahasiswa</span>
            <span className="text-xs text-neutral-500">Online</span>
          </div>
        </div>
      </div>
    </aside>
  );
}