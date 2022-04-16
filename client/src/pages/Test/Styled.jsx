import styled from "styled-components"

const Sblock = styled.div`
    width: 100px;
    height: 100px;
    background-color: hsl(
        ${(props) =>
            `${props.color[0]}, ${props.color[1]}%, ${props.color[2]}%`}
    );
`

const Styled = styled.div`
    display: flex;
    flex-direction: column;

    .title {
        font-size: 3rem;
    }

    .palette > * {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .gamesCont {
        display: flex;
        align-items: center;
        justify-content: center;

        & > * {
            width: 20%;
            height: 300px;
        }
        /* grid-template-columns: repeat(5, 1fr); */
    }
`

export { Sblock, Styled }
