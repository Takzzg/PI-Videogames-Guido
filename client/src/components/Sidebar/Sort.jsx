import React from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { setSort } from "../../redux/actions/sidebar"

const Styled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .header {
        display: flex;
    }

    .options {
        display: flex;
        flex-direction: column;
    }

    .option {
        padding: 0.5rem;
    }
`

export const Sort = () => {
    const sortParams = useSelector((state) => state.sidebar.sortParams)
    const dispatch = useDispatch()

    const toggleDir = () => {
        const newDir = sortParams.dir === "asc" ? "desc" : "asc"
        dispatch(setSort({ ...sortParams, dir: newDir }))
    }

    const sortingProps = ["name", "date", "rating"]

    return (
        <Styled>
            <div className="header">
                <span className="title">Sort </span>

                <button
                    onClick={toggleDir}
                    className="dir"
                    disabled={sortParams.dir === "asc"}
                >
                    ASC
                </button>

                <button
                    onClick={toggleDir}
                    className="dir"
                    disabled={sortParams.dir === "desc"}
                >
                    DESC
                </button>
            </div>

            <div className="options">
                {sortingProps.map((p) => (
                    <button
                        key={p}
                        disabled={sortParams.prop === p}
                        className="option"
                        onClick={() =>
                            dispatch(setSort({ ...sortParams, prop: p }))
                        }
                    >
                        {p}
                    </button>
                ))}
            </div>
        </Styled>
    )
}
