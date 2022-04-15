import React from "react"
import { NavLink } from "react-router-dom"

export const Navlink = ({ title, url }) => {
    return (
        <NavLink
            to={url}
            style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "black" : "white",
                backgroundColor: !isActive ? "black" : "white"
            })}
        >
            {title}
        </NavLink>
    )
}
