import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from "./Components/Home.jsx"
import AddTask from './Components/AddTask.jsx'
import DeleteTask from "./Components/DeleteTask"
import ViewTask from "./Components/ViewTask"
import UpdateTask from "./Components/UpdateTask"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  
  {
    path:'/AddTask',
    element: <AddTask/>
  
  },
  {
    path:'/DeleteTask',
    element: <DeleteTask/>
  
  },
  {
    path:'/ViewTask',
    element: <ViewTask/>
  
  },
  {
    path:'/UpdateTask',
    element: <UpdateTask/>
  
  }
  ]
  )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} >
    
    <App />
    </RouterProvider>
    
  </React.StrictMode>,
)
