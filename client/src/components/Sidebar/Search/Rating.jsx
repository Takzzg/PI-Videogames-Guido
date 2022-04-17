import React from "react"
import styled from "styled-components"

const Styled = styled.span`
    display: flex;
    /* width: 100%; */
    align-items: stretch;
    justify-content: stretch;
`

export const Rating = ({ handleSetForm, rating, threshold }) => {
    return (
        <Styled>
            <button onClick={handleSetForm} name="threshold">
                {threshold === "greater" ? ">" : "<"}
            </button>

            <div>{rating}</div>

            <button onClick={handleSetForm} value={1} name={"rating"}>
                +
            </button>

            <button onClick={handleSetForm} value={-1} name={"rating"}>
                -
            </button>
        </Styled>
    )
}
