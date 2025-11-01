
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
import Header from '../components/Header'
import Footer from '../components/Footer'


const useAuth = () => {
const token = localStorage.getItem('auth_token')
return { user: token ? { name: 'Usuario' } : null }
}


export default function AppRouter(){
const { user } = useAuth()


return (
  <BrowserRouter>
    <Header />
    <main style={{minHeight:'70vh'}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
    <Footer />
</BrowserRouter>
)
}