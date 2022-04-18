import React from "react"
import { NavLink, useMatch, useResolvedPath } from "react-router-dom"
import styled, { css } from "styled-components"
import { theme } from "../../assets/theme"

const Styled = styled.div`
    a {
        display: flex;
        padding: 1.5rem 3rem;
        font-size: 1.25rem;
        text-decoration: none;

        ${(props) =>
            props.active
                ? css`
                      color: black;
                      background-color: ${theme.bg_white};
                  `
                : css`
                      color: whitesmoke;

                      &:hover {
                          background-color: ${theme.bg_light};
                      }
                  `}
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
