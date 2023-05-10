import React from 'react';
import { FaKissWinkHeart } from "react-icons/fa";
const WelcomeLoader = () => {
   return (
      <div>
         <div className="h-screen flex flex-col justify-center items-center">
            <div className="border-4 border-gray-400 rounded-full h-16 w-16 animate-spin"></div>
            <h2 className="text-2xl text-black mt-4">Welcome</h2>
         </div>
      </div>
   );
};

export default WelcomeLoader;