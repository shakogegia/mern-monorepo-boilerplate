const express = require("express")

const router = express.Router()
const common = require("@workspace/constants")

/* GET home page. */
router.get("/", function(req, res) {
  res.render("index", { title: "Express", common })
})

module.exports = router
