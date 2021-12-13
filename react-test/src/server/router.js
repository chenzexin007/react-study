const express = require("express");
const router = express.Router();
const homehot = require("./data/home/homehot")
const searchData = require("./data/search")
const detailData = require("./data/details")
const url = require("url")

/**
 * 首页热门数据
 */
router.get("/home/hot1",(req,res) =>{
    const title = url.parse(req.url,true).query.title
    res.send({
        status:200,
        result:homehot.hot1,
        city:title
    })
})

router.get("/home/hot2",(req,res) =>{
    const title = url.parse(req.url,true).query.title
    // console.log(title)
    res.send({
        status:200,
        result:homehot.hot2,
        city:title
    })
})

/**
 * 搜索页数据
 */
router.get("/search", (req,res) => {
  const searchKey = url.parse(req.url, true).query.searchKey
  res.send({
    status: 200,
    result: searchData
  })
})

/**
 * 详情页数据
 */
router.get("/getDetailData", (req, res) => {
  const id = url.parse(req.url, true).query.id
  res.send({
    data: detailData
  })
})

module.exports = router;