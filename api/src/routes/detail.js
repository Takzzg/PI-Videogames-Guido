const { Router } = require("express")
const { fetch, apiUrl } = require("./utils")

const { Videogame } = require("../db")

const router = Router()

router.get("/:id", async (req, res) => {
    const { id } = req.params

    let data
    if (id.includes("-")) data = await Videogame.findByPk(id.toString())
    else {
        data = await fetch(apiUrl)
        data = data.find((g) => g.id.toString() === id.toString())
    }
    // console.log(data)

    if (!data)
        return res.status(404).json({ error: `no game with id ${id} found` })
    res.send(data)
})

router.post("/", async (req, res) => {
    const { name, desc, rating, genres } = req.body

    const game = await Videogame.create({ name, desc, rating })
    genres && game.setGenres(genres)

    res.send(game)
})

module.exports = router
