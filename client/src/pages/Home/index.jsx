import React from "react"
import { useSelector } from "react-redux"

import { Games, Sidebar } from "../../components"

import styled from "styled-components"

const Styled = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    min-height: 0;
`

export const Home = () => {
    const allGames = useSelector((state) => state.root.allGames)

    return (
        <Styled>
            <Sidebar />
            <Games games={allGames} />
        </Styled>
    )
}
