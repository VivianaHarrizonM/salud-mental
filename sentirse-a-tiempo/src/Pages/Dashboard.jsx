import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('auth_token')
    navigate('/login', { replace: true })
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Dashboard</h1>
      <p>Contenido exclusivo para usuarios registrados. Aquí podrás ver tu progreso y lecciones.</p>

      <button
        onClick={handleLogout}
        style={{
          marginTop: 20,
          padding: '10px 16px',
          background: '#ff6b6b',
          color: 'white',
          borderRadius: 8,
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Cerrar sesión
      </button>
    </div>
  )
}