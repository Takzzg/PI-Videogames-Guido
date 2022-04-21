import React from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"

import { setIncludedGenres } from "../../redux/actions/sync"
import { Genres } from "./Genres"

const Styled = styled.span`
    display: flex;
    flex-direction: column;
`

export const GenresFilter = () => {
    const allGenres = useSelector((state) => state.root.allGenres)
    const included = useSelector((state) => state.sidebar.includedGenres)
    const dispatch = useDispatch()

    const toggleGenre = (e) => {
        let id = parseInt(e.target.id)
        let newIncluded = [...included]

        if (newIncluded.includes(id))
            newIncluded = newIncluded.filter((e) => e !== id)
        else newIncluded.push(id)

        dispatch(setIncludedGenres(newIncluded))
    }

    const toggleAllG = (value) => {
        if (!value) return dispatch(setIncludedGenres([]))
        const newIncluded = allGenres.map((g) => g.id)
        dispatch(setIncludedGenres(newIncluded))
    }

    return (
        <Styled>
            <span className="title">Filter by Genre</span>
            <Genres
                genres={included}
                bulkToggle={toggleAllG}
                onClick={toggleGenre}
            />
        </Styled>
    )
}
