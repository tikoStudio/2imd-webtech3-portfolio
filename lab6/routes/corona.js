const express = require('express')
const router = express.Router()
const coronaController = require("../controllers/corona")


router.get("/", coronaController.getAll)

router.put("/updatestats/:country", coronaController.updates)

module.exports = router