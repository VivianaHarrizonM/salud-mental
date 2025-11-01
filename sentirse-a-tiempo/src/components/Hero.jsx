import React from 'react'
import './Hero.css'


export default function Hero(){
return (
  <section className="hero">
    <div className="hero-overlay"></div>
    <div className="container hero-inner">
      <div className="hero-copy">
        <div className="lead">Mini-curso gratuito · 5 lecciones</div>
        <h1>¿Sientes que llegaste tarde a la vida?</h1>
        <p className="text-muted">Estrategias prácticas y ejercicios para replantear expectativas, crear pequeños hábitos y reconectar con lo que deseas ahora — sin presión.</p>
        <div style={{display:'flex',gap:'12px',marginTop:18}}>
          <a href="#cursos" className="pill">Explora los módulos</a>
          <a href="/register" className="pill">Inscríbete gratis</a>
        </div>
      </div>
      <div className="hero-media">
        {/* espacio para una tarjeta o imagen secundaria si se quiere */}
      </div>
    </div>
  </section>
  )
  }