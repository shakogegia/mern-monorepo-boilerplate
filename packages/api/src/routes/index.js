import constants from "@workspace/constants"
import express from "express"

const router = express.Router()

router.get("/", function(req, res) {
  res.render("index", { title: "Express BREACKING", constants })
})

module.exports = router
