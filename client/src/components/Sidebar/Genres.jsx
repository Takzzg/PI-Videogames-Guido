import React from "react"
import { useDispatch, useSelector } from "react-redux"
import styled, { css } from "styled-components"

import { Genre } from "../Genre"
import { setIncludedGenres } from "../../redux/actions/sidebar"

const Checkbox = styled.span`
    cursor: pointer;

    ${(props) =>
        !props.active &&
        css`
            filter: grayscale();
            text-decoration: line-through;
        `}

    .cont {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

const Styled = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Genres = () => {
    const allGenres = useSelector((state) => state.root.allGenres)
    const included = useSelector((state) => state.sidebar.includedGenres)
    const dispatch = useDispatch()

    const toggleGenre = (id) => {
        let newIncluded = [...included]

        if (newIncluded.includes(id))
            newIncluded = newIncluded.filter((e) => e !== id)
        else newIncluded.push(id)

        dispatch(setIncludedGenres(newIncluded))
    }

    const Check = ({ id, name, active, image }) => {
        return (
            <Checkbox active={active} onClick={() => toggleGenre(id)}>
                <Genre image={image} name={name} />
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

            <div className="cont">
                {allGenres?.map((g) => (
                    <Check
                        image={g.image}
                        key={g.id}
                        id={g.id}
                        name={g.name}
                        active={included.includes(g.id)}
                    />
                ))}
            </div>
        </Styled>
    )
}
