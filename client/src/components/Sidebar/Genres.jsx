import React from "react"
import { useDispatch, useSelector } from "react-redux"
import styled, { css } from "styled-components"
import { setIncludedGenres } from "../../redux/actions/sidebar"

const Checkbox = styled.span`
    padding: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;

    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url(${(props) => props.image});
    background-size: cover;
    background-position: 20%;

    ${(props) =>
        !props.active &&
        css`
            filter: grayscale();
            text-decoration: line-through;
        `}
`

const Styled = styled.span`
    display: flex;
    flex-direction: column;
`

export const Genres = () => {
    const allGenres = useSelector((state) => state.root.allGenres)
    const included = useSelector((state) => state.sidebar.includedGenres)
    const dispatch = useDispatch()

    const toggleGenre = (e) => {
        const id = parseInt(e.target.id)
        let newIncluded = [...included]

        if (newIncluded.includes(id))
            newIncluded = newIncluded.filter((e) => e !== id)
        else newIncluded.push(id)

        dispatch(setIncludedGenres(newIncluded))
    }

    const Check = ({ id, name, active, image }) => {
        return (
            <Checkbox
                image={image}
                id={id}
                active={active}
                onClick={toggleGenre}
            >
                {name}
            </Checkbox>
        )
    }

    const toggleAllG = (value) => {
        if (!value) return dispatch(setIncludedGenres([]))

        const newIncluded = allGenres.map((g) => g.id)
        dispatch(setIncludedGenres(newIncluded))
    }

    return (
        <Styled>
            <span className="title">Filter by Genre</span>
            <div className="bulk">
                <button
                    disabled={included.length === allGenres.length}
                    onClick={() => toggleAllG(true)}
                >
                    All
                </button>
                <button
                    disabled={included.length === 0}
                    onClick={() => toggleAllG(false)}
                >
                    None
                </button>
            </div>

            {allGenres &&
                allGenres.map((g) => (
                    <Check
                        image={g.image}
                        key={g.id}
                        id={g.id}
                        name={g.name}
                        active={included.includes(g.id)}
                    />
                ))}
        </Styled>
    )
}
