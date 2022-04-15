const { Router } = require("express")

const { Videogame, Genre } = require("../db")
const { apiUrl, fetch } = require("./utils")

const router = Router()

router.get("/", async (req, res) => {
    const { name } = req.query

    try {
        if (name) {
            let games = await fetch(`${apiUrl}&search=${name}`)
            let first15 = games.slice(0, 15)
            return res.send(first15)
        }

        let api = await fetch(apiUrl)
        let pg = await Videogame.findAll()

        res.send([...pg, ...api])
    } catch (error) {
        res.send(error)
    }
})

module.exports = router
