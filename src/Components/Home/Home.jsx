import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
export default function Home() {
 let[products,setProducts] = useState([]);
async function getProducts(){
 let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
 setProducts(data.data);
 console.log(data.data);
}

useEffect(()=>{
  getProducts();
},[])


  return <>
  <div className="row">

    {products.length>0?  products.map((product)=> <div className='w-1/6 px-2'>
<img src={product.imageCover} alt="" className='w-full'/>
<h2>{product.title}</h2>
    </div>):<div class="spinner">
  <div class="rect1"></div>
  <div class="rect2"></div>
  <div class="rect3"></div>
  <div class="rect4"></div>
  <div class="rect5"></div>
</div>}
  </div>
  
  </>
}
