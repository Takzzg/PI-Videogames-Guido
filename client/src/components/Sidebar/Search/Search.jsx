import React, { useState } from "react"
import styled from "styled-components"
import { Rating } from "./Rating"

const Styled = styled.div`
    padding: 1rem;

    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
    gap: 1rem;
    /* font-size: 1.5rem; */
    align-items: center;
    justify-content: center;

    input,
    button {
        background-color: #404040;
        color: white;
        border: none;
        padding: 0.5rem;
        line-height: 1rem;
        /* font-size: 1.25rem; */
    }

    .label {
        text-align: right;
    }
`

export const Search = () => {
    const [form, setForm] = useState({
        name: "",
        rating: 3,
        genres: [],
        threshold: "greater"
    })

    const handleSetForm = (e) => {
        const { name, value } = e.target

        switch (name) {
            case "name":
                return setForm({ ...form, name: e.target.value })

            case "rating":
                let newValue = form.rating + parseInt(value)

                if (newValue < 0) newValue = 0
                if (newValue > 5) newValue = 5

                return setForm({ ...form, rating: newValue })

            case "threshold":
                return setForm({
                    ...form,
                    threshold:
                        form.threshold === "greater" ? "lesser" : "greater"
                })

            default:
                return
        }
    }

    return (
        <Styled>
            <span className="label">Name</span>

            <input
                className="input"
                type="text"
                name="name"
                placeholder="The Legend of Zelda"
                value={form.name}
                onChange={handleSetForm}
            />

            <span className="label">Rating</span>

            <Rating
                handleSetForm={handleSetForm}
                rating={form.rating}
                threshold={form.threshold}
            />
        </Styled>
    )
}
