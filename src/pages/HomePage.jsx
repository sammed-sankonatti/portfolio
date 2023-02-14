import React, { useState } from 'react'
import './homepage.css'

import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'


const HomePage = () => {


    const [title, SetTitle] = useState('< Software Developer />')

    

    useEffect(()=>{

        const sr = ScrollReveal({
            origin: 'top',
            distance: '80px',
            duration: 2000,
            reset: true
        })

        sr.reveal('.home__title',{}); 
        sr.reveal('.button',{delay: 200}); 
        sr.reveal('.home__img',{delay: 400}); 
        sr.reveal('.home__social-icon',{ interval: 200}); 
        
        },[])


  return (
    <div>
        <section className="home bd-grid" id="home">
                <div className="home__data">
                    <h1 className="home__title">Hi, <br /> I'am <span className="home__title-color">Sammed</span> <br />  {title} <br /> <span className="locaion">Silicon valley, Bangalore</span>  </h1>

                    <a href="#" className="button">Contact</a>
                </div>

                <div className="home__social">
                    <a href="https://www.linkedin.com/in/sammed-sankonatti/" target="_blank" className="home__social-icon"><i className='bx bxl-linkedin'></i></a>
                    <a target="_blank" className="home__social-icon"><i className='bx bxl-github'></i></a>
                    <a href="https://www.instagram.com/sammed.sankonatti/" target="_blank" className="home__social-icon"><i className='bx bxl-instagram' ></i></a>
                </div>

                <div className="home__img">    
                    <img src={require("../assets/images/gym-img.png")}  alt="" />
                </div>
            </section>
    </div>
  )
}

export default HomePage