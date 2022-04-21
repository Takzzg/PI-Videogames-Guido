import React from "react"
import styled from "styled-components"
import cover from "../../assets/cover.jpg"
import { theme } from "../../assets/theme"

const Styled = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
    max-height: 80vh;
    min-height: 50vh;

    img {
        min-height: 100%;
        width: 100%;
    }

    .title {
        display: flex;
        align-items: baseline;
        position: absolute;
        bottom: 0%;
        width: 100%;
        z-index: 2;

        padding: 2rem;

        background: linear-gradient(
            transparent,
            ${theme.bg_medium}88 3rem,
            ${theme.bg_medium}
        );

        .name {
            font-size: 3rem;
        }

        .info {
            display: flex;
            padding: 1rem;
            gap: 1rem;
        }
    }
`

export const GameHeader = ({ name, rating, released, image }) => {
    return (
        <Styled>
            <span className="title">
                <span className="name">{name}</span>
                <div className="info">
                    <div className="rating">Rating: {rating}/5</div>
                    <div className="released">Released: {released}</div>
                </div>
            </span>
            <img src={image || cover} alt="cover" />
        </Styled>
    )
}
