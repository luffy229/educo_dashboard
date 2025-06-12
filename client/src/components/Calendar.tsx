
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Calendar = () => {
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const today = 17;
  
  const calendarDays = [
    28, 29, 30, 31, 1, 2, 3,
    4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31
  ];

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <ChevronLeft size={18} className="text-gray-400 cursor-pointer hover:text-gray-600 sm:w-5 sm:h-5" />
        <h3 className="font-bold text-gray-900 text-sm sm:text-base">August, 2023</h3>
        <ChevronRight size={18} className="text-gray-400 cursor-pointer hover:text-gray-600 sm:w-5 sm:h-5" />
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2 sm:mb-3">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="text-center text-xs font-medium text-gray-500 py-1 sm:py-2">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`text-center py-1.5 sm:py-2 text-xs sm:text-sm cursor-pointer rounded-lg transition-colors duration-200 ${
              day === today
                ? 'bg-yellow-400 text-gray-900 font-bold'
                : index < 4 && day > 20
                ? 'text-gray-300 hover:bg-gray-50'
                : 'text-gray-700 hover:bg-gray-50'
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
