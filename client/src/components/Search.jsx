import React from "react"
import styled from "styled-components"

const Styled = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    padding: 1rem;
    margin: 1rem;

    .grid {
        width: 100%;
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: auto;
        gap: 1rem;
        font-size: 1.5rem;

        .label {
            text-align: right;
        }

        input[type="text"] {
            width: 100%;
        }
    }

    .title {
        font-size: 2rem;
        grid-column: span 2;
        text-align: center;
    }
`

export const Search = () => {
    return (
        <>
            <span className="title">Search by</span>
            <Styled>
                <div className="grid">
                    <span className="label">Name</span>
                    <span className="input">
                        <input type="text" placeholder="The Legend of Zelda" />
                    </span>
                    <span className="label">Rating </span>
                    <span className="input">
                        <button>{"< / >"}</button>
                        <input
                            type="number"
                            placeholder="3"
                            style={{ appearance: "none" }}
                        />
                        <button>+</button>
                        <button>-</button>
                    </span>
                </div>
            </Styled>
        </>
    )
}
