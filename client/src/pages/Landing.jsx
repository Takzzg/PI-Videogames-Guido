import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import bg from "../assets/landing.jpg"
import { theme } from "../assets/theme"

const Styled = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url(${bg});
    background-size: cover;
    background-position: center;

    display: grid;
    grid-template-rows: 1fr auto;

    .main {
        font-size: 2rem;
        color: white;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;

        padding-bottom: 2rem;

        a {
            color: white;
            text-decoration: none;
            padding: 1rem;

            border: 3px solid white;
            border-radius: 1rem;

            transition: all 0.25s ease-in-out;

            &:hover {
                background-color: ${theme.bg_white};
                color: black;
            }

            width: 250px;
        }
    }

    .footer {
        display: flex;
        align-items: center;
        justify-content: center;

        .btn {
            text-decoration: none;
            color: lightgray;
            padding: 0.5rem;
            cursor: pointer;

            &:hover {
                color: black;
                background-color: ${theme.bg_white};
            }
        }
    }
`

export const Landing = () => {
    return (
        <Styled>
            <div className="main">
                <div>PI VideoGames</div>
                <Link to={"/home"}>Home</Link>
            </div>

            <div className="footer">
                <a
                    className="btn"
                    href="https://rawg.io/apidocs"
                    target={"_blank"}
                    rel="noreferrer"
                >
                    powered by: R A W G
                </a>
            </div>
        </Styled>
    )
}
