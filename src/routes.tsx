import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SaibaMais from './pages/SaibaMais'
import Checkout from './pages/Checkout'
import Delivery from './pages/Delivery'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/saibamais/:id" element={<SaibaMais />} />
    <Route path="/delivery" element={<Delivery />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)
export default Rotas
