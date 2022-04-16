import React from "react"

import { Card } from "../../components"
import { raw } from "../../themes"
import { dbGame, apiGame } from "../../mockData"
import cover from "../../assets/cover.jpg"
import { Sblock, Styled } from "./Styled"

const Block = ({ color, name }) => {
    return (
        <Sblock color={color}>
            {name}
            <br />
            {`${color[0]}, ${color[1]}%, ${color[2]}%`}
        </Sblock>
    )
}

export const Test = () => {
    return (
        <Styled>
            <span className="title">Palette</span>
            <div className="palette">
                <div>
                    {raw.map((c) => (
                        <Block color={c.hsl} name={c.name} key={c.name} />
                    ))}
                </div>
                <div>
                    {raw.map((c) => {
                        let lighter = [...c.hsl]
                        lighter[2] = 50
                        return (
                            <Block color={lighter} name={c.name} key={c.name} />
                        )
                    })}
                </div>
            </div>

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
