import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Styled = styled(Link)`
    display: grid;
    grid-template-rows: 1fr auto;

    cursor: pointer;
    color: whitesmoke;
    text-decoration: none;

    .image {
        position: relative;
        width: 100%;
        background-image: url(${(props) => props.image});
        background-size: cover;

        .rating {
            position: absolute;
            right: 0;

            padding: 0.5rem;
            font-size: 1.5rem;

            background-color: rgba(0, 0, 0, 0.5);
        }
    }

    .body {
        padding: 1rem;
        background-color: black;

        display: flex;
        flex-direction: column;

        .name {
            font-size: 1.5rem;
        }
    }
`

export const Card = ({ id, name, rating, desc, image, released }) => {
    return (
        <Styled image={image} to={`/detail/${id}`}>
            <div className="image">
                <span className="rating">{rating}/5</span>
            </div>
            <div className="body">
                <span className="name">{name}</span>
                {desc && <span className="desc">{desc}</span>}
                <span className="released">Released on: {released}</span>
            </div>
        </Styled>
    )
}
