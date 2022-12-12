import React from "react"
import { Card } from "../components/Card"
import "./home.css"

export const Home = ({data}) => {
  return <>
    <h2 className="home">Наше путушествие начинается с авторизации!</h2>
    <div className="cards home_img" >
         {/*{data.map((el,i) => <Card key={"card_" +i} text={el} like ={(i+1)%2===0} />)
       <img className="home_img" src='./../../assets/maxresdefault.jpg'/>*/}
    </div>
  </>
}