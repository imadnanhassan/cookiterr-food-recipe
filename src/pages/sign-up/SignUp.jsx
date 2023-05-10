// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provaider/AuthProvaider';

const SignUp = () => {
   const { createUser } = useContext(AuthContext)
   // const [errorAlert, setErrorAlert] = useState('');
   // const [showAlert, setShowAlert] = useState(false);
   const navigate = useNavigate();
   const handelRegister = event => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const photoURL = form.photo
      console.log(name, email, password)

      createUser(email, password, photoURL)
         .then(result => {
            const createdUser = result.user;
            navigate('/login')
         })
         .catch(error => {
            if (error.code === 'auth/user-not-found') {
               const alertMessage = 'User not found. Please check your email or sign up.';
               // Show alert UI here using your preferred UI library or custom implementation
               // For example, if you are using React:
               // setErrorAlert(alertMessage);
               // setShowAlert(true);
            } else {
               console.log(error);
            }
         })
      form.reset()
   }
   return (
      <div>
         <div className="container mx-auto">
            <div className="flex justify-center px-6 my-12">
               <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                  <div
                     className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                     style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")' }} />
                  <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                     <h3 className="pt-4 text-2xl text-center">Create an Account! </h3>

                     <form onSubmit={handelRegister}
                        className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                        <div className="mb-4">
                           <label
                              className="block mb-2 text-sm font-bold text-gray-700"
                              htmlFor="name"
                           >
                              Name
                           </label>
                           <input
                              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                              id="name"
                              placeholder="Name"
                              name="name"
                           />
                        </div>
                        <div className="mb-4">
                           <label
                              className="block mb-2 text-sm font-bold text-gray-700"
                              htmlFor="email"
                           >
                              Email
                           </label>
                           <input
                              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                              id="email"
                              type="email"
                              placeholder="Email"
                              name="email"
                           />
                        </div>

                        <div className="mb-4">
                           <label
                              className="block mb-2 text-sm font-bold text-gray-700"

                           >
                              Password
                           </label>
                           <input
                              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                              id="password"
                              placeholder="******"
                              type="password"
                              name="password"
                           />
                           <p className="text-xs italic text-red-500"> Please choose a password.</p>
                        </div>

                        <div className="mb-4">
                           <label
                              className="block mb-2 text-sm font-bold text-gray-700"

                           >
                              Photo URL
                           </label>
                           <input
                              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                              id="photo"
                              placeholder="Photo URL"
                              type="photoUrl"
                              name="photoURL"
                           />
                           
                        </div>


                        <div className="mb-6 text-center">
                           <button className="w-full px-4 py-2 font-bold text-white bg-gray-700  rounded hover:bg-gray-600 focus:outline-none focus:shadow-outline"
                              type="submit">
                              Register Account
                           </button>
                        </div>
                        <hr className="mb-6 border-t" />
                        <div className="text-center">
                           <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">Forgot Password?</a>
                        </div>
                        <div className="text-center">
                           <Link to={'/login'} className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                              Already have an account? Login!
                           </Link>
                        </div>


                     </form>

                  </div>
               </div>
            </div>
         </div>


      </div>
   );
};

export default SignUp;