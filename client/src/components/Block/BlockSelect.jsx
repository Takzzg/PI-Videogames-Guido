import React from "react"
import styled from "styled-components"

import { theme } from "../../assets/theme"
import { Block } from "./Block"

const BulkStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    background-color: ${theme.bg_dark};
    gap: 0.1rem;
`

export const BlockSelect = ({
    completeList,
    selectedList,
    bulkToggle,
    cat,
    onClick
}) => {
    return (
        <>
            <BulkStyled className="bulk">
                <button
                    disabled={selectedList.length === completeList.length}
                    onClick={() => bulkToggle(cat, true)}
                >
                    All
                </button>

                <div className="divider" />

                <button
                    disabled={selectedList.length === 0}
                    onClick={() => bulkToggle(cat, false)}
                >
                    None
                </button>
            </BulkStyled>

            {completeList.map((item) => (
                <Block
                    data={item}
                    key={item.id}
                    onClick={(e) => onClick(cat, e)}
                    active={selectedList.includes(item.id)}
                />
            ))}
        </>
    )
}
