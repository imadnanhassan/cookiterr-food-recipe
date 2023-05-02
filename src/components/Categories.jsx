import React from 'react';

const Categories = () => {

   const card = [
      { id: 1, name: "Burger", author: "Alice Dwan", authorImg: "https://fancytailwind.com/static/profile8-34d5f5980ca5030c155a2ffbb50b5802.jpg", bannerImg: "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80", currentBid: "0.85 ETH", },
      { id: 2, name: "Sweet", author: "Binkies Club", authorImg: "https://fancytailwind.com/static/profile8-34d5f5980ca5030c155a2ffbb50b5802.jpg", bannerImg: "https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", currentBid: "4.10 ETH", },
      { id: 3, name: "Pizza", author: "Bob Douglas", authorImg: "https://fancytailwind.com/static/profile8-34d5f5980ca5030c155a2ffbb50b5802.jpg", bannerImg: "https://images.unsplash.com/photo-1613564834361-9436948817d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=443&q=80", currentBid: "11 ETH" },
   ]
   return (
      <div>
         <div className="relative mx-auto py-8 md:py-16 px-4 w-full max-w-7xl bg-white">
            <div className="mx-auto max-w-5xl">
               <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-extrabold text-gray-900 font-Primary">Recipes By Category</h2>
                  <p className="mt-4 text-lg text-gray-500 font-Secondary">Excepteur sint occaecat cupidatat non qui proident, sunt culpa qui officia deserunmollit anim id est laborum.</p>
               </div>



               <div className="mt-8 mx-auto md:mx-auto max-w-md md:max-w-none grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10">
                  {card.map(item => (
                     <div key={item.id}
                        className="col-span-1 group relative p-2 pb-5 flex flex-col items-center border-2 border-transparent rounded-xl bg-white bg-opacity-30 backdrop-filter backdrop-blur-sm hover:shadow-xl hover:border-green-500">

                        <div className="relative max-h-64 rounded-2xl overflow-hidden">
                           <img src={item.bannerImg} alt="" className="object-cover transition duration-200 ease-in transform group-hover:scale-105" />

                           <span className="absolute top-2 right-2 py-1 px-3 rounded-full bg-gray-800 bg-opacity-30 text-xs text-white font-bold backdrop-filter backdrop-blur-sm"></span>
                        </div>

                        <div className="mt-2 px-2 w-full flex justify-between items-center">

                           <p className="text-xl text-black text-opacity-80 font-semibold tracking-wide group-hover:text-opacity-100">{item.name}
                           </p>


                           <p className='py-2'>
                              <button type="button" className="  px-2.5 py-1.5 rounded-lg bg-gradient-to-t from-green-600 to-green-200 text-xs text-white font-bold tracking-wide hover:to-green-600">See More</button>
                           </p>

                        </div>
                     </div>
                  ))
                  }
               </div>

            </div>
         </div>
      </div>

   );
};

export default Categories;