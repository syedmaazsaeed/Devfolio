import React from 'react';
import './Header.css';
import CTA from './CTA';
import ME from '../../assets/me2.png';
import HeaderSocials from './HeaderSocials';


const Header = () => {
  return (
    <section id='home'>

    
    <header>

      <div className="container header__container"  data-aos="fade-down">
     <h5>Hello I'm </h5>
     <h1>Syed Maaz Saeed</h1>
     <h5 className="text-light">MERN Stack Developer | Software Developer | Front End Developer</h5>
     <CTA />
     <HeaderSocials />
     <div className="me">
      <img src={ME} alt="me" />
     </div>

     <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
    </section>

  )
}

export default Header


