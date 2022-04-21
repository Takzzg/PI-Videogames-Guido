import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { theme } from "../../assets/theme"

import { Genre } from "./Genre"

const BulkStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    background-color: ${theme.bg_dark};
    gap: 0.1rem;
`

export const Genres = ({ genres, bulkToggle, onClick }) => {
    const allGenres = useSelector((state) => state.root.allGenres)

    return (
        <>
            <BulkStyled className="bulk">
                <button
                    disabled={genres.length === allGenres.length}
                    onClick={() => bulkToggle(true)}
                >
                    All
                </button>
                <div className="divider" />
                <button
                    disabled={genres.length === 0}
                    onClick={() => bulkToggle(false)}
                >
                    None
                </button>
            </BulkStyled>

            {allGenres.map((g) => (
                <Genre
                    genre={g}
                    key={g.id}
                    onClick={onClick}
                    active={genres.includes(g.id)}
                />
            ))}
        </>
    )
}
