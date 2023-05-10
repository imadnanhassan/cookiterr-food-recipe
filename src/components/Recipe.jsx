/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import ClipLoader from "react-spinners/ClipLoader";


const Recipe = ({ item }) => {
   const [isFavorite, setIsFavorite] = useState(false);
   const [loading, setLoading] = useState(false);
   const handleClick = () => {
      setIsFavorite(!isFavorite);
      if (!isFavorite) {
         toast("Add to favorites!", { type: "success" });
      }
   };


   useEffect(() => {
      setLoading(true)
      setTimeout(() => {
         setLoading(false);
      }, 3000)
   }, [])


   const recipeData = item;
   const { likes, banner, recipe_name, ingredients, cookingMethod, rating } = recipeData


   return (
      <div>
         {
            loading ?
               <ClipLoader
                  color={'#36d7b7'}
                  loading={loading}

                  size={150}
                  aria-label="Loading Spinner"
                  data-testid="loader"
               /> :

               <div className="shadow-lg mb-4 ">
                  <div className="rounded overflow-hidden  flex flex-col">
                     <div className="relative">
                        <a href="#">
                           <img
                              className="w-full h-72"
                              src={banner}
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
                           {recipe_name}
                        </p>
                        <span>
                           <h3 className='text-lg font-semibold pt-3 underline uppercase'>Ingredients</h3>

                           {ingredients.map((ingredient) => (
                              <li key={ingredient}>{ingredient}</li>
                           ))}

                        </span>
                        <span>
                           <h3 className='text-lg font-semibold pt-3 underline uppercase'>Cooking Method</h3>
                           <ul>
                              {cookingMethod.map((cookingMethod) => (
                                 <li key={cookingMethod}>{cookingMethod}</li>
                              ))}
                           </ul>
                        </span>
                     </div>
                     <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                        <span className="py-1 text-lg font-regular text-gray-900 mr-1 flex flex-row items-center">Rating: {rating}
                           <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalf />


                        </span>
                        <span className="py-3 px-5 rounded-md text-lg font-regular text-gray-900 bg-green-400  mr-1 flex flex-row items-center" >

                           <button onClick={handleClick}>Favorite</button>
                           {isFavorite ? (
                              <ToastContainer position="bottom-center" autoClose={3000} />
                           ) : null}
                        </span>
                     </div>
                  </div>
               </div>

         }
      </div>
   );
};

export default Recipe;