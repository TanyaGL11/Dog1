import React, { useState } from "react"
import {useForm} from 'react-hook-form'

export const Login = ({change, api, close, setToken}) => {
  const [inp1, setInp1] = useState("")
  const [inp2, setInp2] = useState("")
  const sendForm = (e) =>{
    e.preventDefault()
    const body ={
      email: inp1,
      password: inp2
    }
    // console.log(body)
    api.signIn(body)
            .then(res => res.json())
            .then(data => {
                // Cообщение с ошибкой
                localStorage.setItem("user8", data.data.name)
                localStorage.setItem("token8", data.token)
                setToken(data.token)
                console.log(data)
                setInp1("")
                setInp2("")
                close(false)
            })
  }
  return (
    <form onSubmit={sendForm}>
      <input
        placeholder="Введите вашу почту"
        type="email"
        value={inp1}
        required
        onChange={(e) => {
          setInp1(e.target.value)
        }}
      />
      <input
        placeholder="Пароль"
        type="password"
        value={inp2}
        onChange={(e) => {
          setInp2(e.target.value)
        }}
      />
      <button className="btn" type="submint" >Войти</button>
      <button className="btn link" type="button" onClick={() => {change(prev => !prev)}}>
        Зарегистрироваться
      </button>
    </form>
  )
}
