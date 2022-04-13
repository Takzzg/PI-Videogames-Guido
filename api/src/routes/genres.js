const { Router } = require("express")
const { Genre } = require("../db")

const router = Router()

router.get("/", (req, res) => {
    Genre.findAll()
        .then((r) => res.send(r))
        .catch((err) => res.send(err))
})

module.exports = router
