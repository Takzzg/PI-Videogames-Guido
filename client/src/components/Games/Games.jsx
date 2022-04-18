import React from "react"

import { Card } from "./Card"
import cover from "../../assets/cover.jpg"
import styled from "styled-components"
import { Pagination } from "./Pagination"
import { useSelector } from "react-redux"

const Styled = styled.div`
    padding: 1rem;
    overflow-y: auto;

    .cardsCont {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(auto, 300px);
        gap: 1rem;

        & > * {
            min-height: 400px;
        }
    }
`

export const Games = ({ games }) => {
    const pagination = useSelector((state) => state.sidebar.pagination)

    return (
        <Styled>
            {games ? (
                games.length > 0 ? (
                    <>
                        <Pagination
                            page={pagination.current}
                            max={pagination.max}
                        />
                        <div className="cardsCont">
                            {games
                                .slice(
                                    pagination.current * 15,
                                    pagination.current * 15 + 15
                                )
                                .map((g) => (
                                    <Card
                                        key={g.id}
                                        id={g.id}
                                        name={g.name}
                                        rating={g.rating}
                                        desc={g.desc}
                                        image={g.background_image || cover}
                                        released={g.released}
                                    />
                                ))}
                        </div>
                        <Pagination
                            page={pagination.current}
                            max={pagination.max}
                        />
                    </>
                ) : (
                    "Loading Games"
                )
            ) : (
                "No Games Found"
            )}
        </Styled>
    )
}
