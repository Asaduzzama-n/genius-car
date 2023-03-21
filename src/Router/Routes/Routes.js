import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Checkout from '../../Pages/CheckOut/Checkout';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login/Login';
import Orders from '../../Pages/Orders/Orders';
import Signup from '../../Pages/Signup/Signup/Signup';
import PrivateRoute from '../PrivateRoute';

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/checkout/:id',
                element:<PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`)

            },{
                path:'/orders',
                element:<PrivateRoute><Orders></Orders></PrivateRoute>
            },
        ]
    }
])

export default routes;