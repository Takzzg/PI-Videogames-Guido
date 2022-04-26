const { Videogame, conn } = require("../../src/db.js")
const { hardcoded_1, hardcoded_2, hardcoded_3 } = require("../../utils.js")

describe.only("Videogame model", () => {
    const baseError = "should throw an error if"

    const dbCreateF = (game, msg) => {
        it(msg, (done) => {
            Videogame.create(game)
                .then(() =>
                    done(new Error(`Should not create a videogame if ${msg}`))
                )
                .catch(() => done())
        })
    }

    const alterGames = (prop, values) => {
        values = [null, undefined, true, false, NaN, ...values]
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

    describe(`${baseError} name is`, () => {
        const badInputs = ["AB", 12, { name: "Name" }, [], `${`\b\n`}`]

        alterGames("name", badInputs).forEach((game) => {
            let msg = ""

            if (game.name === "") msg += "empty string"
            else if (!game.name || typeof game.name === "boolean")
                msg += game.name
            else if (typeof game.name !== "string") msg += "not a string"
            else if (game.name.length < 3) msg += "shorter than 3 letters"

            dbCreateF(game, msg)
        })
    })

    describe(`${baseError} desc is`, () => {
        const badInputs = ["1 2 3 4 5 6 7 8 9", [123, 123]]

        alterGames("desc", badInputs).forEach((game) => {
            let msg = ""

            if (game.desc === "") msg += "empty string"
            else if (!game.desc || typeof game.desc === "boolean")
                msg += game.desc
            else if (typeof game.desc !== "string") msg += "not a string"
            else if (game.desc.split(" ").length < 10)
                msg += "shorter than 10 words"

            dbCreateF(game, msg)
        })
    })

    describe(`${baseError} rating is`, () => {
        const badInputs = [-1, 5.1, Math.pow(Math.E, 2), -Math.PI]

        alterGames("rating", badInputs).forEach((game) => {
            let msg = ""

            if (isNaN(game.rating)) msg += "NaN"
            else msg += game.rating

            dbCreateF(game, msg)
        })
    })

    describe(`${baseError} platforms is`, () => {
        const badInputs = ["asd", 123, []]

        alterGames("platforms", badInputs).forEach((game) => {
            let msg = ""

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
