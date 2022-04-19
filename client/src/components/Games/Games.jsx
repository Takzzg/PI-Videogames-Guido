import React from "react"

import { Card } from "./Card"
import styled from "styled-components"
import { Pagination } from "./Pagination"
import { useDispatch, useSelector } from "react-redux"

const Styled = styled.div`
    padding: 1rem;
    overflow-y: auto;

    .cardsCont {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(auto, 300px);
        gap: 1rem;

        & > * {
            min-height: 400px;
        }
    }
`

const Message = styled.div`
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 3rem;
    color: white;
`

const Content = ({ games, pagination, dispatch }) => {
    return (
        <Styled>
            <Pagination
                dispatch={dispatch}
                page={pagination.current}
                max={pagination.max}
            />
            <div className="cardsCont">
                {games
                    .slice(
                        pagination.current * 15,
                        pagination.current * 15 + 15
                    )
                    .map((g) => (
                        <Card key={g.id} game={g} />
                    ))}
            </div>
            <Pagination
                dispatch={dispatch}
                page={pagination.current}
                max={pagination.max}
            />
        </Styled>
    )
}

export const Games = () => {
    const allGames = useSelector((state) => state.root.allGames)
    const games = useSelector((state) => state.root.filteredGames)
    const pagination = useSelector((state) => state.sidebar.pagination)
    const error = useSelector((state) => state.sidebar.error)
    const dispatch = useDispatch()

    if (error) return <Message>{error}</Message>

    if (allGames.length && !games.length)
        return <Message>No Games Found</Message>

    if (games.length)
        return (
            <Content
                games={games}
                pagination={pagination}
                dispatch={dispatch}
            />
        )

    return <Message>Loading</Message>
}
