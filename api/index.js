//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
require("dotenv").config()
const axios = require("axios").default

const server = require("./src/app.js")
const { conn, Videogame, Genre } = require("./src/db.js")
const { API_BASE_URL, RAWG_KEY } = process.env

const apiUrl = `${API_BASE_URL}/genres?key=${RAWG_KEY}`

const saveGenresToDB = async () => {
    // fetch genres
    let genres = await (await axios.get(apiUrl)).data.results

    // map relevant fields
    genres = genres.map((g) => ({
        id: g.id,
        name: g.name,
        image: g.image_background,
        count: g.games_count
    }))

    // save to DB
    await Genre.bulkCreate(genres)
}

const hardcodedGame = async () => {
    // search a few genres
    let action = await Genre.findOne({ where: { name: "Action" } })
    let multiplayer = await Genre.findOne({
        where: { name: "Massively Multiplayer" }
    })
    let simulation = await Genre.findOne({ where: { name: "Simulation" } })

    // create videogame
    let minecraft = await Videogame.create({
        name: "Minecraft",
        desc: "It's just Minecraft, but on postgres",
        rating: 5
    })

    // add relationship
    await minecraft.setGenres([action, multiplayer, simulation])
}

conn.sync({ force: true }).then(async () => {
    // save genres to database
    await saveGenresToDB()

    //hardcoded game for testing
    await hardcodedGame()

    server.listen(3001, () => {
        console.log("Server listening on localhost:3001")
    })
})
