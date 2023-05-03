/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';


const SignIn = () => {
   return (
      <div className='py-20'>
         <div className="py-6">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
               <div
                  className="hidden lg:block lg:w-1/2 bg-cover"
                  style={{
                     backgroundImage:
                        'url("https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80")'
                  }}
               />
               <div className="w-full p-8 lg:w-1/2">
                  <h2 className="text-2xl font-semibold  text-gray-700 text-center">
                     Food Hub
                  </h2>
                  <p className="text-xl text-gray-600 text-center">Welcome back!</p>
                  <a href="#" className="flex items-center justify-center mt-4 rounded-lg shadow-md hover:bg-gray-100"
                  >
                     <div className="px-4 py-3">

                     </div>
                     <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
                     <FcGoogle className='text-lg inline mr-4'/> Sign in with Google
                     </h1>
                     
                  </a>
                  <a href="#" className="flex items-center justify-center mt-4 rounded-lg shadow-md hover:bg-gray-100" >
                     <div className="px-4 py-3">

                     </div>
                     <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
                       <FaGithub className='text-lg inline mr-4'></FaGithub> Sign in with Github
                     </h1>
                     
                  </a>
                  <div className="mt-4 flex items-center justify-between">
                     <span className="border-b w-1/5 lg:w-1/4" />
                     <a href="#" className="text-xs text-center text-gray-500 uppercase">
                        or login with email
                     </a>
                     <span className="border-b w-1/5 lg:w-1/4" />
                  </div>
                  <div className="mt-4">
                     <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email Address
                     </label>
                     <input
                        className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                        type="email"
                     />
                  </div>
                  <div className="mt-4">
                     <div className="flex justify-between">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                           Password
                        </label>
                        <a href="#" className="text-xs text-gray-500">
                           Forget Password?
                        </a>
                     </div>
                     <input
                        className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                        type="password"
                     />
                  </div>
                  <div className="mt-8">
                     <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
                        Login
                     </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                     <span className="border-b w-1/5 md:w-1/4" />
                     <Link to={'/register'} className="text-xs text-gray-500 uppercase">
                        or sign up
                     </Link>
                     <span className="border-b w-1/5 md:w-1/4" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SignIn;