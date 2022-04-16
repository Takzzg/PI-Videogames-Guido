import styled from "styled-components"

const Styled = styled.div`
    display: grid;
    grid-template-columns: 25% 1fr;

    position: relative;
    min-height: 0;

    .searchField {
        position: sticky;
        top: 0;
    }
`

export { Styled }
