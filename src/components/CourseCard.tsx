
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
    <div className={`${bgColor} rounded-xl p-6 relative overflow-hidden`}>
      <div className={`w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center mb-4`}>
        <span className="text-2xl">{icon}</span>
      </div>
      
      <h3 className="font-semibold text-slate-800 mb-1">{title}</h3>
      <p className="text-slate-600 text-sm mb-4">{lessons} Lessons</p>
      
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-slate-500 mb-1">Rate</p>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold text-slate-800">{rating}</span>
          </div>
        </div>
        
        <div>
          <p className="text-xs text-slate-500 mb-1">Type</p>
          <p className="text-sm font-medium text-slate-800">{type}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
