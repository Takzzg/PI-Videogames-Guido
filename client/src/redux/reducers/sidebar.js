import {
    SET_PAGE,
    SET_NAME,
    SET_RATING,
    SET_EXCLUDED_G,
    SET_SORT,
    SET_MAX_PAGE,
    ERROR
} from "../actions/types"

const initialState = {
    name: "",
    rating: { ignore: true, value: 3, threshold: "greater" },
    excludedGenres: [],
    sortParams: { prop: "name", dir: "asc" },
    pagination: { current: 0, max: 0 },
    error: undefined
}

export const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PAGE:
            let n = action.payload

            if (n < 0) n = 0
            if (n > state.pagination.max) n = state.pagination.max

            return { ...state, pagination: { ...state.pagination, current: n } }

        case SET_NAME:
            return { ...state, name: action.payload }

        case SET_RATING:
            return { ...state, rating: action.payload }

        case SET_EXCLUDED_G:
            return { ...state, excludedGenres: action.payload }

        case SET_SORT:
            return { ...state, sortParams: action.payload }

        case SET_MAX_PAGE:
            return {
                ...state,
                pagination: { ...state.pagination, max: action.payload }
            }

        case ERROR:
            return { ...state, error: action.payload }

        default:
            return state
    }
}
