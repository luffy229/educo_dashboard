
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  GraduationCap, 
  MessageSquare, 
  Bell, 
  Calendar, 
  Users, 
  Settings,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen = true, onClose }) => {
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
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-[260px] sm:w-[280px] lg:w-[205px] 
        bg-slate-800 text-white min-h-screen p-3 sm:p-4 lg:p-6 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Mobile close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 lg:hidden p-2 rounded-lg hover:bg-slate-700"
        >
          <X size={20} />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2 mb-6 sm:mb-8 lg:mb-10">
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xs sm:text-sm">📚</span>
          </div>
          <span className="text-base sm:text-lg font-semibold text-white">EDUCO</span>
        </div>

        {/* Menu Items */}
        <nav className="space-y-1">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl cursor-pointer transition-all duration-200 ${
                  item.active
                    ? 'bg-lime-400 text-slate-900 font-medium shadow-lg'
                    : 'hover:bg-slate-700 text-slate-300 hover:text-white'
                }`}
                onClick={() => {
                  // Close mobile sidebar when item is clicked
                  if (window.innerWidth < 1024) {
                    onClose?.();
                  }
                }}
              >
                <Icon size={16} className="sm:w-4.5 sm:h-4.5" />
                <span className="flex-1 text-xs sm:text-sm">{item.label}</span>
                {item.badge && (
                  <span className="bg-red-500 text-white text-xs px-1.5 sm:px-2 py-0.5 rounded-full min-w-[18px] sm:min-w-[20px] text-center">
                    {item.badge}
                  </span>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
