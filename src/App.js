import React from "react"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Header from './components/Header/Header'
import Error from './components/Error/Error'

function App() {
  return (
      <div className="App">
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              
              <Route path="/*" element={<Error />} />
          </Routes>
      </div>
  )
}

export default App;
