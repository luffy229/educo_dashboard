import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-yellow-50 flex items-center justify-center z-50">
      <div className="flex flex-col items-center space-y-4 sm:space-y-6 md:space-y-8 px-4 sm:px-6 md:px-8 w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold comic-text-stroke uppercase text-center"
        >
          Welcome To Educa
        </motion.div>

        <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px]">
          <div className="flex justify-between text-black text-xs sm:text-sm font-medium mb-1">
            <span>0%</span>
            <span>100%</span>
          </div>
          <div className="w-full h-4 sm:h-5 md:h-6 bg-white rounded-full overflow-hidden border border-gray-300">
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
          className="relative text-black text-xs sm:text-sm md:text-base font-semibold border border-black bg-white py-1.5 sm:py-2 px-3 sm:px-4 shadow-lg text-center"
        >
          Where Learning Meets Innovation
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 sm:border-l-8 border-r-6 sm:border-r-8 border-t-6 sm:border-t-8 border-transparent border-t-black mt-0.5"></div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 sm:border-l-8 border-r-6 sm:border-r-8 border-t-6 sm:border-t-8 border-transparent border-t-white mt-0"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingScreen;