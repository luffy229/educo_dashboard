
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Calendar = () => {
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const today = 17;
  
  const calendarDays = [
    28, 29, 30, 1, 2, 3, 4,
    5, 6, 7, 8, 9, 10, 11,
    12, 13, 14, 15, 16, 17, 18,
    19, 20, 21, 22, 23, 24, 25,
    26, 27, 28, 29, 30, 31
  ];

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
      <div className="flex items-center justify-between mb-4">
        <ChevronLeft size={20} className="text-slate-400 cursor-pointer hover:text-slate-600" />
        <h3 className="font-semibold text-slate-800">August, 2023</h3>
        <ChevronRight size={20} className="text-slate-400 cursor-pointer hover:text-slate-600" />
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="text-center text-xs font-medium text-slate-500 py-2">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`text-center py-2 text-sm cursor-pointer rounded-lg transition-colors duration-200 ${
              day === today
                ? 'bg-lime-400 text-slate-800 font-semibold'
                : day < 28 && index < 7 || day > 25 && index > 28
                ? 'text-slate-300 hover:bg-slate-50'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
