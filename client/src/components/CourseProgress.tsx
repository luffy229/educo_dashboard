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
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900">Course You're Taking</h3>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-2 px-2 sm:px-3 py-1 sm:py-2 bg-gray-50 rounded-lg">
            <span className="text-xs sm:text-sm text-gray-600">Active</span>
            <ChevronDown size={14} className="text-gray-400 sm:w-4 sm:h-4" />
          </div>
          <button className="w-7 h-7 sm:w-8 sm:h-8 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
            <Plus size={14} className="text-white sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
      
      <div className="space-y-3 sm:space-y-4">
        {courses.map((course, index) => (
          <div key={index} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-gray-50 rounded-xl transition-colors duration-200">
            <div className={`w-12 h-12 sm:w-14 sm:h-14 ${course.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0`}>
              <span className="text-xl sm:text-2xl">{course.avatar}</span>
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{course.title}</h4>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={`https://images.unsplash.com/photo-150${index}1?w=24&h=24&fit=crop&crop=face`}
                    alt={course.instructor}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs sm:text-sm text-gray-600 truncate">{course.instructor}</span>
              </div>
            </div>
            
            <div className="text-right mr-2 sm:mr-4 flex-shrink-0">
              <p className="text-xs text-gray-500 mb-1">Remaining</p>
              <p className="text-xs sm:text-sm font-semibold text-gray-700">{course.remaining}</p>
            </div>
            
            <div className="flex-shrink-0">
              <CircularProgress progress={course.progress} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseProgress;
