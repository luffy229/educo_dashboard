
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import CourseCard from '../components/CourseCard';
import ActivityChart from '../components/ActivityChart';
import DailySchedule from '../components/DailySchedule';
import Calendar from '../components/Calendar';
import Assignments from '../components/Assignments';
import CourseProgress from '../components/CourseProgress';

const Index = () => {
  const newCourses = [
    {
      title: 'Content Writing',
      lessons: 12,
      rating: 4.8,
      type: 'Data Research',
      bgColor: 'bg-orange-50',
      iconBg: 'bg-orange-100',
      icon: '📝'
    },
    {
      title: 'Usability Testing',
      lessons: 15,
      rating: 5.0,
      type: 'UI/UX Design',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-100',
      icon: '🔍'
    },
    {
      title: 'Photography',
      lessons: 8,
      rating: 4.6,
      type: 'Art and Design',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      icon: '📷'
    }
  ];

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      
      <div className="flex-1 p-6 bg-white">
        <Header />
        
        <div className="grid grid-cols-12 gap-6">
          {/* Left Main Content */}
          <div className="col-span-8">
            {/* New Courses Section */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-slate-800">New Courses</h2>
              <button className="text-sm text-lime-600 hover:text-lime-700 font-medium">
                View All
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              {newCourses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
            
            {/* Activity Chart and Daily Schedule side by side */}
            <div className="grid grid-cols-2 gap-6 mb-6">
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
          <div className="col-span-4 space-y-6">
            <Calendar />
            <Assignments />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
