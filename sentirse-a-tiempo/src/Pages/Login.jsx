import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Login() {
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
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
        background: 'var(--bg)',
        padding: '2rem',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 420,
          background: 'var(--card)',
          borderRadius: 16,
          padding: '2.5rem',
          boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Iniciar sesión</h2>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 14 }}>
          <label className="text-muted">Correo electrónico</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="tu@correo.com"
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
            placeholder="••••••••"
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
              borderRadius: 10,
              fontWeight: 600,
              letterSpacing: 0.3,
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.background = '#84ddbc')}
            onMouseOut={(e) => (e.target.style.background = 'var(--accent)')}
          >
            Entrar
          </button>

          <p style={{ textAlign: 'center', marginTop: 10 }}>
            ¿No tienes cuenta?{' '}
            <Link to="/register" style={{ color: 'var(--accent)', fontWeight: 500 }}>
              Crear cuenta
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
