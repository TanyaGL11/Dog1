import React from "react"
import { Card } from "../components/Card"

export const Catalog = ({data}) => {
  return <>
    <h1>Каталог товаров</h1>
    <div className="cards">
        {data.map((el,i) => <Card key={"card_" +i} text={el}  like ={(i+1)%2===0} />)}
  </div>
  </>
}