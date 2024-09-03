import React from 'react'
import logo from "../../assets/react.svg";
import style from "./Abouts.module.css";
export default function Abouts() {
  return <>
  <h2 className={style.test}>About</h2>
  <h3 style={{color: 'blue'}}>About source</h3>
  <img src={logo} alt="" />
  
  </>
}
