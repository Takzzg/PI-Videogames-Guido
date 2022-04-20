import React from "react"
import styled from "styled-components"

const Styled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 3rem;
    color: white;
`

export const Message = ({ children }) => {
    return <Styled>{children}</Styled>
}
