import React from "react"
import { useSelector, useDispatch } from "react-redux"
import styled, { css } from "styled-components"

import { theme } from "../../../assets/theme"
import { setGames } from "../../../redux/actions/async"
import { filterGames, setName, setRating } from "../../../redux/actions/sync"
import { Rating } from "./Rating"

const Styled = styled.div`
    display: flex;
    flex-direction: column;

    .label {
        text-align: right;
    }

    .fields {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }
`

const Check = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;

    .checkbox {
        min-width: 10px;
        min-height: 10px;
        border: 2px solid ${theme.bg_white};
        padding: 0.25rem;
        cursor: pointer;

        &:hover {
            background-color: ${theme.bg_light};
        }
    }

    .input {
        display: flex;
        line-height: 1rem;
        width: 100%;
    }

    ${(props) =>
        props.active &&
        css`
            color: black;
            background-color: ${theme.bg_white};

            input,
            button {
                color: black;
                background-color: lightgray;
            }

            .checkbox {
                background-color: ${theme.bg_white};
                border-color: ${theme.bg_medium};
            }
        `}
`

export const Search = () => {
    const name = useSelector((state) => state.sidebar.name)
    const rating = useSelector((state) => state.sidebar.rating)
    const dispatch = useDispatch()

    return (
        <Styled>
            <span className="title">Search</span>

            <Check active={!!name}>
                <div
                    className="checkbox"
                    onClick={() => {
                        dispatch(setName(""))
                        dispatch(filterGames())
                    }}
                />

                <span className="label">Name</span>

                <div className="input">
                    <input
                        className="input"
                        type="text"
                        name="name"
                        placeholder="The Legend of Zelda"
                        value={name}
                        onChange={(e) => {
                            dispatch(setName(e.target.value))
                            if (e.target.value === "") dispatch(filterGames())
                        }}
                        onKeyPress={(e) => {
                            if (e.key === "Enter") dispatch(setGames(name))
                        }}
                    />

                    <button onClick={() => dispatch(setGames(name))}>Go</button>
                </div>
            </Check>

            <Check active={!rating.ignore}>
                <div
                    className="checkbox"
                    onClick={() =>
                        dispatch(
                            setRating({ ...rating, ignore: !rating.ignore })
                        )
                    }
                />
                <span className="label">Rating</span>
                <Rating />
            </Check>
        </Styled>
    )
}
