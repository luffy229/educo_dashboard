import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-yellow-50 flex items-center justify-center z-50">
      <div className="flex flex-col items-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-extrabold comic-text-stroke uppercase"
        >
          Welcome To Educa 
        </motion.div>

        <div className="w-96">
          <div className="flex justify-between text-black text-sm font-medium mb-1">
            <span>0%</span>
            <span>100%</span>
          </div>
          <div className="w-full h-6 bg-white rounded-full overflow-hidden border border-gray-300">
            <motion.div
              className="h-full bg-yellow-400"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 2,
                ease: "linear",
              }}
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative text-black text-sm font-semibold border border-black bg-white py-2 px-4 shadow-lg"
        >
         Where Learning Meets Innovation
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-black mt-0.5"></div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white mt-0"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingScreen; 