import React, { useState } from 'react'
import "./header.css"
import logo3 from "../pic/logo3.png"

const Header = () => {
    //scroll header at top
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        if (header !== null) {
            header.classList.toggle("active", window.scrollY > 100)
        }
    })

    const [Mobile, setMobile] = useState(false)
return (
    <>
        <header className='header'>
            <div className="container d_flex">
                <div className="logo">
                    <img src={ logo3 } alt=''/>
                </div>

                <div className="navlink">
                    <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#features">Features</a>
                        </li>
                        <li>
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="#resume">Resume</a>
                        </li>
                        <li>
                            <a href="#clients">clients</a>
                        </li>
                        <li>
                            <a href="#blog">blog</a>
                        </li>
                        <li>
                            <a href="#contact">contact</a>
                        </li>
                        <li>
                            <button className='home-btn'>Send Email</button>
                        </li>
                    </ul>

                    <button className='toggle' onClick={() => setMobile(!Mobile)}>
                        {Mobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars open'></i>}
                    </button>
                </div>  
            </div>
        </header>
    </>
)
}

export default Header