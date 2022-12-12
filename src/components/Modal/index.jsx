import React, { useState } from "react"
import { Login } from "./Login"
import { Signup } from "./Signup"
import "./style.css"

export const Modal = ({isActive, setState, api, setToken}) => {
  const [auts, setAuts] = useState(true)
  let style = {
    display: isActive && "flex", 
    // display: isActive ? "flex" : "none"

  }
  return <div className="modal_container" style={style}>
    <div className="modal">
      <div className="modal_close" onClick={() => setState(false)}/>
      <h2>{auts ? "Войти": "Зарегистрироваться"}</h2>
      {auts ? 
      <Login change={setAuts} api={api} close={setState} setToken={setToken}/> 
      : 
      <Signup change={setAuts} api={api} close={setState} setToken={setToken}/>
        }
      </div>
    </div>
}