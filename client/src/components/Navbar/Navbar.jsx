import React from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components"

import themes from "../../theme.json"
import { Navlink } from "./NavLink"

const Styled = styled.div`
    width: 100vw;

    .content {
        margin: 1rem;
        background-color: ${themes.dark.palette.dark};
        border-radius: 0.5rem;
        overflow: hidden;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }
`

export const Navbar = () => {
    const location = useLocation()

    return (
        <Styled
            style={
                location.pathname === "/"
                    ? { position: "fixed", top: "0" }
                    : undefined
            }
        >
            <div className="content">
                <Navlink title={"Landing"} url={"/"} />
                <Navlink title={"Home"} url={"/home"} />
                <Navlink title={"Create"} url={"/create"} />
                <Navlink title={"test"} url={"/test"} />
            </div>
        </Styled>
    )
}
