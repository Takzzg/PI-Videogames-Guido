import React from "react"
import styled from "styled-components"
import { theme } from "../../assets/theme"
import { Navlink } from "./NavLink"

const Styled = styled.div`
    display: flex;
    background-color: ${theme.bg_dark};
`

export const Navbar = () => {
    return (
        <Styled>
            <Navlink title={"Landing"} url={"/"} />
            <Navlink title={"Home"} url={"/home"} />
            <Navlink title={"Create"} url={"/create"} />
            <Navlink title={"test"} url={"/test"} />
        </Styled>
    )
}
