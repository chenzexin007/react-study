import React from "react"
import { useParams } from "react-router-dom"
import SearchList from "./SearchList";
import SearchHeader from "./SearchHeader";

const SearchPage = () => {
  const params = useParams();

  return (
    <>
      <SearchHeader/>
      <SearchList searchKey={params.keywords}/>
    </>
  )
}

export default SearchPage;