import React from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { setRating } from "../../../redux/actions/sync"

const Styled = styled.span`
    display: flex;
    align-items: center;
`

export const Rating = () => {
    const rating = useSelector((state) => state.sidebar.rating)
    const dispatch = useDispatch()

    const toggleThreshold = () => {
        const newThreshold =
            rating.threshold === "greater" ? "lesser" : "greater"
        dispatch(setRating({ ...rating, threshold: newThreshold }))
    }

    const changeValue = (e) => {
        const btnValue = e.target.value
        let newRating = rating.value

        newRating += parseInt(btnValue)

        if (newRating > 5) newRating = 5
        if (newRating < 0) newRating = 0

        dispatch(setRating({ ...rating, value: newRating }))
    }

    return (
        <Styled>
            <button disabled={rating.ignore} onClick={toggleThreshold}>
                {rating.threshold === "greater" ? ">" : "<"}
            </button>

            <div>{rating.value}</div>

            <button disabled={rating.ignore} onClick={changeValue} value={1}>
                +
            </button>

            <button disabled={rating.ignore} onClick={changeValue} value={-1}>
                -
            </button>
        </Styled>
    )
}
