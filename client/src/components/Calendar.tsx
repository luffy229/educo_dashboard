
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
    <div className="group bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-500 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
      
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <ChevronLeft size={18} className="text-gray-400 cursor-pointer hover:text-yellow-600 hover:scale-125 transition-all duration-300 sm:w-5 sm:h-5" />
        <h3 className="font-bold text-gray-900 text-sm sm:text-base group-hover:text-yellow-600 transition-colors duration-300">August, 2023</h3>
        <ChevronRight size={18} className="text-gray-400 cursor-pointer hover:text-yellow-600 hover:scale-125 transition-all duration-300 sm:w-5 sm:h-5" />
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2 sm:mb-3">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="text-center text-xs font-medium text-gray-500 py-1 sm:py-2 hover:text-yellow-600 transition-colors duration-300">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`text-center py-1.5 sm:py-2 text-xs sm:text-sm cursor-pointer rounded-lg transition-all duration-300 hover:scale-110 ${
              day === today
                ? 'bg-gradient-to-br from-yellow-400 to-orange-400 text-gray-900 font-bold shadow-lg animate-pulse'
                : index < 4 && day > 20
                ? 'text-gray-300 hover:bg-gray-50 hover:shadow-md'
                : 'text-gray-700 hover:bg-gradient-to-br hover:from-yellow-50 hover:to-orange-50 hover:shadow-md hover:text-yellow-700'
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
