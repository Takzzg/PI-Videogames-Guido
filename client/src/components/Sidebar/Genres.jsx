import React, { useState } from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"

const Styled = styled.div`
    display: flex;
    flex-direction: column;
`

export const Genres = () => {
    const allGenres = useSelector((state) => state.allGenres)
    const [excluded, setExcluded] = useState([])

    const handleCheck = (e) => {
        if (excluded.includes(e.target.id))
            setExcluded(excluded.filter((id) => id !== e.target.id))
        else setExcluded([...excluded, e.target.id])
    }

    return (
        <Styled>
            {allGenres.map((g) => (
                <Check
                    key={g.id}
                    id={g.id}
                    name={g.name}
                    checked={!excluded.includes(g.name)}
                    handleCheck={handleCheck}
                />
            ))}
        </Styled>
    )
}

const Check = ({ id, name, checked, handleCheck }) => {
    return (
        <div>
            <input
                type="checkbox"
                name={name}
                id={id}
                defaultChecked={checked}
                onChange={handleCheck}
            />
            {name}
        </div>
    )
}
