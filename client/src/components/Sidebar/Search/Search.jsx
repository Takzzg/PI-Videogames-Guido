import React, { useState } from "react"
import styled from "styled-components"
import { theme } from "../../../assets/theme"
import { Rating } from "./Rating"

const Styled = styled.div`
    display: flex;
    flex-direction: column;

    padding: 1rem;
    gap: 1rem;

    .grid {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        justify-content: center;
    }

    input,
    button {
        background-color: ${theme.bg_light};
        color: white;
        border: none;
        padding: 0.5rem;
        line-height: 1rem;
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
            <span className="title">Search for a Game</span>

            <div className="grid">
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
            </div>
        </Styled>
    )
}
