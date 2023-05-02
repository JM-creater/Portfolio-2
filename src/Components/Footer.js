import React from 'react'
import f_logo from "./pic/f_logo.png"

export const Footer = () => {
  return (
    <>
        <footer className='container text-center top'>
            <div className='img'>
                <img src={ f_logo } alt='' />
            </div>
            <p>@ 2023. All rights reserved by DevMartin.</p>
        </footer>
    </>
  )
}

export default Footer