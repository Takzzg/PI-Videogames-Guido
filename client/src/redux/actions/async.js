import axios from "axios"

import {
    FETCH_GAMES,
    FETCH_DETAIL,
    FETCH_GENRES,
    ERROR,
    SET_GAMES,
    POST_GAME
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

export const setGames = (name) => (dispatch) =>
    axios
        .get(`${baseUrl}/videogames/?name=${name}`)
        .then((res) => dispatch({ type: SET_GAMES, payload: res.data }))
        .catch((err) => ({ type: ERROR, payload: err }))

export const postGame = (game) => (dispatch) =>
    axios
        .post(`${baseUrl}/videogame`, { ...game })
        .then((res) => dispatch({ type: POST_GAME, payload: res.data }))
        .catch((err) => ({ type: ERROR, payload: err }))
