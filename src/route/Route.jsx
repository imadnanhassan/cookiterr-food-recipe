import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
import SignIn from "../pages/sign-in/SignIn";
import SignUp from "../pages/sign-up/SignUp";
import NotFound from "../pages/notfound/NotFound";
import ChefDEtails from "../pages/chefDetails/ChefDEtails";
import PrivateRoute from "./PrivateRoute";

// eslint-disable-next-line no-unused-vars
const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/blog',
            element: <Blog></Blog>
         },
         {
            path: '/contact',
            element: <Contact></Contact>
         },
         {
            path: '/login',
            element: <SignIn></SignIn>
         },
         {
            path: '/register',
            element: <SignUp></SignUp>
         },
         {
            path: '/our-chef/:id',
            element: <PrivateRoute><ChefDEtails></ChefDEtails></PrivateRoute>,
            loader: ({params}) => fetch(`https://cookiteer-server-dev-abulhassan.vercel.app/our-chef/${params.id}`)
            
         },
         
      ]
   },
   {
      path:'*',
      element: <NotFound></NotFound>
   }
])

export default router