import React from "react"
import styled from "styled-components"

import themes from "../../theme.json"
import { Navlink } from "./NavLink"

const Styled = styled.div`
    background-color: ${themes.dark.palette.dark};

    /* padding: 1rem; */
    margin: 1rem;

    border-radius: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`

export const Navbar = () => {
    return (
        <Styled>
            <Navlink title={"Landing"} url={"/"} />
            <Navlink title={"Home"} url={"/home"} />
            <Navlink title={"Create"} url={"/create"} />
        </Styled>
    )
}
