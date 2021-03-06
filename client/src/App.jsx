import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

import { Create, Detail, Home, Landing } from "./pages"
import { fetchGames, fetchGenres } from "./redux/actions/async"
import styled from "styled-components"
import { Navbar } from "./components"
import { theme } from "./assets/theme"

const Styled = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;

    min-height: 0;
    min-width: 0;
    height: 100vh;

    background-color: ${theme.bg_medium};
    color: whitesmoke;
    scrollbar-color: ${theme.bg_light} ${theme.bg_dark};

    input,
    button,
    textarea {
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

    button {
        cursor: pointer;
    }

    textarea {
        resize: none;
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
                </Routes>
            </BrowserRouter>
        </Styled>
    )
}

export default App
