import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import cover from "../../assets/cover.jpg"
import { theme } from "../../assets/theme"

const Styled = styled(Link)`
    display: grid;
    grid-template-rows: 1fr auto;

    cursor: pointer;
    color: whitesmoke;
    text-decoration: none;

    border: 5px solid transparent;

    &:hover {
        border-color: white;
        z-index: 2;
    }

    .image {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        position: relative;
        & > * {
            z-index: 1;
        }

        background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
            url(${(props) => props.image});
        background-size: cover;
        background-position: center;
        backdrop-filter: blur(2px);

        img {
            width: 100%;
        }

        .rating {
            padding: 0.5rem;
            font-size: 1.5rem;
        }
    }

    .body {
        padding: 1rem;
        background-color: ${theme.bg_dark};

        display: flex;
        flex-direction: column;

        .name {
            font-size: 1.5rem;
        }
    }

    .genres {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 0.5rem;
    }
`

export const Card = ({ game }) => {
    const { id, name, rating, background_image, released, genres } = game
    const image = background_image || cover

    return (
        <Styled image={image} to={`/detail/${id}`}>
            <div className="image">
                <span className="rating">{rating}/5</span>

                <img src={image} alt="cover" />

                <div className="genres">
                    {genres.map((g) => (
                        <span key={`${g.id}-${id}`}>{g.name}</span>
                    ))}
                </div>
            </div>

            <div className="body">
                <span className="name">{name}</span>
                <span className="released">Released on: {released}</span>
            </div>
        </Styled>
    )
}
