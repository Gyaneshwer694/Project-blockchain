const express = require("express")
const router = express.Router()
const blockchainController = require("../controllers/blockchainController")

router.get("/test me", function (req,res){
          res.send("Test Api !")
})

router.get("/v2/assets", blockchainController.getAssets)



module.exports = router