import React from 'react';
import './Nav.css';
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiBriefcase } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState, useEffect } from 'react';


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');

  useEffect(() => {
  
    if (window.location.hash !== '#home') {
      window.location.hash = '#home'; 
      setActiveNav('#home'); 
    }
  }, []);

  return (
    <nav>
      <a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')}  className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')}  className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#services" onClick={()=> setActiveNav('#services')}  className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')}  className={activeNav === '#portfolio' ? 'active' : ''}><BiBriefcase /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')}  className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav
