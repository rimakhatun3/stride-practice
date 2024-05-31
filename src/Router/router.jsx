import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import AllProduct from "../Pages/Dashboard/AllProduct";
import ProductDetals from "../Pages/productDetails/ProductDetals";
import EditItem from "../Component/EditItem";
import AddProduct from "../Pages/Dashboard/AddProduct";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

 const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/registration',
                element:<SignUp/>
            },
            {
                path:'/productdetails/:id',
                element:<ProductDetals/>,
                loader:({params})=>fetch(`http://localhost:5000/shoes/${params.id}`)

            },
            
        ]
    },
    {
        path:'dashboard',
     element:<DashboardLayout></DashboardLayout>,
     children:[
        {
            path:'home',
            element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
        },
        {
            path:'allproduct',
            element:<AllProduct></AllProduct>,
            loader:()=> fetch('http://localhost:3000/shoes')
        },
        {
            path:'addproduct',
            element:<AddProduct/>
        },
        {
            path:'allproduct/edit/:id',
            element:<EditItem></EditItem>,
            loader:({params})=> fetch(`http://localhost:5000/shoes/${params.id}`)
        },


     ]
    }
])

export default router;