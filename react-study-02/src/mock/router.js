const express = require("express")
const router = express.Router()

router.get("/api/list", (req,res) => {
  res.send([
    {
      name: '66',
      age: 11
    },
    {
      name: '77',
      age: 22
    },
  ])
})

module.exports = router