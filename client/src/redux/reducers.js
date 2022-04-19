import {
    ERROR,
    FETCH_DETAIL,
    FETCH_GAMES,
    FETCH_GENRES,
    FILTER_GAMES,
    SET_INCLUDED_G,
    SET_MAX_PAGE,
    SET_NAME,
    SET_PAGE,
    SET_RATING,
    SET_SORT
} from "./actions/types"

const initialState = {
    root: {
        allGames: [],
        filteredGames: [],
        allGenres: [],
        detail: {}
    },
    sidebar: {
        name: "",
        rating: { ignore: true, value: 3, threshold: "greater" },
        includedGenres: [],
        sortParams: { prop: "released", dir: "desc" },
        pagination: { current: 0, max: 0 },
        error: undefined
    }
}

const reducers = (state = initialState, action) => {
    let newState = { ...state }

    const filterGames = () => {
        let newFilteredGames = newState.root.allGames.sort((a, b) => {
            let propA = a[newState.sidebar.sortParams.prop]
            let propB = b[newState.sidebar.sortParams.prop]

            if (propA > propB) return 1
            if (propA < propB) return -1
            return 0
        })

        if (newState.sidebar.includedGenres?.length > 0) {
            let genresMatch = []
            newFilteredGames.forEach((game) => {
                let found = false
                game.genres.forEach((genre) => {
                    if (
                        newState.sidebar.includedGenres.indexOf(genre.id) !== -1
                    ) {
                        found = true
                    }
                })
                if (found) genresMatch.push(game)
            })
            newFilteredGames = [...genresMatch]
        }

        if (!newState.sidebar.rating.ignore)
            newFilteredGames = newFilteredGames.filter((g) =>
                newState.sidebar.rating.threshold === "greater"
                    ? g.rating >= newState.sidebar.rating.value
                    : g.rating <= newState.sidebar.rating.value
            )

        if (newState.sidebar.sortParams.dir === "desc")
            newFilteredGames = newFilteredGames.reverse()

        newState.root.filteredGames = [...newFilteredGames]
        setMaxPage()
        setPage(0)
    }

    const setPage = (n) => {
        if (n < 0) n = 0
        if (n > newState.sidebar.pagination.max)
            n = newState.sidebar.pagination.max

        newState.sidebar.pagination = {
            ...newState.sidebar.pagination,
            current: n
        }
    }

    const setMaxPage = () => {
        newState.sidebar.pagination = {
            ...newState.sidebar.pagination,
            max: Math.floor(newState.root.filteredGames.length / 15)
        }
    }

    switch (action.type) {
        case FETCH_GAMES:
            newState.root.allGames = action.payload
            filterGames()
            break

        case FILTER_GAMES:
            filterGames()
            break

        case FETCH_GENRES:
            newState.root = { ...newState.root, allGenres: action.payload }
            newState.sidebar = {
                ...newState.sidebar,
                includedGenres: action.payload.map((g) => g.id)
            }
            break

        case FETCH_DETAIL:
            newState.root.detail = action.payload
            break

        case SET_NAME:
            newState.sidebar.name = action.payload
            break

        case SET_RATING:
            newState.sidebar = { ...newState.sidebar, rating: action.payload }
            filterGames()
            break

        case SET_INCLUDED_G:
            newState.sidebar.includedGenres = action.payload
            filterGames()
            break

        case SET_SORT:
            newState.sidebar = {
                ...newState.sidebar,
                sortParams: action.payload
            }
            filterGames()
            break

        case SET_PAGE:
            setPage(action.payload)
            break

        case SET_MAX_PAGE:
            setMaxPage()
            break

        case ERROR:
            newState.sidebar.error = action.payload
            break

        default:
            break
    }

    return { ...newState }
}

export { reducers }
