/* eslint-disable react/jsx-key */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../../components/Recipe';

const ChefDEtails = () => {
   const data = useLoaderData();
   // console.log(data)
   const { name, experience, recipe_count, likes, picture, bio, id, recipes } = data
   return (
      <>
         <div className="flex bg-bg pt-12 px-6 md:px-20  items-center justify-center bg-hero md:h-screen overflow-hidden">
            <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
               <div className="w-full md:w-1/2 lg:pr-32">
                  <h2 className="text-4xl lg:text-5xl text-center md:text-left text-white font-Primary leading-tight font-medium">
                     {name}
                  </h2>
                  <p className="mt-6 text-white md:mt-10 text-md lg:text-xl text-center md:text-left  font-light tracking-wider leading-relaxed">
                     {bio}
                  </p>
                  <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">

                     <button className="w-full mt-4 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded font-semibold text-md bg-white text-blue-500 border-2 border-gray-500">
                        Like: 💖{likes}
                     </button>
                     <button className="w-full mt-4 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded font-semibold text-md bg-white text-blue-500 border-2 border-gray-500">
                        Experience: 👩‍🍳{experience}
                     </button>
                     <span className="w-full mt-4 text-center sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded font-semibold text-md bg-white text-blue-500 border-2 border-gray-500">
                        Number of Recipes: {recipe_count} 🥗
                     </span>
                  </div>
               </div>
               <div className="w-full md:w-1/2 flex py-2 justify-center md:justify-end">
                  <img className='md:rounded-lg  ' src={picture} />
               </div>
            </div>
         </div>


         <div className='  md:grid grid-cols-3  gap-8 px-7 py-6 container mx-auto justify-between items-center min-h-screen'>
            {
               recipes.map(item =>
                  <Recipe 
                  key={item.number}
                  item={item}
                  >

                  </Recipe>)
            }
         </div>

      </>
   );
};

export default ChefDEtails;