import React, { useState, useEffect } from "react"
import { withRouter, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { updateSearchKey } from "../../redux/actions/searchKey" 
import "./style.scss"

const SearchInput = (props) => {

  const [searchKey, setsearchKey] = useState("")
  const params = useParams()
  const reduxSearchKey = useSelector(state => state.searchKey)
  const dispatch = useDispatch()

  useEffect(() => {
    if(params.keywords){
      dispatch(updateSearchKey(params.keywords))
    }else {
      dispatch(updateSearchKey(""))
    }
    setsearchKey(reduxSearchKey)
  }, [reduxSearchKey, params.keywords]) // eslint-disable-line react-hooks/exhaustive-deps

  function changeSearch(e){
    setsearchKey(e.target.value)
  }

  function searchKeyUp(e){
    if(e.keyCode === 13 && searchKey !== ""){
      props.history.push(`/search/${searchKey}`)
      dispatch(updateSearchKey(searchKey))
    }
  }

  return (
    <input className="search-input" vlaue={searchKey} onChange={changeSearch} type="text" onKeyUp={searchKeyUp} />
  )
}

export default withRouter(SearchInput);