import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"

import { fetchDetail } from "../redux/actions/async"
import cover from "../assets/cover.jpg"
import { GameHeader, Block, Message } from "../components"

const Styled = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;

    .body {
        display: grid;
        grid-template-columns: auto 1fr auto auto;

        grid-column-gap: 2rem;
        padding: 1rem;

        .title {
            text-align: center;
            font-size: 2rem;
        }

        .genres,
        .platforms {
            display: flex;
            flex-direction: column;

            gap: 1rem;
            min-width: 15rem;
        }

        .desc {
            max-width: 800px;
        }

        .images {
            display: flex;
            flex-direction: column;
            max-width: 20vw;
        }
    }
`

export const Detail = () => {
    const { id } = useParams()

    const detail = useSelector((state) => state.root.detail)
    const image = detail.background_image || cover
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchDetail(id))
    }, [dispatch, id])

    if (detail.id?.toString() !== id.toString())
        return <Message>Loading</Message>

    return (
        <Styled img={image}>
            <GameHeader
                name={detail.name}
                rating={detail.rating}
                released={detail.released}
                image={image}
            />

            <div className="body">
                <div className="images">
                    <img src={image} alt="cover" />
                    {detail.background_image_additional && (
                        <img
                            src={detail.background_image_additional}
                            alt="cover"
                        />
                    )}
                    {detail.short_screenshots?.map((s) => (
                        <img src={s.image} alt="screenshot" />
                    ))}
                </div>

                <div className="desc">
                    <span className="title">Synopsis</span>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: detail.desc || detail.description
                        }}
                    />
                </div>

                {detail.genres && (
                    <div className="genres">
                        <span className="title">Genres</span>
                        {detail.genres.map((g) => (
                            <Block key={g.id} data={g} />
                        ))}
                    </div>
                )}

                {detail.platforms && (
                    <div className="platforms">
                        <span className="title">Platforms</span>
                        {detail.platforms.map((p) => (
                            <Block
                                key={p.platform?.id || p.id}
                                data={p.platform || p}
                            />
                        ))}
                    </div>
                )}
            </div>
        </Styled>
    )
}
