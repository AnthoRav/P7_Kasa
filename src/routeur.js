import { Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home'
import Error from './pages/Error/Error'
import LodgingCard from './pages/LodgingCard/LodgingCard'
import About from './pages/About/About'

function Routeur() {
    return (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lodgings/:id" element={<LodgingCard />} />
              <Route path="/about" element={<About />} />
              <Route path="/*" element={<Error />} />
              <Route path="/lodgings/*" element={<Error />} />
          </Routes>
    )
}
export default Routeur