const { Router } = require("express")
const { detailUrl, fetch } = require("./utils")

const { Videogame } = require("../db")

const router = Router()

router.get("/:id", async (req, res) => {
    const { id } = req.params

    let data
    if (id.includes("-")) data = await Videogame.findByPk(id.toString())
    else data = await fetch(detailUrl(id))

    if (!data)
        return res.status(404).json({ error: `no game with id ${id} found` })
    res.send(data)
})

module.exports = router
