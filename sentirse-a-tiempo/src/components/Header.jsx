import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'


export default function Header(){
  const location = useLocation()


  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <div className="logo">ST</div>
          <div>
            <div className="brand-title">Sentirse a Tiempo</div>
            <div className="brand-sub text-muted">Recursos para vivir sin prisas</div>
          </div>
        </div>

        <nav className="nav">
          <Link to="/">Inicio</Link>
          <Link to="/">Recursos</Link>
          <Link to="/">Comunidad</Link>
          {location.pathname !== '/login' && (
          <Link to="/login" className="btn-ghost">Iniciar</Link>
          )}
          {location.pathname !== '/register' && (
          <Link to="/register" className="btn-primary">Regístrate</Link>
          )}
        </nav>
      </div>
    </header>
  )
}