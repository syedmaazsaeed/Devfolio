import React from 'react';
import './Experience.css';
import { BsFillPatchCheckFill } from "react-icons/bs";
 


const Experience = () => {
  return (
    <section id='experience'>
      
      <h5>What Skills I Have</h5>
      <h2>My Work Experience</h2>

      <div className="container experience__container">
        {/* FrontEnd Skills  */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsFillPatchCheckFill />
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill />
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill />
            <h4>JavaScript</h4>
            <small className='text-light'>Expert</small>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill />
            <h4>Bootstrap</h4>
            <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill />
            <h4>Tailwind</h4>
            <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill />
            <h4>React</h4>
            <small className='text-light'>Experienced</small>
            </article>
          </div>

          
        </div>
        {/* Backend Skills  */}
        <div className="experience__backend">
        <h3>Backend Development</h3>
         
        <div className="experience__content">
            <article className='experience__details'>
            <BsFillPatchCheckFill />
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill />
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill />
            <h4>JavaScript</h4>
            <small className='text-light'>Expert</small>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill />
            <h4>Bootstrap</h4>
            <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill />
            <h4>Tailwind</h4>
            <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill />
            <h4>React</h4>
            <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
