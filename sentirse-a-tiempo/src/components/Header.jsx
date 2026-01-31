import React, { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import "./Header.css"

export default function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const isAuth = Boolean(localStorage.getItem("auth_token"))

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  const handleLogout = () => {
    localStorage.removeItem("auth_token")
    closeMenu()
    navigate("/", { replace: true })
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Marca */}
        <div className="brand">
          <div className="logo">ST</div>
          <div>
            <div className="brand-title">Sentirse a Tiempo</div>
            <div className="brand-sub text-muted">
              Recursos para vivir sin prisas
            </div>
          </div>
        </div>

        {/* Botón hamburguesa */}
        <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navegación */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <Link
            to="/"
            onClick={closeMenu}
            className={location.pathname === "/" ? "active" : ""}
          >
            Inicio
          </Link>

          <Link
            to="/recursos"
            onClick={closeMenu}
            className={location.pathname === "/cursos" ? "active" : ""}
          >
            Recursos
          </Link>


          {!isAuth ? (
            <>
              {location.pathname !== "/login" && (
                <Link to="/login" onClick={closeMenu} className="btn-ghost">
                  Iniciar
                </Link>
              )}
              {location.pathname !== "/register" && (
                <Link to="/register" onClick={closeMenu} className="btn-primary">
                  Regístrate
                </Link>
              )}
            </>
          ) : (
            <button onClick={handleLogout} className="btn-ghost">
              Cerrar sesión
            </button>
          )}
        </nav>
      </div>
    </header>
  )
}
