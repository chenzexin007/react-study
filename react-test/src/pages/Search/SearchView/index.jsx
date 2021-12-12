import React from "react"
import Item from "./Item"

const SearchListView = (props) => {

  return (
    props.searchData.length > 0 ? props.searchData.map((ele,index) => {
      return (
        <Item data={ele} key={index}/>
      )
    })
    : <div>数据加载中......</div>
  )
}

export default SearchListView