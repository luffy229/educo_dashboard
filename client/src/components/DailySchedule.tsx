
import React from 'react';
import { ChevronRight } from 'lucide-react';

const DailySchedule = () => {
  const scheduleItems = [
    {
      icon: '📱',
      title: 'Design System',
      subtitle: 'Lecture - Class',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100'
    },
    {
      icon: '💡',
      title: 'Typography',
      subtitle: 'Group - Test',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-100'
    },
    {
      icon: '🎨',
      title: 'Color Style',
      subtitle: 'Group - Test',
      bgColor: 'bg-lime-50',
      iconBg: 'bg-lime-100'
    },
    {
      icon: '⚙️',
      title: 'Visual Design',
      subtitle: 'Lecture - Test',
      bgColor: 'bg-orange-50',
      iconBg: 'bg-orange-100'
    }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 h-80">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">Daily Schedule</h3>
      
      <div className="space-y-3 h-60">
        {scheduleItems.map((item, index) => (
          <div key={index} className={`${item.bgColor} rounded-lg p-3 flex items-center justify-between cursor-pointer hover:scale-105 transition-transform duration-200`}>
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 ${item.iconBg} rounded-lg flex items-center justify-center`}>
                <span className="text-sm">{item.icon}</span>
              </div>
              <div>
                <h4 className="font-medium text-slate-800 text-sm">{item.title}</h4>
                <p className="text-xs text-slate-500">{item.subtitle}</p>
              </div>
            </div>
            <ChevronRight size={16} className="text-slate-400" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailySchedule;
