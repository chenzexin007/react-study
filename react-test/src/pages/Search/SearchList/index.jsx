import React, { useState, useEffect } from "react"
import SearchListView from "../SearchView"
import LoadMore from "../../../components/LoadMore"
import api from "../../../api"

const SearchList = (props) => {

  const [searchData, setsearchData] = useState([])

  useEffect(() => {
    httpToGetData()
  }, [props.searchKey])

  function httpToGetData(){
    api.getSearchData({ searchKey: props.searchKey }).then(res => {
      if(res.data.status === 200){
        setsearchData(searchData.concat(res.data.result.data))
      }
    })
  }

  function toLoadMore(){
    httpToGetData()
  } 

  return (
    <>
      <SearchListView searchData={searchData}/>
      <LoadMore toLoadMore={toLoadMore}/>
    </>
  )
}

export default SearchList