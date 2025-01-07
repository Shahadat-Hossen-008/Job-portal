import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Public Pages/Home pages/Home";
import Error from "../Errorpage/Error";
import Register from "../Pages/Authentication Pages/Register";
import Login from "../Pages/Authentication Pages/Login";
import JobDetails from "../Pages/Private Pages/JobDetails";
import ProtectedRoutes from "./ProtectedRoutes";
   

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
              path: 'jobs/:id',
              element: <ProtectedRoutes><JobDetails></JobDetails></ProtectedRoutes>,
              loader: ({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
              path:'login',
              element:<Login></Login>,
            }
        ]
    }
  ])
  export default router;