/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ChefCard = ({ item }) => {
   // eslint-disable-next-line react/prop-types
   console.log(item)
   const { name, experience, recipe_count, likes, picture, bio,id } = item

   return (
      <>
         <div className=" shadow-lg ">
            <div className="rounded overflow-hidden  flex flex-col">
               <div className="relative">
                  <a href="#">
                     <img
                        className="w-full h-72"
                        src={picture}
                        alt="Sunset in the mountains"
                     />
                     <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                  </a>
                  <sapn href="#!">
                     <div className="text-xs rounded-sm absolute top-0 right-0 bg-green-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-green-600 transition duration-500 ease-in-out">
                        {likes} ❤️
                     </div>
                  </sapn>
               </div>
               <div className="px-6 py-4 mb-auto">
                  <p className="font-medium text-lg  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                     {name}
                  </p>

               </div>
               <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                  <span className="py-1 text-lg font-regular text-gray-900 mr-1 flex flex-row items-center">Recipe: {recipe_count} 🍛</span>
                  <span className="py-1 text-lg font-regular text-gray-900 mr-1 flex flex-row items-center" >Exprience: {experience} </span>
               </div>
               <div>
                  <button className="bg-green-700 text-white font-bold py-4 px-4 w-full rounded hover:bg-green-600">
                     <Link to={`/our-chef/${id}`} >
                        View Recipe Details
                     </Link>
                  </button>
               </div>
            </div>

         </div>

      </>
   );
};

export default ChefCard;