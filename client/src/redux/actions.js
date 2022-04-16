import axios from "axios"

import {
    FETCH_GAMES,
    FETCH_DETAIL,
    FILTER_GAMES,
    FETCH_GENRES,
    SET_PAGE
} from "./types"

const baseUrl = "http://localhost:3001"

export const fetchGames = () => (dispatch) =>
    axios
        .get(`${baseUrl}/videogames`)
        .then((res) => dispatch({ type: FETCH_GAMES, payload: res.data }))

export const fetchGenres = () => (dispatch) =>
    axios
        .get(`${baseUrl}/genres`)
        .then((res) => dispatch({ type: FETCH_GENRES, payload: res.data }))

export const fetchDetail = (id) => (dispatch) =>
    axios
        .get(`${baseUrl}/videogame/${id}`)
        .then((res) => dispatch({ type: FETCH_DETAIL, payload: res.data }))

export const filterGames = (name, diet, orderBy, dir) => {
    return { type: FILTER_GAMES, payload: { name, diet, orderBy, dir } }
}

export const setPage = (page) => {
    return { type: SET_PAGE, payload: page }
}