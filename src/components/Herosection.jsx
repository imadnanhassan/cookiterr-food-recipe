import React from 'react';

const Herosection = () => {
   return (
      <div>
         <section className="bg-bg bg-cover bg-no-repeat bg-center dark:text-gray-100">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
               <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                  <div className="py-7 flex flex-col justify-center items-center">
                     <h1 className="text-5xl text-white animate-fade-in-down font-Primary">GET FRESHLY COOKED</h1>
                     <p className="text-lg text-white animate-fade-in-up font-Secondary">It is even better than
                        an expensive cookery book. Learn how to make your favorite restaurant’s dishes</p>
                  </div>


                  <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                     <a rel="noopener noreferrer" href="#" className="animate-fade-in-down px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Suspendisse</a>
                     <a rel="noopener noreferrer" href="#" className="animate-fade-in-up  px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Malesuada</a>
                  </div>
               </div>
               <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                  <img src="assets/svg/Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
               </div>
            </div>
         </section>
      </div>
   );
};

export default Herosection;