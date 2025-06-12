
import React from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  GraduationCap, 
  MessageSquare, 
  Bell, 
  Calendar, 
  Users, 
  Settings 
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: BookOpen, label: 'My Courses', active: false },
    { icon: GraduationCap, label: 'My Classes', active: false },
    { icon: MessageSquare, label: 'Messages', active: false },
    { icon: Bell, label: 'Notifications', active: false, badge: '2' },
    { icon: Calendar, label: 'Calendars', active: false },
    { icon: Users, label: 'Community', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];

  return (
    <div className="w-64 bg-slate-800 text-white min-h-screen p-4">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-8 px-2">
        <div className="w-8 h-8 bg-lime-400 rounded-lg flex items-center justify-center">
          <span className="text-slate-800 font-bold text-sm">E</span>
        </div>
        <span className="text-xl font-semibold tracking-wider">EDUCO</span>
      </div>

      {/* Menu Items */}
      <nav className="space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ${
                item.active
                  ? 'bg-lime-400 text-slate-800 font-medium'
                  : 'hover:bg-slate-700 text-slate-300'
              }`}
            >
              <Icon size={20} />
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                  {item.badge}
                </span>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
