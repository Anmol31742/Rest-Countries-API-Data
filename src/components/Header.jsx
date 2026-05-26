import React, { useContext, useEffect, useState } from 'react'
import "./Header.css"
import { ThemeContext } from './contexts/ThemeContext'

function Header() {
 const [isDrak, setIsDark] = useContext(ThemeContext)

    useEffect(()=> {
     if(isDrak){
      document.body.classList.add('dark')
    }else{
       document.body.classList.remove('dark')
     }
    },[isDrak])
  
  return (
    <div className="header-container">
        <div className="header-content">
          <h2 className="title">
            <a href="/">Where in the world?</a>
          </h2>
          <p className="theme-changer" onClick={()=> {
            setIsDark(!isDrak)
            localStorage.setItem('data', !isDrak)
            }}>
            <i className={`fa-regular fa-${isDrak ? 'sun' : 'moon'}`} />
            &nbsp;&nbsp;{isDrak ? "Light" : "Dark"} Mode
          </p>
        </div>
    </div>
  )
}

export default Header
