import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import styled, { css } from "styled-components"
import { theme } from "../../assets/theme"

const Checkbox = styled.span`
    padding: 1rem;

    ${(props) =>
        props.active &&
        css`
            background-color: ${theme.bg_white};
            color: black;
        `}
`

const Styled = styled.span`
    display: flex;
    flex-direction: column;
`

export const Genres = () => {
    const allGenres = useSelector((state) => state.allGenres)
    const [selected, setSelected] = useState({})

    useEffect(() => {
        let state = {}
        allGenres.forEach((genre) => (state[genre.id] = true))
        setSelected(state)
    }, [allGenres])

    const handleClick = (id) => {
        const state = { ...selected }
        state[id] = !state[id]
        setSelected(state)
    }

    const Check = ({ id, name }) => {
        return (
            <Checkbox active={selected[id]} onClick={() => handleClick(id)}>
                {name}
            </Checkbox>
        )
    }

    const toggleAllG = (value) => {
        const state = { ...selected }
        for (const id in state) state[id] = value
        setSelected(state)
    }

    return (
        <Styled>
            <span className="title">Filter by Genre</span>
            <div className="bulk">
                <button onClick={() => toggleAllG(true)}>All</button>
                <button onClick={() => toggleAllG(false)}>None</button>
            </div>

            {allGenres &&
                allGenres.map((g) => (
                    <Check key={g.id} id={g.id} name={g.name} />
                ))}
        </Styled>
    )
}
