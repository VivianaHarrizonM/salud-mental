import React from 'react'
import { Link } from 'react-router-dom'
import './Cursos.css'

export default function Cursos() {
  return (
    <section className="curso">
      <div className="curso-overlay"></div>
      <div className="container curso-inner">
        <div className="curso-copy">
          <div className="lead">Mini-curso gratuito · 5 lecciones</div>
          <h1>¿Sientes que llegaste tarde a la vida?</h1>
          <p className="text-muted">
            Estrategias prácticas y ejercicios para replantear expectativas,
            crear pequeños hábitos y reconectar con lo que deseas ahora — sin presión.
          </p>
          <div className="boton">
            <Link to="/dashboard" className="pill pill-primary">
              Explora los módulos
            </Link>
            <Link to="/register" className="pill pill-primary">
              Inscríbete gratis
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
