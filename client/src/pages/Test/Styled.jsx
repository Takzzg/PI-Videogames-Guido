import styled from "styled-components"

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

export { Styled }
