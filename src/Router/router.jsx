import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Public Pages/Home";
import Error from "../Errorpage/Error";
import Register from "../Pages/Authentication Pages/Register";
   

  const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'register',
                element:<Register></Register>
            }
        ]
    }
  ])
  export default router;