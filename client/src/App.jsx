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

    background-color: rgba(0, 0, 0, 0.9);
    color: white;

    min-height: 100vh;
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
