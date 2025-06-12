
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { ChevronDown, TrendingUp } from 'lucide-react';

const ActivityChart = () => {
  const data = [
    { day: 'Su', hours: 3 },
    { day: 'Mo', hours: 5 },
    { day: 'Tu', hours: 4 },
    { day: 'We', hours: 7 },
    { day: 'Th', hours: 8 },
    { day: 'Fr', hours: 6 },
    { day: 'Sa', hours: 3 },
  ];

  return (
    <div className="group bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-500 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
      
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">Hours Activity</h3>
        <div className="flex items-center gap-2 px-2 sm:px-3 py-1 sm:py-2 bg-gray-50 rounded-lg cursor-pointer hover:bg-blue-50 hover:shadow-md transition-all duration-300 hover:scale-105">
          <span className="text-xs sm:text-sm text-gray-600">Weekly</span>
          <ChevronDown size={14} className="text-gray-400 sm:w-4 sm:h-4 group-hover:rotate-180 transition-transform duration-300" />
        </div>
      </div>
      
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <div className="relative">
          <TrendingUp size={14} className="text-green-500 sm:w-4 sm:h-4 animate-pulse" />
          <div className="absolute inset-0 text-green-500 animate-ping opacity-30">
            <TrendingUp size={14} className="sm:w-4 sm:h-4" />
          </div>
        </div>
        <span className="text-green-500 font-semibold text-sm sm:text-base bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">+3%</span>
        <span className="text-gray-500 text-xs sm:text-sm">Increase than last week</span>
      </div>
      
      <div className="h-28 sm:h-32 md:h-40 lg:h-48 mb-3 sm:mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap="15%" margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
            <XAxis 
              dataKey="day" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 9, fill: '#9CA3AF' }}
              className="sm:text-xs"
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 9, fill: '#9CA3AF' }}
              domain={[0, 8]}
              ticks={[0, 2, 4, 6, 8]}
              tickFormatter={(value) => `${value}h`}
              className="sm:text-xs"
              width={20}
            />
            <Bar 
              dataKey="hours" 
              fill="#3B82F6" 
              radius={[4, 4, 0, 0]}
              maxBarSize={25}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/50"></span>
          <span>6h 45 min</span>
          <span className="text-gray-400 hidden sm:inline">5 Jun 2023</span>
        </div>
      </div>
    </div>
  );
};

export default ActivityChart;
