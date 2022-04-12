require("dotenv").config()
const { Router } = require("express")
const axios = require("axios").default

const { Videogame, Genre } = require("../db")
const { API_BASE_URL, RAWG_KEY } = process.env

const router = Router()
const apiUrl = `${API_BASE_URL}/games?key=${RAWG_KEY}`

router.get("/", async (req, res) => {
    const { name } = req.query
    console.log(name)

    if (name) return res.send(name)

    try {
        let api

        await axios
            .get(apiUrl)
            .then((response) => (api = response.data.results))

        let pg = await Videogame.findAll()

        res.send([...pg, ...api])
    } catch (error) {
        res.send(error)
    }
})

module.exports = router
