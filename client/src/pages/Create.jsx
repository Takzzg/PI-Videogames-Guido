import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

import cover from "../assets/cover.jpg"
import { GameHeader, BlockSelect } from "../components"
import { postGame } from "../redux/actions/async"

const Styled = styled.div`
    display: grid;
    grid-template-areas:
        "platforms header  genres"
        "platforms desc    genres"
        "platforms buttons genres";
    grid-template-columns: auto 1fr auto;
    overflow: auto;

    .desc {
        grid-area: desc;

        display: flex;
        flex-direction: column;
    }

    .genres,
    .platforms {
        grid-area: genres;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .buttons {
        grid-area: buttons;
        display: flex;
        gap: 1rem;
        padding: 1rem;
    }

    .platforms {
        grid-area: platforms;
    }
`

export const Create = () => {
    const genres = useSelector((state) => state.root.allGenres)
    const platforms = useSelector((state) => state.root.allPlatforms)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [form, setForm] = useState({
        name: "",
        rating: 2.5,
        desc: "",
        genres: [],
        platforms: [],
        released: new Date().toLocaleDateString()
    })

    const resetForm = () => {
        setForm({
            name: "",
            rating: 2.5,
            desc: "",
            genres: [],
            platforms: [],
            released: new Date().toLocaleDateString()
        })
    }

    const handleSetForm = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value })
    }

    const submitForm = () => {
        const game = { ...form }
        game.platforms = game.platforms.map((p) =>
            platforms.find((plat) => plat.id === p)
        )
        dispatch(postGame(game))
        navigate("/home")
    }

    const toggleAll = (cat, value) => {
        if (!value) return setForm({ ...form, [cat]: [] })
        let selected = cat === "genres" ? [...genres] : [...platforms]
        selected = selected.map((item) => item.id)
        setForm({ ...form, [cat]: selected })
    }

    const handleToggle = (cat, e) => {
        let id = parseInt(e.target.id)
        let newArr = [...form[cat]]

        if (newArr.includes(id)) newArr = newArr.filter((e) => e !== id)
        else newArr.push(id)

        setForm({ ...form, [cat]: newArr })
    }

    return (
        <Styled>
            <GameHeader
                name={form.name}
                rating={form.rating}
                selected
                released={form.released}
                image={cover}
                handleChange={handleSetForm}
            />

            <div className="desc">
                Description
                <textarea
                    name="desc"
                    id="desc"
                    cols="30"
                    rows="10"
                    value={form.desc}
                    onChange={handleSetForm}
                />
            </div>

            <div className="genres">
                <BlockSelect
                    cat={"genres"}
                    completeList={genres}
                    selectedList={form.genres}
                    bulkToggle={toggleAll}
                    onClick={handleToggle}
                />
            </div>

            <div className="platforms">
                <BlockSelect
                    cat={"platforms"}
                    completeList={platforms}
                    selectedList={form.platforms}
                    bulkToggle={toggleAll}
                    onClick={handleToggle}
                />
            </div>

            <div className="buttons">
                <button onClick={resetForm}>Reset</button>
                <button onClick={submitForm}>Save</button>
            </div>
        </Styled>
    )
}
