import Home from "./pages/Home"
import CountryDetails from "./pages/CountryDetails"
import { useState } from "react"
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  const [darkMode,setDarkMode] =useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode}  setDarkMode={setDarkMode} />} />
        <Route path="/country/:code" element={<CountryDetails darkMode={darkMode}  setDarkMode={setDarkMode}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
