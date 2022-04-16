import React from "react"
import { Link } from "react-router-dom"
import { Styled } from "./Styled"

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
