import {
    SET_PAGE,
    SET_NAME,
    SET_RATING,
    SET_INCLUDED_G,
    SET_SORT
} from "./types"

export const setPage = (page) => ({ type: SET_PAGE, payload: page })

export const setName = (name) => ({ type: SET_NAME, payload: name })

export const setRating = (rating) => ({ type: SET_RATING, payload: rating })

export const setIncludedGenres = (included) => ({
    type: SET_INCLUDED_G,
    payload: included
})

export const setSort = (sort) => ({ type: SET_SORT, payload: sort })
