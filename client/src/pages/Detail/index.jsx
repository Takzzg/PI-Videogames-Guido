import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchDetail } from "../../redux/actions/root"

export const Detail = () => {
    const { id } = useParams()

    const detail = useSelector((state) => state.root.detail)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchDetail(id))
    }, [dispatch, id])

    return (
        <div>
            Detail ${id}
            {JSON.stringify(detail, null, 4)}
        </div>
    )
}
