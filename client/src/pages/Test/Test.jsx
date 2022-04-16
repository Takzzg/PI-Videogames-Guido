import React from "react"

import { Card } from "../../components"
import { dbGame, apiGame } from "../../mockData"
import cover from "../../assets/cover.jpg"
import { Styled } from "./Styled"

export const Test = () => {
    return (
        <Styled>
            <span className="title">Game Card Tests</span>
            <div className="gamesCont">
                <Card
                    key={dbGame.id}
                    id={dbGame.id}
                    name={dbGame.name}
                    rating={dbGame.rating}
                    desc={dbGame.desc}
                    image={cover}
                    released={dbGame.released}
                />
                <Card
                    key={apiGame.id}
                    id={apiGame.id}
                    name={apiGame.name}
                    rating={apiGame.rating}
                    image={apiGame.background_image}
                    released={apiGame.released}
                />
            </div>
        </Styled>
    )
}
