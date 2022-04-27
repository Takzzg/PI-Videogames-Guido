/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai")
const session = require("supertest-session")

const app = require("../../src/app.js")
const { Videogame, conn } = require("../../src/db.js")
const { hardcoded_1, hardcoded_2, hardcoded_3 } = require("../../utils.js")

const agent = session(app)

describe.only("/videogame/:id routes", () => {
    before(() =>
        conn.authenticate().catch((err) => {
            console.error("Unable to connect to the database:", err)
        })
    )

    describe("Succesful calls", async () => {
        before(() =>
            Videogame.sync({ force: true }).then(() =>
                Promise.all([
                    Videogame.create(hardcoded_1),
                    Videogame.create(hardcoded_2),
                    Videogame.create(hardcoded_3)
                ])
            )
        )

        describe("Succesful API call", () => {
            let res
            let keys = ["id", "name", "description", "rating", "released"]

            before(async () => {
                res = await agent.get("/videogame/2139")
            })

            it("should return 200", () => {
                expect(res.status).to.eql(200)
            })

            it("should return an object", () => {
                expect(res.body).to.be.a("object")
            })

            keys.forEach((k) =>
                it(`it should have the key ${k}`, () => {
                    expect(res.body).to.have.property(k)
                })
            )
        })

        describe("Succesful DB call", () => {
            let res
            let keys = ["id", "name", "desc", "rating", "released"]

            before(async () => {
                let uuid = (
                    await Videogame.findOne({
                        where: { name: hardcoded_1.name }
                    })
                ).dataValues.id
                res = await agent.get(`/videogame/${uuid}`)
            })

            it("should return 200", () => {
                expect(res.status).to.eql(200)
            })

            it("should return an object", () => {
                expect(res.body).to.be.a("object")
            })

            keys.forEach((k) =>
                it(`it should have the key ${k}`, () => {
                    expect(res.body).to.have.property(k)
                })
            )
        })
    })
})
