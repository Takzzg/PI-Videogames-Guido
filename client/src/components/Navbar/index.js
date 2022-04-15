import React from "react"
import styled from "styled-components"

import themes from "../../theme.json"
import { Navlink } from "./Navlink"

const Styled = styled.div`
    background-color: ${themes.dark.palette.dark};
    /* color: ${themes.dark.text.light}; */
    color: red;

    text-decoration: none;

    padding: 1rem;
    margin: 1rem;
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
