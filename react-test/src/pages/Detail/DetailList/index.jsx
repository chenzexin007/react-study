import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import DetailView from "../DetailView";
import api from "../../../api";

const DetailList = () => {
  const param = useParams()
  const [searchData, setsearchData] = useState(null)
  useEffect(() => {
    api.getDetailData({ id: param.id }).then(res => {
      setsearchData(res.data.data)
    })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    searchData ?  <DetailView searchData={searchData}/>
    : <div>数据加载中</div>
  )
}

export default DetailList;