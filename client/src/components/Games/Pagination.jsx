import React from "react"
import { useDispatch } from "react-redux"
import { setPage } from "../../redux/actions/sidebar"

export const Pagination = ({ page, max }) => {
    const dispatch = useDispatch()

    const handleSetPage = (i) => {
        dispatch(setPage(i))
    }

    return (
        <div>
            <button disabled={page === 0} onClick={() => handleSetPage(0)}>
                {"<<"}
            </button>
            <button
                disabled={page === 0}
                onClick={() => handleSetPage(page - 1)}
            >
                {"<"}
            </button>
            <PageButtons page={page} max={max} setPage={handleSetPage} />
            <button
                disabled={page === max}
                onClick={() => handleSetPage(page + 1)}
            >
                {">"}
            </button>
            <button disabled={page === max} onClick={() => handleSetPage(max)}>
                {">>"}
            </button>
        </div>
    )
}

const PageButtons = ({ page, max, setPage }) => {
    let buttons = []
    let btnCount = 3
    let startI, endI
    let lastPageNum = max

    if (page <= btnCount) {
        startI = 0
        endI = startI + btnCount * 2
        if (endI > lastPageNum) endI = lastPageNum
    } else if (page >= lastPageNum - btnCount) {
        startI = lastPageNum - btnCount * 2
        endI = lastPageNum
        if (startI < 1) startI = 0
    } else {
        startI = page - btnCount
        endI = page + btnCount
        if (endI > lastPageNum) endI = lastPageNum
        if (startI < 1) startI = 0
    }

    for (let i = startI; i <= endI; i++) buttons.push(i)

    return (
        <span>
            {buttons.map((i) => (
                <button
                    key={i}
                    disabled={page === i}
                    onClick={() => setPage(i)}
                >
                    {i + 1}
                </button>
            ))}
        </span>
    )
}
