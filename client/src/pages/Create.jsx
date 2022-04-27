import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

import cover from "../assets/cover.jpg"
import { GameHeader, BlockSelect } from "../components"
import { postGame } from "../redux/actions/async"

const Error = styled.span`
    padding: 0.25rem;
    background-color: red;
    color: white;
`

const Styled = styled.div`
    box-sizing: border-box;
    display: grid;
    grid-template-areas:
        "platforms header genres"
        "platforms desc   genres"
        "platforms footer genres";
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto;
    overflow: auto;

    .desc {
        grid-area: desc;
        display: flex;
        flex-direction: column;
        .title {
            font-size: 2rem;
        }
    }

    .genres,
    .platforms {
        grid-area: genres;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .platforms {
        grid-area: platforms;
    }

    .footer {
        grid-area: footer;
        display: flex;

        .buttons {
            grid-area: buttons;
            display: flex;
            gap: 1rem;
            padding: 1rem;
        }

        .errors {
            grid-area: errors;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 0.25rem;
            align-items: center;
        }
    }
`

export const Create = () => {
    const genres = useSelector((state) => state.root.allGenres)
    const platforms = useSelector((state) => state.root.allPlatforms)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const defaultForm = () => {
        return {
            name: "",
            rating: 2.5,
            desc: "",
            genres: [],
            platforms: [],
            released: ""
        }
    }

    const [form, setForm] = useState(defaultForm())
    const [errors, setErrors] = useState([])

    const resetForm = () => {
        setForm(defaultForm())
    }

    const handleSetForm = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value })
    }

    const submitForm = () => {
        const game = { ...form }

        game.rating = parseInt(game.rating)
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

    useEffect(() => {
        let detected = []

        if (!form.name) detected.push("Must have a name")
        else if (form.name?.length < 3)
            detected.push("Name must be at least 3 characters long")

        if (form.rating > 5) detected.push("Rating can't be over 5")
        if (form.rating < 0) detected.push("Rating can't be below 0")

        if (!form.desc) detected.push("Must have a description")
        else if (form.desc?.split(" ").length < 10)
            detected.push("Description must be at least 10 words long")

        if (!form.genres?.length)
            detected.push("Must belong to at least one genre")
        if (!form.platforms?.length)
            detected.push("Must include at least one platform")

        setErrors(detected)
    }, [form])

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
                <span className="title">Description</span>
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

            <div className="footer">
                <div className="buttons">
                    <button onClick={resetForm}>Reset</button>
                    <button onClick={submitForm} disabled={errors.length}>
                        Save
                    </button>
                </div>
                <div className="errors">
                    {errors.map((e) => (
                        <Error key={e}>{e}</Error>
                    ))}
                </div>
            </div>
        </Styled>
    )
}
