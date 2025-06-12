
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
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Daily Schedule</h3>
      
      <div className="space-y-3 sm:space-y-4">
        {scheduleItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-2 sm:p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className={`w-8 h-8 sm:w-10 sm:h-10 ${item.iconBg} rounded-xl flex items-center justify-center`}>
                <span className="text-base sm:text-lg">{item.icon}</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-xs sm:text-sm">{item.title}</h4>
                <p className="text-xs text-gray-500">{item.subtitle}</p>
              </div>
            </div>
            <ChevronRight size={16} className="text-gray-400 sm:w-5 sm:h-5" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailySchedule;
