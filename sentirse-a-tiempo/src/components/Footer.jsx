import './Footer.css'


export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container" style={{display:'flex',flexDirection:'column',alignItems:'center',gap:8}}>
        <div className="text-muted">© Sentirse a Tiempo — Hecho con cariño</div>
      </div>
    </footer>
  )
}