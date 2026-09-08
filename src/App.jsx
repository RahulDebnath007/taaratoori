import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Events from './pages/Events'
import Employees from './pages/Employees'
import EmployeeDetail from './pages/EmployeeDetail'
import Samples from './pages/Samples'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 sm:px-10 pt-14 sm:pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/events" element={<Events />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/employees/:id" element={<EmployeeDetail />} />
          <Route path="/samples" element={<Samples />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
