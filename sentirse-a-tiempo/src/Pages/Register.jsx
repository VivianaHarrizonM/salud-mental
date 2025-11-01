import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Register(){

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const navigate = useNavigate()


const handleSubmit = (e) => {
  e.preventDefault()
// Simulación: guardamos token
  localStorage.setItem('auth_token','demo-token')
  navigate('/dashboard')
}


  return (
    <div  className="container" style={{maxWidth:560, background:'var(--card)', borderRadius:25}}>
      <h2>Crear cuenta</h2>
      <form onSubmit={handleSubmit} style={{display:'grid',gap:10}}>

        <label className="text-muted">Nombre</label>
        <input value={name} onChange={e=>setName(e.target.value)} style={{borderRadius:5}} required />

        <label className="text-muted">Correo</label>
        <input value={email} onChange={e=>setEmail(e.target.value)} style={{borderRadius:5}} type="email" required />

        <label className="text-muted">Contraseña</label>
        <input value={password} onChange={e=>setPassword(e.target.value)} style={{borderRadius:5}} type="password" required />

        <div style={{display:'flex',gap:8}}>
          <button type="submit" style={{flex:1,background:'var(--accent)',color:'white',padding:10,borderRadius:10}}>Registrarme</button>
        </div>
      </form>
    </div>
  )
}