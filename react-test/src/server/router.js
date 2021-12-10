const express = require("express");
const router = express.Router();
const homehot = require("./data/home/homehot")
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


module.exports = router;