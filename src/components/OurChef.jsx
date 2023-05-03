/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import ChefCard from './ChefCard';

const OurChef = () => {
   const [chef, setChef] = useState([])
   useEffect(() => {
      fetch('http://localhost:5000/our-chef')
         .then(res => res.json())
         .then(data => setChef(data))
         .catch(error => console.error(error))
   }, [])
   return (
      <div className='py-32 conatiner mx-auto'>
         <div className="  max-w-3xl py-5 conatiner mx-auto text-center ">
            <h2 className="text-5xl font-extrabold text-gray-900 font-Primary">Our Chef</h2>
            <p className="mt-4 text-lg text-gray-500 font-Secondary">Excepteur sint occaecat cupidatat non qui proident, sunt culpa qui officia deserunmollit anim id est laborum.</p>
         </div>
         <div className='py-7 grid grid-cols-3 gap-8 px-7 container mx-auto justify-between'>
           {
            chef.map(item=><ChefCard key={item.id}
               item={item}
            
            ></ChefCard>)
           }
         </div>
      </div>
   );
};

export default OurChef;