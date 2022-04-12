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

conn.sync({ force: true }).then(async () => {
    // save genres to database
    let genres

    await axios.get(apiUrl).then((res) => (genres = res.data.results))

    genres = genres.map((g) => ({
        id: g.id,
        name: g.name,
        image: g.image_background,
        count: g.games_count
    }))

    await Genre.bulkCreate(genres)

    //hardcoded game for testing
    let minecraft = await Videogame.create({
        name: "Minecraft",
        desc: "It's just Minecraft"
    })

    server.listen(3001, () => {
        console.log("Server listening on localhost:3001")
    })
})
