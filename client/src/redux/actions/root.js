import axios from "axios"

import {
    FETCH_GAMES,
    FETCH_DETAIL,
    FILTER_GAMES,
    FETCH_GENRES,
    ERROR
} from "./types"

const baseUrl = "http://localhost:3001"

export const fetchGames = () => (dispatch) =>
    axios
        .get(`${baseUrl}/videogames`)
        .then((res) => dispatch({ type: FETCH_GAMES, payload: res.data }))
        .catch((err) => ({ type: ERROR, payload: err }))

export const fetchGenres = () => (dispatch) =>
    axios
        .get(`${baseUrl}/genres`)
        .then((res) => dispatch({ type: FETCH_GENRES, payload: res.data }))
        .catch((err) => ({ type: ERROR, payload: err }))

export const fetchDetail = (id) => (dispatch) =>
    axios
        .get(`${baseUrl}/videogame/${id}`)
        .then((res) => dispatch({ type: FETCH_DETAIL, payload: res.data }))
        .catch((err) => ({ type: ERROR, payload: err }))

export const filterGames = () => ({
    type: FILTER_GAMES
})
