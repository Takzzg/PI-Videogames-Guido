/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai")
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
        it("should get 200", (done) => {
            agent
                .get("/videogames")
                .expect(200)
                .end(() => done())
        })

        it("should return an array of games", (done) => {
            agent.get("/videogames").end((err, res) => {
                if (err) return done(err)
                if (
                    !res.body ||
                    !Array.isArray(res.body) ||
                    res.body.length < 1
                )
                    return done(new Error("body was empty"))
                done()
            })
        })
    })
})
