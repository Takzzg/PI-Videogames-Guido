import React, { useState } from "react"
import styled from "styled-components"

const Styled = styled.div`
    display: flex;
    /* width: 100%; */
    align-items: center;
    justify-content: center;

    .header {
        display: flex;
    }
`

export const Sort = () => {
    const [sortingOpt, setSortingOpt] = useState({ prop: "name", dir: "asc" })

    return (
        <Styled>
            <div className="header">
                <span className="title">Sort </span>
                <button>ASC</button>
                <button>DESC</button>
            </div>
        </Styled>
    )
}
