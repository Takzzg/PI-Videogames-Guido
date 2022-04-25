const { Videogame, conn } = require("../../src/db.js")
const { expect } = require("chai")
const { hardcoded_1, hardcoded_2 } = require("../../utils.js")

describe("Videogame model", () => {
    before(() =>
        conn.authenticate().catch((err) => {
            console.error("Unable to connect to the database:", err)
        })
    )

    beforeEach(() => Videogame.sync({ force: true }))

    describe("Validators", () => {
        describe("name", () => {
            it("should throw an error if name is null", (done) => {
                let nullName = { ...hardcoded_1, name: null }
                Videogame.create(nullName)
                    .then(() => done(new Error("It requires a valid name")))
                    .catch(() => done())
            })

            it("should work when its a valid name", (done) => {
                Videogame.create(hardcoded_2)
                    .then(() => done())
                    .catch(() =>
                        done(
                            new Error(
                                "Games with valid names should be created"
                            )
                        )
                    )
            })
        })
    })
})
