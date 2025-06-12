import React from 'react';
import { Plus, ChevronDown } from 'lucide-react';

const CourseProgress = () => {
  const courses = [
    {
      title: '3D Design Course',
      instructor: 'Micheal Andrew',
      remaining: '8h 45 min',
      progress: 45,
      avatar: '🎨',
      bgColor: 'bg-purple-200'
    },
    {
      title: 'Development Basics',
      instructor: 'Natalia Verman',
      remaining: '16h 12 min',
      progress: 75,
      avatar: '💻',
      bgColor: 'bg-pink-200'
    }
  ];

  const CircularProgress = ({ progress }: { progress: number }) => {
    const radius = 24;
    const strokeWidth = 6;
    const normalizedRadius = radius - strokeWidth * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDasharray = `${circumference} ${circumference}`;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
      <div className="relative">
        <svg height={radius * 2} width={radius * 2} className="transform -rotate-90">
          <circle
            stroke="#e5e7eb"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke={progress >= 70 ? "#10b981" : "#3b82f6"}
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
          <span className="text-xs font-bold text-gray-700">{progress}%</span>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Course You're Taking</h3>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg">
            <span className="text-sm text-gray-600">Active</span>
            <ChevronDown size={16} className="text-gray-400" />
          </div>
          <button className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
            <Plus size={16} className="text-white" />
          </button>
        </div>
      </div>
      
      <div className="space-y-4">
        {courses.map((course, index) => (
          <div key={index} className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-xl transition-colors duration-200">
            <div className={`w-14 h-14 ${course.bgColor} rounded-2xl flex items-center justify-center`}>
              <span className="text-2xl">{course.avatar}</span>
            </div>
            
            <div className="flex-1">
              <h4 className="font-bold text-gray-900 mb-2">{course.title}</h4>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-150${index}1?w=24&h=24&fit=crop&crop=face`}
                    alt={course.instructor}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm text-gray-600">{course.instructor}</span>
              </div>
            </div>
            
            <div className="text-right mr-4">
              <p className="text-xs text-gray-500 mb-1">Remaining</p>
              <p className="text-sm font-semibold text-gray-700">{course.remaining}</p>
            </div>
            
            <CircularProgress progress={course.progress} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseProgress;
