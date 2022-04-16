import React from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components"

import { Navlink } from "./NavLink"

const Styled = styled.div`
    /* position: ${(props) => (props.float ? "absolute" : "sticky")}; */
    top: 0;
    z-index: 10;
    width: 100%;
    background-color: transparent;

    .content {
        margin: 1rem;
        border-radius: 0.5rem;

        display: flex;
        align-items: stretch;
        justify-content: center;
        gap: 0.5rem;

        position: relative;
        background-color: rgba(25, 25, 25, 0.9);
    }
`

export const Navbar = () => {
    const location = useLocation()

    return (
        <Styled float={location.pathname === "/"}>
            <div className="content">
                <Navlink title={"Landing"} url={"/"} />
                <Navlink title={"Home"} url={"/home"} />
                <Navlink title={"Create"} url={"/create"} />
                <Navlink title={"test"} url={"/test"} />
            </div>
        </Styled>
    )
}
