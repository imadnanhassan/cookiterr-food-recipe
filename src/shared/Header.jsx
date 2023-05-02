import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/food hub logo.png'

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <>
         <div >
            <div onClick={() => setIsOpen(!isOpen)} className='md:hidden mr-2'>
               <span> {isOpen ? 'X' : "I"}</span>
            </div>

            <div className={` bg-slate-600 z-10 shadow-sm  mx-auto md:flex absolute duration-500  md:static px-16 justify-between items-center py-4 ${isOpen ? 'left-0' : '-left-96'} `}>
               <Link to='/'><img className='w-40' src={Logo} alt="" /></Link>
               <div >
                  <nav className='md:flex font-Primary gap-8 font-medium text-base  text-white'>
                     <p><Link to={'/'}>Home</Link></p>
                     <p><Link to={'/'}>Recipes</Link></p>
                     <p><Link to={'/contact'}>Contact Us</Link></p>
                     <p><Link to={'/blog'}>Blog</Link></p>
                  </nav>
               </div>

               <div>
                  <Link to={'/login'}
                     className="relative px-5 py-3 overflow-hidden font-Primary font-medium text-gray-600 bg-gray-100 border border-gray-100  shadow-inner group"
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

            </div>
         </div>

      </>
   );
};

export default Header;