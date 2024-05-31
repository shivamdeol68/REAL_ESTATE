import React, { useContext, useState } from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
function Navbar() {
    const {currentUser}=useContext(AuthContext)
    const [open,setOpen]=useState(false)
  return (
    <nav>
        <div className='left'>
            <a href="/" className='logo'>
                <img src="/images/construction.png" alt="" />
                <span>ReAlEsTaTe</span>
            </a>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Agents</a>
        </div>
        <div className='right'>
        {currentUser ? (<div className='user'>
                <img src={currentUser.avatar || "/images/noavatar.jpg"} alt="" />
                <span>{currentUser.name}</span>
                <Link to="/profile" className='profile'>
                <div className="notification">3</div>
                <span>Profile</span>
                </Link>
            </div>):(<><Link to="/login">Sign in</Link>
        <Link to="/register" className='signup'>Sign up</Link></>)}
        <div className="menuIcon">
            <img src="images/menu.png" alt="" onClick={()=>setOpen((prev)=>!prev)} /></div>  
            <div className={open?"menu active" : "menu"}>
        <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Agents</a>
            <a href="">Sign in</a>
        <a href="">Sign up</a>
        </div>  
        </div>
        
    </nav>
  )
}

export default Navbar