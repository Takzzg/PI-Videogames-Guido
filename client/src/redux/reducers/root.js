import {
    FETCH_DETAIL,
    FETCH_GAMES,
    FETCH_GENRES,
    FILTER_GAMES
} from "../actions/types"

const initialState = {
    allGames: [],
    allGenres: [],
    detail: {}
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GAMES:
            return {
                ...state,
                allGames: [...state.allGames, ...action.payload]
            }

        case FILTER_GAMES:
            return { ...state, allGames: action.payload }

        case FETCH_GENRES:
            return { ...state, allGenres: action.payload }

        case FETCH_DETAIL:
            return { ...state, detail: action.payload }

        default:
            return state
    }
}
