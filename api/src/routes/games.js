const { Router } = require("express")
const { Op } = require("sequelize")

const { Videogame, Genre } = require("../db")
const { apiUrl, fetch } = require("./utils")

const router = Router()

router.get("/", async (req, res) => {
    const { name } = req.query

    try {
        if (name) {
            let api = await fetch(`${apiUrl}&search=${name}`)
            let results = api.slice(0, 15)

            let pg = await Videogame.findAll({
                where: { name: { [Op.iLike]: name } },
                include: Genre
            })

            let games = [...pg, ...results]
            return res.send(games)
        }

        let api = []
        let urls = []

        for (let i = 0; i < 3; i++)
            urls.push(
                fetch(`${apiUrl}&page=${i + 1}&page_size=40`).then((r) => {
                    api.push(...r)
                })
            )
        await Promise.all(urls)

        let pg = await Videogame.findAll({ include: Genre })

        let games = [...pg, ...api]

        res.send(games)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router
