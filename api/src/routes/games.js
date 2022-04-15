const { Router } = require("express")
const axios = require("axios").default

const { Videogame, Genre } = require("../db")
const { apiUrl } = require("./utils")

const router = Router()

router.get("/", async (req, res) => {
    const { name } = req.query

    try {
        if (name) {
            let games = await axios
                .get(`${apiUrl}&search=${name}`)
                .then((r) => r.data.results)

            let first15 = games.slice(0, 15)
            return res.send(first15)
        }

        let api = await axios.get(apiUrl).then((r) => r.data.results)
        let pg = await Videogame.findAll()

        res.send([...pg, ...api])
    } catch (error) {
        res.send(error)
    }
})

module.exports = router
