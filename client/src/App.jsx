import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

import "./App.css"
import { Create, Detail, Home, Landing, Test } from "./pages"
import { Navbar } from "./components"
import { fetchGames } from "./redux/actions"

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchGames())
    }, [dispatch])

    return (
        <div className="App">
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
        </div>
    )
}

export default App
