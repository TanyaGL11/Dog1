import React from "react"
import "./index.css"

export const Card = ({text, like}) =>{
  const discountPrice = Math.round(text.price - (text.price / 100 * text.discount))
  return <div className="card">
    <div>
       <span className="sticky sticky_type_top_left">
          {text.discount > 0 && (<span className="discount">
          {text.discount} % </span>)}
         </span> 
         <a href="/product" className="link">
        <img src={text.pictures} alt={text.description} className="image" />
        <div className="desc">
          {text.discount > 0 && (
            <span className="old_price price_type_discount">
              { text.price }
              {' '}
              P
            </span>
          )}
          <div>
            <span className={text.discount > 0 ? "price price_type_discount" : "price"}>
              { discountPrice }
              {' '}
              P
            </span>
          </div>
          <div>
            <span className="wight">{ text.wight }</span>
          </div>
          <p className="name">{ text.name }</p>
         {/* { text.description }*/}
        </div>
      </a> 
    </div>
    <span className="card_heart">
      { like 
        ? <i className="fa-solid fa-heart"></i>
        : <i className="fa-regular fa-heart"></i>
      }
    </span>
  </div>
}  