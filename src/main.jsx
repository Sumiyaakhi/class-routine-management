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
import Dashboard from './Layouts/Dashboard/Dashboard';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import ManageUsers from './Pages/Dashboard/ManageUsers/ManageUsers';
import OnlyUser from './Pages/Dashboard/OnlyUser/OnlyUser';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AddClass from './Pages/Dashboard/ManageRoutine/AddClass/AddClass';
import ManageRoutine from './Pages/Dashboard/ManageRoutine/ManageRoutine';
import AdminRoute from './AdminRoute/AdminRoute';


const queryClient = new QueryClient()
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
    ],
  },
  {
    path:'/dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path:"/dashboard/manageUsers",
        element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      },
      {
        path:'/dashboard/manageRoutine',
        element:<AdminRoute><ManageRoutine></ManageRoutine></AdminRoute>
      },
      {
        path:'/dashboard/onlyUser',
        element:<PrivateRoute><OnlyUser></OnlyUser></PrivateRoute>
      },
      {
        path: '/dashboard/addAClass',
        element:<AdminRoute><AddClass></AddClass></AdminRoute>
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProviders>
<QueryClientProvider client={queryClient}>
<RouterProvider router={router} />
    </QueryClientProvider>
</AuthProviders>
  </React.StrictMode>,
)
