
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
    <div className="w-[205px] bg-slate-800 text-white min-h-screen p-6">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-10">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">📚</span>
        </div>
        <span className="text-lg font-semibold text-white">EDUCO</span>
      </div>

      {/* Menu Items */}
      <nav className="space-y-1">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${
                item.active
                  ? 'bg-lime-400 text-slate-900 font-medium shadow-lg'
                  : 'hover:bg-slate-700 text-slate-300 hover:text-white'
              }`}
            >
              <Icon size={18} />
              <span className="flex-1 text-sm">{item.label}</span>
              {item.badge && (
                <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full min-w-[20px] text-center">
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
