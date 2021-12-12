import { UPDATE_SEARCH } from "../constants"

export const updateSearchKey = (searchKey) => {
  return {
    type: UPDATE_SEARCH,
    searchKey: searchKey
  }
}