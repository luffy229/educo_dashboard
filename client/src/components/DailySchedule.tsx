
import React from 'react';
import { ChevronRight } from 'lucide-react';

const DailySchedule = () => {
  const scheduleItems = [
    {
      icon: '📱',
      title: 'Design System',
      subtitle: 'Lecture - Class',
      iconBg: 'bg-orange-200'
    },
    {
      icon: '🔤',
      title: 'Typography',
      subtitle: 'Group - Test',
      iconBg: 'bg-blue-200'
    },
    {
      icon: '🎨',
      title: 'Color Style',
      subtitle: 'Group - Test',
      iconBg: 'bg-green-200'
    },
    {
      icon: '👁️',
      title: 'Visual Design',
      subtitle: 'Lecture - Test',
      iconBg: 'bg-yellow-200'
    }
  ];

  return (
    <div className="group bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-500 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-orange-500 via-red-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right"></div>
      
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 group-hover:text-orange-600 transition-colors duration-300">Daily Schedule</h3>
      
      <div className="space-y-3 sm:space-y-4">
        {scheduleItems.map((item, index) => (
          <div key={index} className="group/item flex items-center justify-between p-2 sm:p-3 hover:bg-gradient-to-r hover:from-gray-50 hover:to-orange-50 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-md hover:scale-[1.02] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-100/20 to-transparent transform -translate-x-full group-hover/item:translate-x-full transition-transform duration-1000"></div>
            
            <div className="flex items-center gap-2 sm:gap-3 relative z-10">
              <div className={`w-8 h-8 sm:w-10 sm:h-10 ${item.iconBg} rounded-xl flex items-center justify-center group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-300 shadow-lg`}>
                <span className="text-base sm:text-lg group-hover/item:animate-pulse">{item.icon}</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-xs sm:text-sm group-hover/item:text-orange-700 transition-colors duration-300">{item.title}</h4>
                <p className="text-xs text-gray-500">{item.subtitle}</p>
              </div>
            </div>
            <ChevronRight size={16} className="text-gray-400 sm:w-5 sm:h-5 group-hover/item:text-orange-500 group-hover/item:translate-x-1 transition-all duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailySchedule;
