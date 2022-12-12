import React, { useState } from "react"
import {ReactComponent as SearchImg} from "./img/magnifying-glass-solid.svg"
import {ReactComponent  as CloseImg} from "./img/circle-xmark-regular.svg"
import "./search.css"

export const Search =({data}) => {
  // eslint-disable-next-line no-unused-vars
  const [text, updateText] = useState("")
  const [searchData, setSerchData] = useState(data.filter(el => el.name.toLowerCase().includes(text.toLowerCase())))
  const clearSearch = () => {
    updateText("")
    setSerchData(data)
  }
  const search = (e) => {
    updateText(e.target.value)
    let arr = searchData.filter(el => el.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setSerchData(arr)
  }
  return <div className="search_block">
            <input placeholder="Поиск..." value={text} onChange={search} />
            <button>{text ? <CloseImg onClick={clearSearch}/> : <SearchImg/>}</button>
            {text && <div className="search_result">
              По запросу <b>{text}</b>&nbsp;
                        {searchData.length > 0 ? `найдено ${searchData.length} товаров`: "не найдено ни одного товара"} 
                      </div>}
          </div>
}