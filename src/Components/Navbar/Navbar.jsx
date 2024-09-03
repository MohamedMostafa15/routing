import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return <>
  <div className='container py-2 fixed top-0 left-0 right-0 mx-auto '>
    <ul className='flex flex-wrap justify-around items-center '>
     <li ><NavLink className='text-slate-900 text-lg font-normal ' to="">Home</NavLink></li>  
     <li ><NavLink className='text-slate-900 text-lg font-normal  ' to="abouts">Abouts</NavLink></li> 
     <li ><NavLink className='text-slate-900 text-lg font-normal' to="parent">Parent</NavLink></li> 
     <li ><NavLink className='text-slate-900 text-lg font-normal' to="gallery">Gallery</NavLink></li> 
     
    </ul>
  </div>
  
  </>
    
  
}
