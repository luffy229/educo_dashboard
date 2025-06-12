
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
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />
      
      <div className="flex-1 p-3 sm:p-4 md:p-6 lg:p-8 bg-gray-50 transition-all duration-300">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 xl:grid-cols-12 gap-3 sm:gap-4 md:gap-6">
          {/* Left Main Content */}
          <div className="lg:col-span-8 xl:col-span-8">
            {/* New Courses Section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">New Courses</h2>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium self-start sm:self-auto">
                View All
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
              {newCourses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
            
            {/* Activity Chart and Daily Schedule */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-6">
              <div className="order-2 md:order-1">
                <ActivityChart />
              </div>
              <div className="order-1 md:order-2">
                <DailySchedule />
              </div>
            </div>
            
            {/* Course Progress */}
            <div>
              <CourseProgress />
            </div>
          </div>
          
          {/* Right Sidebar */}
          <div className="lg:col-span-4 xl:col-span-4 space-y-3 sm:space-y-4 md:space-y-6">
            <Calendar />
            <Assignments />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
