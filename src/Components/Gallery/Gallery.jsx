import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Gallery() {
  return <>
  <div className="py-6">
  <h3 className='text-2xl'>Gallery Component</h3>
  <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi incidunt, rem consequatur quod velit non itaque dicta voluptas accusantium asperiores.</p> 
  <div className="row">
    <div className="w-1/4">
    <ul>
        <li><Link to=''>Web</Link></li>
        <li><Link to='mobile'>Mobile</Link></li>
        <li><Link to='ux'>Ux</Link></li>


    </ul>
    </div>
    <div className="w-3/4">
    <Outlet></Outlet>
    </div>
  </div>
  
  
  </div>
  
  
  </>
}
