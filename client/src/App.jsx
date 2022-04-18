import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

import { Create, Detail, Home, Landing, Test } from "./pages"
import { fetchGames, fetchGenres } from "./redux/actions/root"
import styled from "styled-components"
import { Navbar } from "./components"
import { theme } from "./assets/theme"

const Styled = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;

    min-height: 0;
    min-width: 0;
    width: 100vw;
    height: 100vh;

    background-color: ${theme.bg_medium};
    color: whitesmoke;

    overflow: hidden;

    input,
    button {
        background-color: ${theme.bg_light};
        color: white;
        border: none;
        padding: 0.5rem;
        line-height: 1rem;

        &:disabled {
            background-color: ${theme.bg_dark};
            color: ${theme.bg_light};
        }
    }
`

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchGenres())
        dispatch(fetchGames())
    }, [dispatch])

    return (
        <Styled className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/detail/:id" element={<Detail />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/test" element={<Test />} />
                </Routes>
            </BrowserRouter>
        </Styled>
    )
}

export default App
