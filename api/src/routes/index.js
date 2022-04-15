const { Router } = require("express")
const { default: axios } = require("axios")

const gamesRouter = require("./games")
const genresRouter = require("./genres")
const detailRouter = require("./detail")

const router = Router()

router.use("/videogames", gamesRouter)
router.use("/videogame", detailRouter)
router.use("/genres", genresRouter)

module.exports = router
