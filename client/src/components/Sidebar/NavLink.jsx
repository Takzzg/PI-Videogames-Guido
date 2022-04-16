import React from "react"
import { NavLink, useMatch, useResolvedPath } from "react-router-dom"
import styled from "styled-components"

const Styled = styled.div`
    a {
        display: flex;
        padding: 1.5rem 3rem;
        font-size: 1.25rem;
        color: ${(props) => (props.active ? "black" : "white")};
        background-color: ${(props) => (props.active ? "white" : "")};
        text-decoration: none;
    }
`

export const Navlink = ({ title, url }) => {
    let resolved = useResolvedPath(url)
    let match = useMatch({ path: resolved.pathname })

    return (
        <Styled active={match}>
            <NavLink to={url}>{title}</NavLink>
        </Styled>
    )
}
