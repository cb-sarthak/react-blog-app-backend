import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'

function Bollywood(){
    return(
        <>
        <BrowserRouter>
        <div className="three">
        <NavLink to="/home" style={{color:"black"}} exact>Home</NavLink>
        <NavLink to="/bollywood"  style={{color:"black"}} exact>Bollywood</NavLink>
        <NavLink to="/technology"  style={{color:"black"}}>Technology</NavLink>
        <NavLink to="/hollywood"  style={{color:"black"}}>Hollywood</NavLink>
        <NavLink to="/fitness"  style={{color:"black"}}>Fitness</NavLink>
        <NavLink to="/food"  style={{color:"black"}}>Food</NavLink>
        </div>
        </BrowserRouter>
        <h1>bjg</h1>
        </>
    )
}
export default Bollywood;