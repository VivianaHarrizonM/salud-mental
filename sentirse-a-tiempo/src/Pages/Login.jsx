import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'


export default function Login(){
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const navigate = useNavigate()


const handleSubmit = (e) => {
e.preventDefault()
// Simulación: guarda token y navega
localStorage.setItem('auth_token','demo-token')
navigate('/dashboard')
}


return (
<div className="container" style={{maxWidth:560}}>
<h2>Iniciar sesión</h2>
<form onSubmit={handleSubmit} style={{display:'grid',gap:10}}>
<label className="text-muted">Correo</label>
<input value={email} onChange={e=>setEmail(e.target.value)} type="email" required />
<label className="text-muted">Contraseña</label>
<input value={password} onChange={e=>setPassword(e.target.value)} type="password" required />
<div style={{display:'flex',gap:8}}>
<button type="submit" style={{flex:1,background:'var(--accent)',color:'white',padding:10,borderRadius:10}}>Entrar</button>
<Link to="/register" style={{alignSelf:'center'}}>Crear cuenta</Link>
</div>
</form>
</div>
)
}