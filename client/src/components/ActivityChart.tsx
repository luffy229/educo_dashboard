
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { ChevronDown } from 'lucide-react';

const ActivityChart = () => {
  const data = [
    { day: 'Su', hours: 4 },
    { day: 'Mo', hours: 6 },
    { day: 'Tu', hours: 5 },
    { day: 'We', hours: 8 },
    { day: 'Th', hours: 7 },
    { day: 'Fr', hours: 6 },
    { day: 'Sa', hours: 4 },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 h-80">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-800">Hours Activity</h3>
        <div className="flex items-center gap-2 px-3 py-1 border border-slate-200 rounded-lg cursor-pointer">
          <span className="text-sm text-slate-600">Weekly</span>
          <ChevronDown size={16} className="text-slate-400" />
        </div>
      </div>
      
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lime-500 font-semibold">+3%</span>
        <span className="text-slate-500 text-sm">Increase than last week</span>
      </div>
      
      <div className="h-40 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis 
              dataKey="day" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#64748b' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#64748b' }}
              domain={[0, 8]}
              ticks={[0, 2, 4, 6, 8]}
              tickFormatter={(value) => `${value}h`}
            />
            <Bar 
              dataKey="hours" 
              fill="#84cc16" 
              radius={[4, 4, 0, 0]}
              stroke="#84cc16"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-slate-800 text-white px-3 py-2 rounded-lg text-sm">
          <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
          <span>6h 45 min</span>
          <span className="text-slate-400">5 Jun 2023</span>
        </div>
      </div>
    </div>
  );
};

export default ActivityChart;
