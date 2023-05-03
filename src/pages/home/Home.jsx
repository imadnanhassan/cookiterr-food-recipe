import React from 'react';
import Herosection from '../../components/Herosection';
import Categories from '../../components/Categories';
import Newsletter from '../../components/Newsletter';
import OurChef from '../../components/OurChef';

const Home = () => {
   return (
      <div>
         <Herosection></Herosection>
         <Categories></Categories>
         <Newsletter></Newsletter>
         <OurChef></OurChef>
      </div>
   );
};

export default Home;