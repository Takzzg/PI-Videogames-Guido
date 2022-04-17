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

        let api = []
        let urls = []

        for (let i = 0; i < 3; i++)
            urls.push(
                fetch(`${apiUrl}&page=${i + 1}&page_size=40`).then((r) => {
                    api.push(...r)
                })
            )
        await Promise.all(urls).finally(() =>
            console.log("finished fetching games")
        )

        let pg = await Videogame.findAll()

        let games = [...pg, ...api].sort((a, b) => {
            if (a.name > b.name) return 1
            if (a.name < b.name) return -1
            return 0
        })

        res.send(games)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router
