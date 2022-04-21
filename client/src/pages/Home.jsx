import React from "react"
import styled from "styled-components"

import { Games, Sidebar } from "../components"

const Styled = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    min-height: 0;
`

export const Home = () => {
    return (
        <Styled>
            <Sidebar />
            <Games />
        </Styled>
    )
}
