import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layouts/Main/Main';
import Home from './Pages/Home/Home/Home';
import Routine from './Pages/Routine/Routine';
import Login from './Pages/Login/Login';
import AuthProviders from './Pages/Providers/AuthProviders';
import Registration from './Pages/Registration/Registration';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/routine',
        element:<Routine></Routine>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/registration',
        element:<Registration></Registration>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProviders>
<RouterProvider router={router} />
</AuthProviders>
  </React.StrictMode>,
)
