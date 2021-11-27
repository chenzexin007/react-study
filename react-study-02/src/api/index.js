import { httpGet, httpPost } from "../utils/http.js"
import { base } from "./base"

export function getIndexMovement(){
  return httpGet(base.wonUrl + "/blueberrypai/getIndexMovement.php")
}

export function login(param){
  return httpPost(base.wonUrl + "/blueberrypai/login.php", param)
}