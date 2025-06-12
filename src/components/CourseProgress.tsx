import React from 'react';
import { Plus } from 'lucide-react';

const CourseProgress = () => {
  const courses = [
    {
      title: '3D Design Course',
      instructor: 'Micheal Andrew',
      remaining: '8h 45 min',
      progress: 45,
      avatar: '🎨',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Development Basics',
      instructor: 'Natalia Verman',
      remaining: '16h 12 min',
      progress: 75,
      avatar: '⚡',
      bgColor: 'bg-red-100'
    }
  ];

  const CircularProgress = ({ progress }: { progress: number }) => {
    const radius = 20;
    const strokeWidth = 4;
    const normalizedRadius = radius - strokeWidth * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDasharray = `${circumference} ${circumference}`;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
      <div className="relative">
        <svg height={radius * 2} width={radius * 2} className="transform -rotate-90">
          <circle
            stroke="#e2e8f0"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke="#84cc16"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDasharray}
            style={{ strokeDashoffset }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-semibold text-slate-700">{progress}%</span>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-800">Course You're Taking</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-500">Active</span>
          <button className="w-6 h-6 bg-lime-400 rounded-lg flex items-center justify-center">
            <Plus size={14} className="text-slate-800" />
          </button>
        </div>
      </div>
      
      <div className="space-y-4">
        {courses.map((course, index) => (
          <div key={index} className="flex items-center gap-4 p-4 hover:bg-slate-50 rounded-lg transition-colors duration-200">
            <div className={`w-12 h-12 ${course.bgColor} rounded-xl flex items-center justify-center`}>
              <span className="text-xl">{course.avatar}</span>
            </div>
            
            <div className="flex-1">
              <h4 className="font-semibold text-slate-800 mb-1">{course.title}</h4>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-orange-400"></div>
                <span className="text-sm text-slate-600">{course.instructor}</span>
              </div>
            </div>
            
            <div className="text-right">
              <p className="text-xs text-slate-500 mb-1">Remaining</p>
              <p className="text-sm font-medium text-slate-700">{course.remaining}</p>
            </div>
            
            <CircularProgress progress={course.progress} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseProgress;
