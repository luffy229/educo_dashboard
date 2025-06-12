
import React from 'react';
import { Plus } from 'lucide-react';

const Assignments = () => {
  const assignments = [
    {
      title: 'Methods of data',
      date: '02 July, 10:30 AM',
      status: 'In progress',
      statusColor: 'bg-blue-100 text-blue-700',
      avatar: '🔵'
    },
    {
      title: 'Market Research',
      date: '14 June, 12:45 AM',
      status: 'Completed',
      statusColor: 'bg-green-100 text-green-700',
      avatar: '💰'
    },
    {
      title: 'Data Collection',
      date: '12 May, 11:00 AM',
      status: 'Upcoming',
      statusColor: 'bg-orange-100 text-orange-700',
      avatar: '📊'
    }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-800">Assignments</h3>
        <button className="w-8 h-8 bg-lime-400 rounded-lg flex items-center justify-center hover:bg-lime-500 transition-colors duration-200">
          <Plus size={16} className="text-slate-800" />
        </button>
      </div>
      
      <div className="space-y-4">
        {assignments.map((assignment, index) => (
          <div key={index} className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-lg transition-colors duration-200">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center text-white font-semibold">
              <span>{assignment.avatar}</span>
            </div>
            
            <div className="flex-1">
              <h4 className="font-medium text-slate-800">{assignment.title}</h4>
              <p className="text-sm text-slate-500">{assignment.date}</p>
            </div>
            
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${assignment.statusColor}`}>
              {assignment.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
