import { FETCH_GAMES, FILTER_GAMES, FETCH_DETAIL, SET_PAGE } from "./types"

const initialState = {
    allGames: [],
    filteredGames: [],
    detail: {},
    page: 0
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GAMES:
            return {
                ...state,
                allGames: [...state.allGames, ...action.payload]
            }

        case FETCH_DETAIL:
            return { ...state, detail: action.payload }

        case FILTER_GAMES:
            return { ...state, filteredGames: action.payload }

        case SET_PAGE:
            let n = action.payload

            if (n < 0) n = 0
            if (n > state.allGames.length / 15) n = state.allGames.length / 15

            return { ...state, page: n }

        default:
            return state
    }
}
