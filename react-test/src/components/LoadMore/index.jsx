import React, { useState, useEffect, useRef } from "react"
import "./style.scss"

const LoadMore = (props) => {

  const more = useRef()
  const [loadTop, setloadTop] = useState(10000)

  useEffect(() => {
    let clientHeight = document.documentElement.clientHeight
    let timer = null
    document.addEventListener("scroll", () => {
      if(more.current){
        setloadTop(more.current.getBoundingClientRect().top)
        
        if(timer) {
          clearTimeout(timer)
        } else {
          timer = setTimeout(() => {
            if(loadTop <= clientHeight){
              props.toLoadMore()  // 通知更新
            }
          }, 300)
        }
      }
    })
  }, [loadTop])

  return (
    <div ref={more} className="loading">加载更多...</div>
  )
}

export default LoadMore;