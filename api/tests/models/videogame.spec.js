const { Videogame, conn } = require("../../src/db.js")
const { hardcoded_1, hardcoded_2, hardcoded_3 } = require("../../utils.js")

describe("Videogame model", () => {
    const baseError = "should throw an error if"

    const dbCreateF = (game, msg, title) => {
        it(title ? title : `${baseError} ${msg}`, (done) => {
            Videogame.create(game)
                .then(() =>
                    done(new Error(`Should not create a videogame if ${msg}`))
                )
                .catch(() => done())
        })
    }

    const alterGames = (prop, values) => {
        values = [null, undefined, true, false, ...values]
        let hardcodedGames = [hardcoded_1, hardcoded_2, hardcoded_3]
        let games = []

        values.forEach((value, index) => {
            let j = (hardcodedGames.length - 1 + index) % hardcodedGames.length
            games.push({ ...hardcodedGames[j], [prop]: value })
        })

        return games
    }

    before(() =>
        conn.authenticate().catch((err) => {
            console.error("Unable to connect to the database:", err)
        })
    )

    beforeEach(() => Videogame.sync({ force: true }))

    describe("name", () => {
        alterGames("name", ["AB", 12, { name: "Name" }]).forEach((game) => {
            let msg = "name is "

            if (!game.name || typeof game.name === "boolean") msg += game.name
            else if (typeof game.name !== "string") msg += "not a string"
            else if (game.name.length < 3) msg += "shorter than 3 letters"

            dbCreateF(game, msg)
        })
    })

    describe("desc", () => {
        alterGames("desc", ["1 2 3 4 5 6 7 8 9", true, [123, 123]]).forEach(
            (game) => {
                let msg = "desc is "

                if (!game.desc || typeof game.desc === "boolean")
                    msg += game.desc
                else if (typeof game.desc !== "string") msg += "not a string"
                else if (game.desc.split(" ").length < 3)
                    msg += "shorter than 10 words"

                dbCreateF(game, msg)
            }
        )
    })

    describe("rating", () => {
        alterGames("rating", [-1, 5.1, 99999999999]).forEach((game) => {
            let title = `${baseError} rating is ${game.rating}`
            let msg = `rating is `

            if (!game.rating || typeof game.desc === "boolean")
                msg += `${game.rating}`
            else msg += game.rating < 0 ? "below 0" : "above 5"

            dbCreateF(game, msg, title)
        })
    })

    describe("platforms", () => {
        alterGames("platforms", [true, "asd", 123, []]).forEach((game) => {
            let msg = "platforms is "

            if (!game.platforms || typeof game.platforms === "boolean")
                msg += game.platforms
            else if (!Array.isArray(game.platforms)) msg += "not an Array"
            else if (!game.platforms.length) msg += "empty"

            dbCreateF(game, msg)
        })
    })

    describe("Valid game", () => {
        it("should save valid games", (done) => {
            Promise.all([
                Videogame.create(hardcoded_1),
                Videogame.create(hardcoded_2),
                Videogame.create(hardcoded_3)
            ])
                .finally(() => done())
                .catch(() => done(new Error("Error while creating videogames")))
        })
    })
})
