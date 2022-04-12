const { Router } = require("express")

const router = Router()

router.get("/", (req, res) => {
    res.send("Genres")
})

module.exports = router
