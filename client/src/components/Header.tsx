
import React from 'react';
import { Search, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <div className="flex items-center justify-between mb-4 sm:mb-6 md:mb-8">
      <div className="flex items-center gap-2 sm:gap-4">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-1.5 sm:p-2 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors"
        >
          <Menu size={18} className="text-gray-600 sm:w-5 sm:h-5" />
        </button>
        <div className="min-w-0">
          <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 truncate">
            Welcome back Taylor 👋
          </h1>
        </div>
      </div>
      
      <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
          <input
            type="text"
            placeholder="Search courses"
            className="pl-9 lg:pl-12 pr-3 lg:pr-4 py-2 lg:py-3 bg-gray-50 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 w-32 lg:w-48 xl:w-64 text-sm transition-all"
          />
        </div>
        
        <button className="md:hidden p-1.5 sm:p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
          <Search size={16} className="text-gray-600 sm:w-4.5 sm:h-4.5" />
        </button>
        
        <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0 hover:scale-110 hover:shadow-xl hover:border-blue-300 transition-all duration-300 cursor-pointer relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          <img
            src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face"
            alt="Profile"
            className="w-full h-full object-cover relative z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
