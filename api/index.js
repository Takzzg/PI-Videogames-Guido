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
const {
    hardcoded_1,
    hardcoded_2,
    hardcoded_3,
    genres_1,
    genres_2,
    genres_3
} = require("./utils.js")
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

const hardcodedGames = async () => {
    try {
        // create videogames
        let hvg1 = await Videogame.create(hardcoded_1)
        let hvg2 = await Videogame.create(hardcoded_2)
        let hvg3 = await Videogame.create(hardcoded_3)

        // add relationships
        await hvg1.setGenres(hardcoded_1.genres)
        await hvg2.setGenres(hardcoded_2.genres)
        await hvg3.setGenres(hardcoded_3.genres)
    } catch (err) {
        console.log(err)
    }
}

conn.sync({ force: true }).then(async () => {
    // save genres to database
    await saveGenresToDB()

    //hardcoded game for testing
    await hardcodedGames()

    server.listen(3001, () => {
        console.log("Server listening on localhost:3001")
    })
})
