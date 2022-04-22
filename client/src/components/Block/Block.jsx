import React from "react"
import styled, { css } from "styled-components"

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

    ${(props) =>
        props.toggleable &&
        css`
            cursor: pointer;

            ${(props) =>
                !props.active &&
                css`
                    filter: grayscale();
                    text-decoration: line-through;
                `}
        `}
`

export const Block = ({ data, active, onClick }) => {
    return (
        <Styled
            toggleable={active !== undefined}
            active={active}
            onClick={onClick}
            id={data.id}
            image={data.image || data.image_background}
        >
            {data.name}
        </Styled>
    )
}
