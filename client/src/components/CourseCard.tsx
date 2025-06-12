
import React from 'react';
import { Star } from 'lucide-react';

interface CourseCardProps {
  title: string;
  lessons: number;
  rating: number;
  type: string;
  bgColor: string;
  iconBg: string;
  icon: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  lessons,
  rating,
  type,
  bgColor,
  iconBg,
  icon
}) => {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className={`w-10 h-10 sm:w-12 sm:h-12 ${iconBg} rounded-xl flex items-center justify-center mb-3 sm:mb-4`}>
        <span className="text-lg sm:text-xl">{icon}</span>
      </div>
      
      <h3 className="font-semibold text-gray-900 mb-1 text-base sm:text-lg">{title}</h3>
      <p className="text-gray-500 text-sm mb-3 sm:mb-4">{lessons} Lessons</p>
      
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-400 mb-1">Rate</p>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold text-gray-900 text-sm sm:text-base">{rating}</span>
          </div>
        </div>
        
        <div className="text-right">
          <p className="text-xs text-gray-400 mb-1">Type</p>
          <p className="text-xs sm:text-sm font-medium text-gray-600">{type}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
