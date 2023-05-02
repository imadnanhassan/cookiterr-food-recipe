// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import { Outlet } from 'react-router-dom';
import WelcomeLoader from '../components/WelcomeLoader';

const Main = () => {

   const [loading, setLoading] = useState(true);
   useEffect(() => {
      // Simulate a delay of 2 seconds to show the loader
      setTimeout(() => {
         setLoading(false);
      }, 2000);
   }, []);
   return (
      <>
         {loading ? (
            <WelcomeLoader />
         ) : (
            <div>
               <Header></Header>
               <Outlet></Outlet>
               <Footer></Footer>
            </div>
         )}

      </>
   );
};

export default Main;