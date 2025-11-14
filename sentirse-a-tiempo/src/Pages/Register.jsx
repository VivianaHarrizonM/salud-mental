import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('auth_token', 'demo-token')
    navigate('/dashboard')
  }

  return (
    <div
      className="container"
      style={{
        maxWidth: 440,
        background: 'var(--card)',
        borderRadius: 25,
        padding: '3rem 2.5rem',
        boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
        margin: '60px auto',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: 25 }}>Crear cuenta</h2>

      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 14 }}>
        <label className="text-muted">Nombre</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            borderRadius: 8,
            border: '1px solid #ddd',
            padding: '10px 12px',
          }}
          required
        />

        <label className="text-muted">Correo</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          style={{
            borderRadius: 8,
            border: '1px solid #ddd',
            padding: '10px 12px',
          }}
          required
        />

        <label className="text-muted">Contraseña</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          style={{
            borderRadius: 8,
            border: '1px solid #ddd',
            padding: '10px 12px',
          }}
          required
        />

        <button
          type="submit"
          style={{
            background: 'var(--accent)',
            color: 'white',
            padding: '12px',
            borderRadius: 12,
            fontWeight: 600,
            letterSpacing: 0.3,
            marginTop: 10,
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.background = '#84ddbc')}
          onMouseOut={(e) => (e.target.style.background = 'var(--accent)')}
        >
          Registrarme
        </button>

        <p style={{ textAlign: 'center', marginTop: 15 }}>
          ¿Ya tienes cuenta?{' '}
          <Link to="/login" style={{ color: 'var(--accent)', fontWeight: 500 }}>
            Inicia sesión
          </Link>
        </p>
      </form>
    </div>
  )
}
