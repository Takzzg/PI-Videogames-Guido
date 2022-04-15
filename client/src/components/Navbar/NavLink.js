import React from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

const Styled = styled.div`
    margin: 1rem;
`

export const Navlink = ({ title, url }) => {
    return (
        <NavLink
            to={url}
            style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "black" : "white",
                backgroundColor: isActive ? "white" : ""
            })}
        >
            <Styled>{title}</Styled>
        </NavLink>
    )
}
