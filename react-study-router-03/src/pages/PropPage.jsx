import querystring from 'querystring'
export default function PropPage(props){
  console.log(props.location.search)
  // 第一种
  let query = new URLSearchParams(props.location.search)
  console.log(query.get("id"))
  // 第二种
  let value = querystring.parse(props.location.search)
  console.log(value)
  return (
    <div>
      {props.name} -- { query.get("id") }
    </div>
  )
}