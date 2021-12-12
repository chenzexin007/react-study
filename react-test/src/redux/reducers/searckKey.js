import { UPDATE_SEARCH } from "../constants"

const initSearchKey = ""

const searchKey = (state = initSearchKey, action) => {
  const { searchKey, type } = action
  switch(type){
    case UPDATE_SEARCH: 
      return searchKey;
    default:
      return state
  }
}

export default searchKey