import React from "react"
import { useSelector } from "react-redux"

import { Styled } from "./Styled"
import { Games } from "../../components"

export const Home = () => {
    const allGames = useSelector((state) => state.allGames)

    return (
        <Styled>
            <Games className="games" games={allGames} />
        </Styled>
    )
}
