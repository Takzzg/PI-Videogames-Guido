/* eslint-disable import/no-extraneous-dependencies */
const session = require("supertest-session")

const app = require("../../src/app.js")
const { Videogame, conn } = require("../../src/db.js")
const { hardcoded_1, hardcoded_2, hardcoded_3 } = require("../../utils.js")

const agent = session(app)

describe.only("Videogame routes", () => {
    before(() =>
        conn.authenticate().catch((err) => {
            console.error("Unable to connect to the database:", err)
        })
    )

    beforeEach(() =>
        Videogame.sync({ force: true }).then(() =>
            Promise.all([
                Videogame.create(hardcoded_1),
                Videogame.create(hardcoded_2),
                Videogame.create(hardcoded_3)
            ])
        )
    )

    describe("GET /videogames", () => {
        it("should return 200", () => agent.get("/videogames").expect(200))

        it("should return an array of games", (done) => {
            agent.get("/videogames").end((err, res) => {
                if (err) done(err)
                if (
                    !res.body ||
                    !Array.isArray(res.body) ||
                    res.body.length < 1
                )
                    done(new Error("body was empty"))
                done()
            })
        })
    })
})
