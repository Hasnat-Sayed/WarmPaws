import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import MyProfile from "../pages/MyProfile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../pages/ServiceDetails";
import ForgetPass from "../pages/ForgetPass";
import ErrorPage from "../pages/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        errorElement:<ErrorPage></ErrorPage>,
        element: <RootLayout></RootLayout>,
        children:[
            {
                index: true,
                element : <Home></Home>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/myprofile',
                element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path: '/details/:id',
                element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
            },
            {
                path: '/forget/:email?',
                element: <ForgetPass></ForgetPass>
            }
            

        ]
    }
]);
export default router