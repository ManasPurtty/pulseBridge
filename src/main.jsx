import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
 import React from 'react'
import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Layout from './Layout.jsx'
import { Import } from 'lucide-react'
import Aboutus from './Components/Aboutus/Aboutus.jsx'
 import Contactus from './Components/Contactus/Contactus.jsx'
 const  router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
    <Route path="" element={<Home />} />
    <Route path="aboutus" element={<Aboutus/>} />
    <Route path="contactus" element={<Contactus/>} />
    
    </Route>
  )
 )

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
