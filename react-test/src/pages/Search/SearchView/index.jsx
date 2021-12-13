import React from "react"
import Item from "./Item"
import { Link } from "react-router-dom"

const SearchListView = (props) => {

  return (
    props.searchData.length > 0 ? props.searchData.map((ele,index) => {
      return (
        <Link key={index} to={`/detail/${ele.id}`}>
          <Item data={ele}/>
        </Link> 
      )
    })
    : <div>数据加载中......</div>
  )
}

export default SearchListView