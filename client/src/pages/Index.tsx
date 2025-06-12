
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import CourseCard from '../components/CourseCard';
import ActivityChart from '../components/ActivityChart';
import DailySchedule from '../components/DailySchedule';
import Calendar from '../components/Calendar';
import Assignments from '../components/Assignments';
import CourseProgress from '../components/CourseProgress';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const newCourses = [
    {
      title: 'Content Writing',
      lessons: 12,
      rating: 4.8,
      type: 'Data Research',
      bgColor: 'bg-orange-50',
      iconBg: 'bg-orange-200',
      icon: '✏️'
    },
    {
      title: 'Usability Testing',
      lessons: 15,
      rating: 5.0,
      type: 'UI/UX Design',
      bgColor: 'bg-green-50',
      iconBg: 'bg-yellow-200',
      icon: '🔍'
    },
    {
      title: 'Photography',
      lessons: 8,
      rating: 4.6,
      type: 'Art and Design',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-200',
      icon: '🔒'
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      
      <div className="flex-1 p-4 sm:p-6 lg:p-8 bg-gray-50">
        <Header />
        
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 sm:gap-6">
          {/* Left Main Content */}
          <div className="xl:col-span-8">
            {/* New Courses Section */}
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">New Courses</h2>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                View All
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {newCourses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
            
            {/* Activity Chart and Daily Schedule */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <div>
                <ActivityChart />
              </div>
              <div>
                <DailySchedule />
              </div>
            </div>
            
            {/* Course Progress */}
            <div>
              <CourseProgress />
            </div>
          </div>
          
          {/* Right Sidebar */}
          <div className="xl:col-span-4 space-y-4 sm:space-y-6">
            <Calendar />
            <Assignments />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
