import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./Components/Common/Footer"
import Home from "./Components/Home"
import Navbar from "./Components/Common/Navbar"
import Docs from "./Components/Docs"
import Versions from "./Components/Versions"
import Error from "./Error"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/versions" element={<Versions />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
