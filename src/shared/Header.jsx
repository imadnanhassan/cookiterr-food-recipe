import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/food hub logo.png'
import { AuthContext } from '../provaider/AuthProvaider';

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };



   const {user} = useContext(AuthContext)
   return (
      <>


         <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="flex items-center justify-between h-20">
                  <div className="flex-shrink-0">
                     <Link to={'/'}><img className="h-8 w-auto" src={Logo} alt="Logo" /></Link>
                  </div>
                  <div className="hidden md:block ">
                     <div className="ml-10 flex items-baseline space-x-4 font-Secondary">
                        <Link to={'/'} className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900">Home</Link>
                        <Link to={'/'} className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900">Recipes</Link>
                        <Link to={'/contact'} className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900">Contact</Link>
                        <Link to={'/blog'} className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900">Blog</Link>
                     </div>
                  </div>


                  <div>
                  <Link to={'/blog'} className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900">{user.displayName}</Link>
                     <Link to={'/login'}
                        className="relative px-5 py-1 overflow-hidden font-Secondary font-medium text-gray-600 bg-gray-100 border border-gray-100  shadow-inner group"
                     >
                        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease" />
                        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease" />
                        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease" />
                        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease" />
                        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100" />
                        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                           Login
                        </span>
                     </Link>

                  </div>

                  <div className="md:hidden">
                     <button onClick={toggleMenu} className="hamburger-menu-btn ">
                        <span className="sr-only ">Open menu</span>
                        
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                           <path d="M3 12h18"></path>
                           <path d="M3 6h18"></path>
                           <path d="M3 18h18"></path>
                        </svg>
                     </button>
                  </div>
               </div>
            </div>
            <div className={`md:hidden  ${isOpen ? "block" : "hidden"}`}>
               <div className="px-2 pt-2 pb-3 space-y-1 ">
                  <Link to={'/'} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</Link >

                  <Link to={'/'} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Recipes</Link >

                  <Link to={'/contact'} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contact</Link >

                  <Link to={'/blog'} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Blog</Link >


               </div>

            </div>


         </nav>
      </>
   );
};

export default Header;