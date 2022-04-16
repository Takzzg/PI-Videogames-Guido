import React from "react"
import styled from "styled-components"

import { raw } from "../../themes"

const Sblock = styled.div`
    width: 100px;
    height: 100px;
    background-color: hsl(
        ${(props) =>
            `${props.color[0]}, ${props.color[1]}%, ${props.color[2]}%`}
    );
`

const Styled = styled.div`
    display: flex;
    flex-direction: column;

    .title {
        font-size: 3rem;
    }

    .palette > * {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

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
        </Styled>
    )
}
