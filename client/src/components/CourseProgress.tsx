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
    <div className="group bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-500 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">Course You're Taking</h3>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-2 px-2 sm:px-3 py-1 sm:py-2 bg-gray-50 rounded-lg hover:bg-purple-50 hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer">
            <span className="text-xs sm:text-sm text-gray-600">Active</span>
            <ChevronDown size={14} className="text-gray-400 sm:w-4 sm:h-4 group-hover:rotate-180 transition-transform duration-300" />
          </div>
          <button className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center hover:scale-110 hover:rotate-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-200">
            <Plus size={14} className="text-white sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
      
      <div className="space-y-3 sm:space-y-4">
        {courses.map((course, index) => (
          <div key={index} className="group/item flex items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-gradient-to-r hover:from-gray-50 hover:to-purple-50 rounded-xl transition-all duration-300 hover:shadow-md hover:scale-[1.02] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-100/20 to-transparent transform -translate-x-full group-hover/item:translate-x-full transition-transform duration-1000"></div>
            
            <div className={`w-12 h-12 sm:w-14 sm:h-14 ${course.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-300 shadow-lg relative z-10`}>
              <span className="text-xl sm:text-2xl group-hover/item:animate-pulse">{course.avatar}</span>
            </div>
            
            <div className="flex-1 min-w-0 relative z-10">
              <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base group-hover/item:text-purple-700 transition-colors duration-300">{course.title}</h4>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300 ring-2 ring-transparent group-hover/item:ring-purple-200">
                  <img
                    src={`https://images.unsplash.com/photo-150${index}1?w=24&h=24&fit=crop&crop=face`}
                    alt={course.instructor}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs sm:text-sm text-gray-600 truncate">{course.instructor}</span>
              </div>
            </div>
            
            <div className="text-right mr-2 sm:mr-4 flex-shrink-0 relative z-10">
              <p className="text-xs text-gray-500 mb-1">Remaining</p>
              <p className="text-xs sm:text-sm font-semibold text-gray-700 group-hover/item:text-purple-600 transition-colors duration-300">{course.remaining}</p>
            </div>
            
            <div className="flex-shrink-0 relative z-10 group-hover/item:scale-110 transition-transform duration-300">
              <CircularProgress progress={course.progress} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseProgress;
