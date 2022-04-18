import React from "react"
import { useDispatch, useSelector } from "react-redux"
import styled, { css } from "styled-components"
import { theme } from "../../assets/theme"
import { setExcludedGenres } from "../../redux/actions/sidebar"

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
    const allGenres = useSelector((state) => state.root.allGenres)
    const excluded = useSelector((state) => state.sidebar.excludedGenres)
    const dispatch = useDispatch()

    const toggleGenre = (e) => {
        const id = parseInt(e.target.id)
        let newExcluded = [...excluded]

        if (newExcluded.includes(id))
            newExcluded = newExcluded.filter((e) => e !== id)
        else newExcluded.push(id)

        dispatch(setExcludedGenres(newExcluded))
    }

    const Check = ({ id, name, active }) => {
        return (
            <Checkbox id={id} active={active} onClick={toggleGenre}>
                {name}
            </Checkbox>
        )
    }

    const toggleAllG = (value) => {
        if (value) return dispatch(setExcludedGenres([]))

        const newExcluded = allGenres.map((g) => g.id)
        dispatch(setExcludedGenres(newExcluded))
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
                    <Check
                        key={g.id}
                        id={g.id}
                        name={g.name}
                        active={!excluded.includes(g.id)}
                    />
                ))}
        </Styled>
    )
}
