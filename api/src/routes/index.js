const { Router } = require("express")

const gamesRouter = require("./games")
const genresRouter = require("./genres")

const router = Router()

router.use("/games", gamesRouter)
router.use("/genres", genresRouter)

module.exports = router
