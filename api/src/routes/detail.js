const { Router } = require("express")
const { detailUrl, fetch } = require("./utils")

const { Videogame, Genre } = require("../db")

const router = Router()

router.get("/:id", async (req, res) => {
    const { id } = req.params

    let data
    if (id.includes("-"))
        data = await Videogame.findByPk(id.toString(), { include: Genre })
    else data = await fetch(detailUrl(id))

    if (!data)
        return res.status(404).json({ error: `no game with id ${id} found` })
    res.send(data)
})

router.post("/", async (req, res) => {
    const { name, desc, rating, platforms, genres } = req.body

    try {
        const game = await Videogame.create({ name, desc, rating, platforms })
        const selectedGenres = genres.map(async (g) => await Genre.findByPk(g))
        genres && (await game.setGenres(genres))
        const db = await Videogame.findByPk(game.id, { include: Genre })
        res.send(db)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

module.exports = router
