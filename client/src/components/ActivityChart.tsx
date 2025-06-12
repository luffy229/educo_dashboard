
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
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Hours Activity</h3>
        <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg cursor-pointer">
          <span className="text-sm text-gray-600">Weekly</span>
          <ChevronDown size={16} className="text-gray-400" />
        </div>
      </div>
      
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp size={16} className="text-green-500" />
        <span className="text-green-500 font-semibold">+3%</span>
        <span className="text-gray-500 text-sm">Increase than last week</span>
      </div>
      
      <div className="h-48 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap="20%">
            <XAxis 
              dataKey="day" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#9CA3AF' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#9CA3AF' }}
              domain={[0, 8]}
              ticks={[0, 2, 4, 6, 8]}
              tickFormatter={(value) => `${value}h`}
            />
            <Bar 
              dataKey="hours" 
              fill="#3B82F6" 
              radius={[8, 8, 0, 0]}
              maxBarSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-xl text-sm font-medium">
          <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
          <span>6h 45 min</span>
          <span className="text-gray-400">5 Jun 2023</span>
        </div>
      </div>
    </div>
  );
};

export default ActivityChart;
