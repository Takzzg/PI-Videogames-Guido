const { Router } = require("express")
const { Op } = require("sequelize")

const { Videogame, Genre } = require("../db")
const { apiUrl, fetch, HTTPcodes } = require("./utils")

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
            return res.status(HTTPcodes.ok).send(games)
        }

        let api = []
        let urls = []

        for (let i = 0; i < 3; i++)
            urls.push(
                fetch(
                    `${apiUrl}&page=${
                        Math.floor(Math.random() * 50) + i + 1
                    }&page_size=40`
                ).then((r) => {
                    api.push(...r)
                })
            )
        await Promise.all(urls)

        let pg = await Videogame.findAll({ include: Genre })
        pg = pg.map((vg) => vg.dataValues)

        let games = [...pg, ...api]

        if (!games.length)
            res.status(HTTPcodes.svError).send({ error: "No games found" })

        res.status(HTTPcodes.ok).send(games)
    } catch (error) {
        res.status(HTTPcodes.svError).send({ error })
    }
})

module.exports = router
