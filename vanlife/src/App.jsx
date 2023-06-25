import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans/Vans"
import VanDetail from "./pages/Vans/VanDetails"
import Layout from './components/Layout'
import Host from './pages/Host/Host'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'

import "../server"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/vans" element={<Vans/>} />
        <Route path="/vans/:id" element={<VanDetail />} />
        <Route path="/host" element={<Host />} />
        <Route path="/income" element={<Income />} />
        <Route path="/reviews" element={<Reviews />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}


export default App;
  
