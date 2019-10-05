const express = require("express")

const router = express.Router()
const common = require("@workspace/constants")

router.get("/", function(req, res) {
  res.render("index", { title: "Express BREACKING", common })
})

module.exports = router
