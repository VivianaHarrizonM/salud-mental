import { useState } from 'react'
import { Link } from 'react-router-dom'
import './CoursesSection.css'

const courses = [
  { id: 1, title: 'Redefinir el tiempo', duration: '8 min', desc: 'Identifica expectativas heredadas y crea tu mapa personal.' },
  { id: 2, title: 'Pequeños hábitos', duration: '10 min', desc: 'Establece micro-hábitos sin agobio.' },
  { id: 3, title: 'Relaciones y ritmo propio', duration: '12 min', desc: 'Diseña conexiones que respeten tu ritmo.' }
]

export default function CoursesSection() {
  const [showRefs, setShowRefs] = useState(false)
  const isAuth = Boolean(localStorage.getItem('auth_token'))

  return (
    <section id="cursos" className="courses container">
      <h2>Contenido del mini-curso</h2>

      <div className="courses-grid">
        {courses.map(course => {
          const linkTo = isAuth ? `/courses/${course.id}` : '/login'

          return (
            <Link key={course.id} to={linkTo} className="course-card-link">
              <article className={`course-card ${!isAuth ? 'locked' : ''}`}>
                <div className="course-number">{course.id}</div>
                <h4>{course.title}</h4>
                <div className="meta">Duración: {course.duration}</div>
                <p className="text-muted">{course.desc}</p>

                {!isAuth && (
                  <div className="course-lock">
                    🔒 Requiere registro
                  </div>
                )}
              </article>
            </Link>
          )
        })}
      </div>

      <div className="references-toggle">
        <button onClick={() => setShowRefs(!showRefs)}>
          {showRefs ? 'Ocultar referencias' : 'Ver referencias bibliográficas'}
        </button>
      </div>

      {showRefs && (
        <div className="references fade-in">
          <h3>Referencias</h3>
          <ul>
            <li>Zimbardo, P. G., & Boyd, J. N. (2008). <i>The Time Paradox.</i></li>
            <li>Lyubomirsky, S. (2008). <i>The How of Happiness.</i></li>
            <li>Festinger, L. (1954). <i>A Theory of Social Comparison Processes.</i></li>
            <li>Neff, K. D. (2011). <i>Self-Compassion.</i></li>
          </ul>
        </div>
      )}
    </section>
  )
}