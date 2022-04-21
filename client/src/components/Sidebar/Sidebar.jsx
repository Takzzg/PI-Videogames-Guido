import React from "react"
import styled from "styled-components"
import { theme } from "../../assets/theme.js"

import { Genres } from "./Genres.jsx"
import { Search } from "./Search/Search.jsx"
import { Sort } from "./Sort.jsx"

const Styled = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    .divider {
        min-height: 5px;
        background-color: ${theme.bg_light};
        margin: 1rem 0;
    }

    .title {
        font-size: 2rem;
        text-align: center;
    }
`

export const Sidebar = () => {
    return (
        <Styled>
            <Search />
            <div className="divider"></div>
            <Sort />
            <div className="divider"></div>
            <Genres />
        </Styled>
    )
}
