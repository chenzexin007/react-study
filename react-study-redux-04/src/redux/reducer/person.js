import { ADD_PERSON } from "../constant";
const initState = [ { id: "001", name: "lilei", age: 18 } ]

export default function personReducer(preState = initState, action){
  console.log(preState)
  const { type, data } = action
  switch(type){
    case ADD_PERSON:
      return [ data, ...preState ]
    default:
      return preState
  }
} 