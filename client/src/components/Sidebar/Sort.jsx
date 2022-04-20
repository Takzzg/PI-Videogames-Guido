import React from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { setSort } from "../../redux/actions/sync"

const Styled = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
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

    const sortingProps = ["name", "released", "rating"]

    return (
        <Styled>
            <div className="header">
                <span className="title">Sort </span>
                <div>
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
