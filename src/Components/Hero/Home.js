import React from 'react';
import "./Home.css"
import hero from "../pic/hero.png"
//import { Typewriter } from 'react-simple-typewriter'

export const Home = () => {
  return (
    <>
    <section className='hero' id='home'>
      <div className='container f_flex top'>
        <div className='left top'>
          <h3>WELCOME TO MY PORTFOLIO</h3>
          <h1>
            Hi, I'm <span>Joseph Martin Garado</span>
          </h1>
          <h2>
            a <span>3rd Year College, IT Student</span>
          </h2>

          <p>I'm currently in my third year of college. I created this portfolio to showcase my programming abilities and to support my job application. Working with HTML, CSS, and Javascript is what I want to do as a front-end developer.</p>

          <div className='hero_btn d_flex'>
            <div className='col_1'>
              <h4>FIND WITH ME</h4>
              <div className='button'>
              <a href="https://www.facebook.com/josephmartin.garado" target="_blank">
                <button className='btn_shadow'>
                  <i className='fab fa-facebook-f'></i>
                </button>
              </a>

              <a href="https://www.instagram.com/martin.garado/" target="_blank">
                <button className='btn_shadow'>
                  <i className='fab fa-instagram'></i>
                </button>
              </a>

              <a href="https://www.linkedin.com/in/joseph-martin-garado-19b5a6202/" target="_blank">
                <button className='btn_shadow'>
                  <i className='fab fa-linkedin-in'></i>
                </button>
              </a>
              </div>
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='right_img'>
            <img src={hero} alt='' />
          </div>
        </div>
      </div>
    </section>
  </>
)
}
export default Home