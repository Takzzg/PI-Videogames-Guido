import React, { useState } from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"

import cover from "../assets/cover.jpg"
import { GameHeader, Genres } from "../components"

const Styled = styled.div`
    display: grid;
    grid-template-areas:
        "platforms header  genres"
        "platforms desc    genres"
        "platforms buttons genres";
    overflow: auto;

    .desc {
        grid-area: desc;

        display: flex;
        flex-direction: column;
    }

    .genres {
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

    const [form, setForm] = useState({
        name: "",
        rating: 2.5,
        desc: "",
        genres: [],
        released: new Date().toLocaleDateString()
    })

    const handleSetForm = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value })
    }

    const toggleAllG = (value) => {
        if (!value) return setForm({ ...form, genres: [] })
        const selected = genres.map((g) => g.id.toString())
        setForm({ ...form, genres: selected })
    }

    const handleGenreToggle = (e) => {
        let id = e.target.id
        let newGenres = [...form.genres]

        console.log(newGenres.includes(id))

        if (newGenres.includes(id))
            newGenres = newGenres.filter((e) => e !== id)
        else newGenres.push(id)

        setForm({ ...form, genres: newGenres })
    }

    const NameInput = () => (
        <>
            Name:{" "}
            <input
                type="text"
                id="name"
                value={form.name}
                onChange={handleSetForm}
            />
        </>
    )

    const RatingInput = () => (
        <input
            type="number"
            step={0.1}
            id="rating"
            value={form.rating}
            onChange={handleSetForm}
        />
    )

    return (
        <Styled>
            <GameHeader
                name={<NameInput />}
                rating={<RatingInput />}
                selected
                released={form.released}
                image={cover}
            />

            <div className="desc">
                Description
                <textarea name="desc" id="desc" cols="30" rows="10"></textarea>
            </div>

            <div className="genres">
                <Genres
                    genres={form.genres}
                    bulkToggle={toggleAllG}
                    onClick={handleGenreToggle}
                />
            </div>

            <div className="platforms"></div>

            <div className="buttons">
                <button>Reset</button>
                <button>Save</button>
            </div>
        </Styled>
    )
}
