import React from "react"
import { useSelector } from "react-redux"

import { Styled } from "./Styled"
import { Games } from "../../components/Games/Games"

export const Home = () => {
    const allGames = useSelector((state) => state.allGames)

    return (
        <Styled>
            <div className="searchField">Search</div>
            <Games games={allGames} />
        </Styled>
    )
}
