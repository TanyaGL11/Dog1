import React from "react"
import { Logo } from "../Logo/Logo"
import "./footer.css"

export const Footer = () => {
  const yaer = new Date().getFullYear()
  return <footer>
    <div className="n_logo">
      <Logo/>
      <br/>
      <span className="footer_copy"> ©{yaer}</span>
    </div>
    <span className='footer_text'> Сайт разбаботан   c использованием <br/>библтотеки React</span>
  </footer>
} 
