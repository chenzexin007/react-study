import { ADD_PERSON } from "../constant";

export const createActionsPerson = (personObject) => {
  return { type:ADD_PERSON, data: personObject  }
}