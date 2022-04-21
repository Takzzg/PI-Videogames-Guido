import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"

import { fetchDetail } from "../../redux/actions/async"
import cover from "../../assets/cover.jpg"
import { theme } from "../../assets/theme"
import { Genre, Message } from "../../components"

const Styled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;

    .header {
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
            align-items: baseline;
            position: absolute;
            bottom: 0%;
            width: 100%;
            z-index: 2;

            padding: 2rem;

            background: linear-gradient(
                transparent,
                ${theme.bg_medium}88 3rem,
                ${theme.bg_medium}
            );

            .name {
                font-size: 3rem;
            }

            .info {
                display: flex;
                padding: 1rem;
                gap: 1rem;
            }
        }
    }

    .body {
        display: flex;
        /* grid-template-columns: 1fr auto; */
        justify-content: center;

        grid-column-gap: 2rem;
        padding: 1rem;

        .title {
            text-align: center;
            font-size: 2rem;
        }

        .genres {
            display: flex;
            flex-direction: column;

            gap: 1rem;
            min-width: 20rem;
        }

        .desc {
            max-width: 800px;
        }

        .images {
            display: grid;

            img {
                max-width: 20vw;
            }
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
        <Styled img={image || cover}>
            <div className="header">
                <span className="title">
                    <span className="name">{detail.name}</span>
                    <div className="info">
                        <div className="rating">Rating: {detail.rating}/5</div>
                        <div className="released">
                            Released: {detail.released}
                        </div>
                    </div>
                </span>
                <img src={image || cover} alt="cover" />
            </div>

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

                <div className="genres">
                    <span className="title">Genres</span>
                    {detail.genres?.map((g) => (
                        <Genre
                            key={g.id}
                            image={g.image_background || g.image}
                            name={g.name}
                        />
                    ))}
                </div>
            </div>
        </Styled>
    )
}
