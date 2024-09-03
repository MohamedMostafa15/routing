import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Abouts from './Components/Abouts/Abouts'
import Parent from './Components/Parent/Parent'
import Notfound from './Components/Notfound/Notfound'
import Gallery from './Components/Gallery/Gallery'
import Web from './Components/Web/Web'
import Mobile from './Components/Mobile/Mobile'
import Ux from './Components/Ux/Ux'

let routers = createBrowserRouter([
  {path:'/' , element: <Layout/> , children:[
  {index:true , element: <Home/>},
  {path:'abouts' , element: <Abouts/>},
  {path:'parent' , element: <Parent/>},
  {path:'gallery' , element: <Gallery/> , children:[
    {index:true , element: <Web/>},
    {path:'mobile' , element: <Mobile/>},
    {path:'ux' , element: <Ux/>}
  ]},
  {path:'*' , element: <Notfound/>}
  


  ]}
])
function App() {
  

  return  <>
      <RouterProvider router={routers}/>
    </>
  
}

export default App
