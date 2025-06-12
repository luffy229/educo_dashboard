
import React from 'react';
import { Plus } from 'lucide-react';

const Assignments = () => {
  const assignments = [
    {
      title: 'Methods of data',
      date: '02 July, 10:30 AM',
      status: 'In progress',
      statusColor: 'bg-blue-100 text-blue-700',
      avatarBg: 'bg-blue-200',
      avatar: '📊'
    },
    {
      title: 'Market Research',
      date: '14 June, 12:45 AM',
      status: 'Completed',
      statusColor: 'bg-green-100 text-green-700',
      avatarBg: 'bg-green-200',
      avatar: '💰'
    },
    {
      title: 'Data Collection',
      date: '12 May, 11:00 AM',
      status: 'Upcoming',
      statusColor: 'bg-orange-100 text-orange-700',
      avatarBg: 'bg-yellow-200',
      avatar: '📈'
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Assignments</h3>
        <button className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center hover:bg-green-600 transition-colors duration-200">
          <Plus size={18} className="text-white" />
        </button>
      </div>
      
      <div className="space-y-4">
        {assignments.map((assignment, index) => (
          <div key={index} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-xl transition-colors duration-200">
            <div className={`w-12 h-12 ${assignment.avatarBg} rounded-xl flex items-center justify-center`}>
              <span className="text-lg">{assignment.avatar}</span>
            </div>
            
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 text-sm">{assignment.title}</h4>
              <p className="text-xs text-gray-500">{assignment.date}</p>
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
