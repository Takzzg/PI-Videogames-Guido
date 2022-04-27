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
    font-size: 1.5rem;

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
            font-size: 2rem;
            line-height: 1rem;
        }

        .info {
            display: flex;
            gap: 2rem;
            align-items: flex-start;

            .rating {
                display: flex;
                align-items: center;
                flex-direction: column;
                gap: 1rem;

                input {
                    min-width: 10rem;
                }
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
        height: 10px;
        padding: 0;
        border-radius: 10px;
        accent-color: gray;
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

const DateInput = ({ released, handleChange }) => (
    <>
        <br />
        <input
            type="date"
            name="released"
            id="released"
            value={released}
            onChange={(e) => handleChange(e)}
        />
    </>
)

export const GameHeader = ({ name, rating, released, image, handleChange }) => {
    return (
        <Styled>
            <span className="title">
                <span className="name">
                    {!!handleChange ? (
                        <NameInput handleChange={handleChange} name={name} />
                    ) : (
                        name
                    )}
                </span>

                <div className="info">
                    {!!rating && (
                        <div className="rating">
                            Rating: {rating}/5 <br />
                            {handleChange && (
                                <RatingInput
                                    handleChange={handleChange}
                                    rating={rating}
                                />
                            )}
                        </div>
                    )}

                    {(!!released || handleChange) && (
                        <div className="released">
                            Released:{" "}
                            {handleChange ? (
                                <DateInput
                                    released={released}
                                    handleChange={handleChange}
                                />
                            ) : (
                                released
                            )}
                        </div>
                    )}
                </div>
            </span>
            <img src={image || cover} alt="cover" />
        </Styled>
    )
}
