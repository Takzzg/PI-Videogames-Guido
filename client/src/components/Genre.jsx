import React from "react"
import styled from "styled-components"

const Styled = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url(${(props) => props.image});
    background-size: cover;
    background-position: 20%;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem;
    font-size: 1.25rem;
`

export const Genre = ({ image, name }) => {
    return <Styled image={image}>{name}</Styled>
}
