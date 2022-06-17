import React from 'react'
import Spline from '@splinetool/react-spline';
import "./header.scss";
import logo from "../../Assets/headerLogo.svg";
export default function Home() {
    return(
        <div className="header">
         <div className="headerleft">
            <img classname="headerLogo" src={logo}/>
         <p>About</p>   
         <p>Explore</p>   
         </div>
        </div>
    )
}