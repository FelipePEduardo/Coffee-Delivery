import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './DefaultLayout'
import { Checkout } from './pages/Checkout'
import { ConfirmedOrder } from './pages/ConfirmedOrder'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmedOrder" element={<ConfirmedOrder />} />
      </Route>
    </Routes>
  )
}
