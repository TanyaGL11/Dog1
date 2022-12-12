import React, { useState } from "react"
import {useForm} from 'react-hook-form'
import { Api } from "../../Api"

export const Signup = ({change, api, close}) => {
  const [inp1, setInp1] = useState("")
  const [inp2, setInp2] = useState("")
  const [inp3, setInp3] = useState("")
  const [testPwd, setTestPwd] = useState(false)
  function checkPwd(val, type = "main") {
    type === "main" ? setInp2(val) : setInp3(val)
    if (val) {
      if (type === "main") {
        setTestPwd(val !== inp3)
      } else {
        setTestPwd(val !== inp2)
      }
    }
  }
  const sendForm = (e) =>{
    e.preventDefault()
    const body ={
      email: inp1,
      password: inp2
    }
   //console.log(body)
   api.signUp(body)
        .then(res => res.json())
        .then(data =>{console.log(data)
        if (!data.err){
          api.signIn(body)
              .then(res => res.json())
              .then(data => {
                localStorage.setItem("user8", data.data.name)
                localStorage.setItem("token8", data.token)
                setToken(data.token)
              })
          setInp1("")
          setInp2("")
          setInp3("")
          close(false)
        } else { 
            alert(data.message)
            // Уведомление с ошибкой
        }
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
          checkPwd(e.target.value)
        }}
      />
      <input
        placeholder="Поворите пароль"
        type="password"
        value={inp3}
        onChange={(e) => {
          checkPwd(e.target.value, "secondary")
        }}
      />
      <button className="btn" type="submint" disabled={testPwd}>
        Зарегистрироваться
      </button>
      <button className="btn link" type="button" onClick={() => {change(prev => !prev)}}>
        Войти
      </button>
    </form>
  )
}
