import './CoursesSection.css'


const courses = [
{id:1, title:'Redefinir el tiempo', duration:'8 min', desc:'Identifica expectativas heredadas y crea tu mapa personal de prioridades.'},
{id:2, title:'Pequeños hábitos', duration:'10 min', desc:'Técnicas para establecer micro-hábitos sin agobio.'},
{id:3, title:'Relaciones y ritmo propio', duration:'12 min', desc:'Comunicar límites y diseñar conexiones que respeten tu ritmo.'}
]


export default function CoursesSection(){
return (
<section id="cursos" className="courses container">
<h2>Contenido del mini-curso</h2>
<div className="courses-grid">
{courses.map(c => (
<article key={c.id} className="course-card">
<h4>{c.title}</h4>
<div className="meta">Duración: {c.duration}</div>
<p className="text-muted">{c.desc}</p>
</article>
))}
</div>
</section>
)
}