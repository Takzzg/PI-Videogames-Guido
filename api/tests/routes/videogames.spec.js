/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai")
const session = require("supertest-session")

const app = require("../../src/app.js")
const { Videogame, conn } = require("../../src/db.js")
const { hardcoded_1, hardcoded_2, hardcoded_3 } = require("../../utils.js")

const agent = session(app)

describe("/videogames routes", () => {
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
        let response

        before(async () => {
            response = await agent.get("/videogames")
        })

        it("should return 200", () => {
            expect(response.status).to.eql(200)
        })

        it("should return an array", () => {
            expect(response.body).to.be.a("array")
        })

        it("array should not be empty", () => {
            expect(response.body).to.not.be.empty
        })

        it("should return at least 100 games", () => {
            expect(response.body).to.have.lengthOf.at.least(100)
        })
    })
})
