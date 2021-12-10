import { INIT_CITY, CHANGE_CITY } from "../constants"

export const initCity = (city) => {
  return {
    type: INIT_CITY,
    city
  }
}

export const changeCity = (city) => {
  return {
    type: CHANGE_CITY,
    city
  }
}