const { Router } = require("express")
const { Genre } = require("../db")
const { HTTPcodes } = require("./utils")

const router = Router()

router.get("/", (req, res) => {
    Genre.findAll()
        .then((r) => res.status(HTTPcodes.ok).send(r))
        .catch((error) => res.status(HTTPcodes.svError).send({ error }))
})

module.exports = router
