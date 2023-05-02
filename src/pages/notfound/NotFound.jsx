import React from 'react';
import NotFornd from '../../assets/images/notfound.gif'
import { Link } from 'react-router-dom';

const NotFound = () => {
   return (
      <div >

         <section className="flex items-center h-full sm:p-16 bg-gray-50 text-gray-800">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
               <img src={NotFornd} alt="" />

               

               <Link to={'/'}  class="relative inline-block text-lg group">
                  <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                     <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                     <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                     <span class="relative">Back to home</span>
                  </span>
                  <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
               </Link>
            </div>
         </section>
      </div>
   );
};

export default NotFound;