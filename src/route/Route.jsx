import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
import SignIn from "../pages/sign-in/SignIn";

// eslint-disable-next-line no-unused-vars
const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      children:[
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path:'/blog',
            element: <Blog></Blog>
         },
         {
            path:'/contact',
            element: <Contact></Contact>
         },
         {
            path: '/login',
            element: <SignIn></SignIn>
         }
      ]
   }
])

export default router