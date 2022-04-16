import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

import { Create, Detail, Home, Landing, Test } from "./pages"
import { Navbar } from "./components"
import { fetchGames } from "./redux/actions"
import styled from "styled-components"

const Styled = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;

    background-color: #363636;
    color: white;

    height: 100vh;
    overflow: hidden;
`

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
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
