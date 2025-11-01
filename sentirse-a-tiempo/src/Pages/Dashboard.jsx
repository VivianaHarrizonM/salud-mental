export default function Dashboard(){
const handleLogout = () => {
localStorage.removeItem('auth_token')
window.location.href = '/'
}


return (
<div className="container" style={{maxWidth:900}}>
<h2>Dashboard</h2>
<p className="text-muted">Contenido exclusivo para usuarios registrados. Aquí podrás ver tu progreso y lecciones.</p>
<div style={{marginTop:18}}>
<button onClick={handleLogout} style={{background:'transparent',border:'1px solid rgba(0,0,0,0.08)',padding:10,borderRadius:10}}>Cerrar sesión</button>
</div>
</div>
)
}