import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Payment } from './pages/Payment'
import { Success } from './pages/Success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/successPage" element={<Success />}></Route>
      </Route>
    </Routes>
  )
}
