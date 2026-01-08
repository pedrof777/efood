import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SaibaMais from './pages/SaibaMais'
import Checkout from './pages/Checkout'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/saibamais/:id" element={<SaibaMais />} />
    <Route path="/saibamais/:id/checkout" element={<Checkout />} />
  </Routes>
)
export default Rotas
