import React from "react"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"
import { setGames } from "../../../redux/actions/async"
import { setName } from "../../../redux/actions/sync"
import { Rating } from "./Rating"

const Styled = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;

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

export const Search = () => {
    const name = useSelector((state) => state.sidebar.name)
    const dispatch = useDispatch()

    return (
        <Styled>
            <span className="title">Search</span>

            <div className="fields">
                <span className="label">Name</span>

                <div>
                    <input
                        className="input"
                        type="text"
                        name="name"
                        placeholder="The Legend of Zelda"
                        value={name}
                        onChange={(e) => dispatch(setName(e.target.value))}
                    />
                    <button onClick={() => dispatch(setGames(name))}>Go</button>
                </div>

                <span className="label">Rating</span>

                <Rating />
            </div>
        </Styled>
    )
}
