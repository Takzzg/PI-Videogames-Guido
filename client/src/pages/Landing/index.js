import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import bg from "../../assets/landing.jpg"

const Styled = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url(${bg});
    height: 100vh;

    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-areas:
        "main"
        "footer";

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

            background-color: transparent;
            transition: all 0.25s ease-in-out;

            &:hover {
                background-color: whitesmoke;
                color: black;
            }

            /* min-width: 250px; */
        }
    }

    .footer {
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 0.5rem;

        .btn {
            text-decoration: none;
            color: lightgray;
            padding: 0.5rem;
            cursor: pointer;

            &:hover {
                color: black;
                background-color: whitesmoke;
            }
        }
    }
`

export const Landing = () => {
    return (
        <Styled>
            <div className="main">
                <div>PI VideoGames</div>
                <Link to={"/home"}>Home{" ->"}</Link>
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
