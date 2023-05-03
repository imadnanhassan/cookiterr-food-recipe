import React from 'react';
import Herosection from '../../components/Herosection';
import Categories from '../../components/Categories';
import Newsletter from '../../components/Newsletter';

const Home = () => {
   return (
      <div>
        <Herosection></Herosection>
        <Categories></Categories>
        <Newsletter></Newsletter>
      </div>
   );
};

export default Home;