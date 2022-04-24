import React from "react"
import styled from "styled-components"
import cover from "../../assets/cover.jpg"
import { theme } from "../../assets/theme"

const Styled = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
    max-height: 80vh;
    min-height: 50vh;

    img {
        min-height: 100%;
        width: 100%;
    }

    .title {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        position: absolute;
        bottom: 0%;
        width: 100%;
        z-index: 2;
        box-sizing: border-box;

        padding: 2rem 0.5rem;

        background: linear-gradient(
            transparent,
            ${theme.bg_medium}88 3rem,
            ${theme.bg_medium}
        );

        .name {
            display: flex;
            font-size: 3rem;
            line-height: 1rem;
        }

        .info {
            display: flex;
            gap: 1rem;
            align-items: flex-end;

            .rating {
                display: flex;
                align-items: center;
                gap: 1rem;
            }
        }
    }
`

const Input = styled.div`
    input[type="text"] {
        background-color: transparent;
        border-bottom: 2px solid ${theme.bg_white};
        font-size: 2rem;

        &:focus,
        &:hover {
            outline: none;
            background-color: rgba(0, 0, 0, 0.5);
        }
    }

    input[type="range"] {
        display: block;
        appearance: none;
        background: linear-gradient(to right, red 0%, green 100%);
        height: 10px;
        padding: 0;
        border-radius: 10px;

        &::-webkit-slider-thumb {
            appearance: none;
            height: 50px;
            background: red;
        }
    }
`

const NameInput = ({ name, handleChange }) => (
    <Input>
        Name:{" "}
        <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => handleChange(e)}
        />
    </Input>
)

const RatingInput = ({ rating, handleChange }) => (
    <Input>
        <input
            type="range"
            step={0.1}
            min={0}
            max={5}
            id="rating"
            value={rating}
            onChange={(e) => handleChange(e)}
        />
    </Input>
)

export const GameHeader = ({ name, rating, released, image, handleChange }) => {
    return (
        <Styled>
            <span className="title">
                <span className="name">
                    {handleChange ? (
                        <NameInput handleChange={handleChange} name={name} />
                    ) : (
                        name
                    )}
                </span>

                <div className="info">
                    <div className="rating">
                        Rating: {rating}/5 <br />
                        {handleChange && (
                            <RatingInput
                                handleChange={handleChange}
                                rating={rating}
                            />
                        )}
                    </div>

                    <div className="released">Released: {released}</div>
                </div>
            </span>
            <img src={image || cover} alt="cover" />
        </Styled>
    )
}
