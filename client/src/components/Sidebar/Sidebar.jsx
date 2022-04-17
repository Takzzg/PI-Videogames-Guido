import React from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components"

import { Navlink } from "./NavLink"
import { Genres } from "./Genres.jsx"
import { Search } from "./Search/Search.jsx"

const Styled = styled.div`
    background-color: rgba(0, 0, 0, 0.75);

    position: ${(props) => (props.float ? "absolute" : "sticky")};
    top: 0;
    z-index: 10;
    height: 100%;

    .divider {
        height: 2px;
        background-color: white;
    }
`

export const Sidebar = () => {
    const location = useLocation()

    return (
        <Styled float={location.pathname === "/"}>
            <div>
                <Navlink title={"Landing"} url={"/"} />
                <Navlink title={"Home"} url={"/home"} />
                <Navlink title={"Create"} url={"/create"} />
                <Navlink title={"test"} url={"/test"} />
            </div>
            <div className="divider" />
            <Search />
            <div className="divider" />
            <Genres />
        </Styled>
    )
}
