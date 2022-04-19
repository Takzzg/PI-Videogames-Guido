require("dotenv").config()
const { default: axios } = require("axios")

const { API_BASE_URL, RAWG_KEY } = process.env
const apiUrl = `${API_BASE_URL}/games?key=${RAWG_KEY}`
const detailUrl = (id) => `${API_BASE_URL}/games/${id}?key=${RAWG_KEY}`

const fetch = async (url) =>
    await axios.get(url).then((r) => (r.data.results ? r.data.results : r.data))

module.exports = { fetch, apiUrl, detailUrl }
