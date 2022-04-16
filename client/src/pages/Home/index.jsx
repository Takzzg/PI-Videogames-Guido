import React from "react"
import { useSelector } from "react-redux"

import { Styled } from "./Styled"
import { Games, Search } from "../../components"

export const Home = () => {
    const allGames = useSelector((state) => state.allGames)

    return (
        <Styled>
            <div>
                <Search className="searchField" />
            </div>
            <Games className="games" games={allGames} />
        </Styled>
    )
}
