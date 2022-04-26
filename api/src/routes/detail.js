const { Router } = require("express")
const { detailUrl, fetch, HTTPcodes } = require("./utils")

const { Videogame, Genre } = require("../db")

const router = Router()

router.get("/:id", async (req, res) => {
    const { id } = req.params

    let data
    if (id.includes("-"))
        data = await Videogame.findByPk(id.toString(), { include: Genre })
    else data = await fetch(detailUrl(id))

    if (!data)
        return res
            .status(HTTPcodes.notFound)
            .json({ error: `no game with id ${id} found` })

    res.status(HTTPcodes.ok).send(data)
})

router.post("/", async (req, res) => {
    const { name, desc, rating, platforms, genres } = req.body

    if (!name || !desc || !platforms || !genres)
        res.status(HTTPcodes.badRequest).send({
            error: "Missing information to post the game"
        })

    try {
        const game = await Videogame.create({ name, desc, rating, platforms })
        await game.setGenres(genres)
        const db = await Videogame.findByPk(game.id, { include: Genre })
        res.status(HTTPcodes.created).send(db)
    } catch (error) {
        console.log(error)
        res.status(HTTPcodes.svError).send({ error })
    }
})

module.exports = router
