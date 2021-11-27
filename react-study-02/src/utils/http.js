import qs from 'querystring'

export function httpGet(url){
  return fetch(url)
}

export function httpPost(url, param){
  return fetch(url,{
    method: "POST",
    headers:{
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json,text/plain,*/*"
    },
    body: qs.stringify(param)
  })
}