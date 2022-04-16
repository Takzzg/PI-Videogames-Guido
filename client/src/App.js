import "./App.css"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Create, Detail, Home, Landing, Test } from "./pages"
import { Navbar } from "./components"

function App() {
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
