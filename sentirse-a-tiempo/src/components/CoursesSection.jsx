import { useState } from 'react';
import { Link } from 'react-router-dom';
import './CoursesSection.css';

const courses = [
  { id: 1, title: 'Redefinir el tiempo', duration: '8 min', desc: 'Identifica expectativas heredadas y crea tu mapa personal de prioridades.' },
  { id: 2, title: 'Pequeños hábitos', duration: '10 min', desc: 'Técnicas para establecer micro-hábitos sin agobio.' },
  { id: 3, title: 'Relaciones y ritmo propio', duration: '12 min', desc: 'Comunicar límites y diseñar conexiones que respeten tu ritmo.' }
];

export default function CoursesSection() {
  const [showRefs, setShowRefs] = useState(false);

  return (
    <section id="cursos" className="courses container">
      <h2>Contenido del mini-curso</h2>

      <div className="courses-grid">
        {courses.map(c => (
          <Link key={c.id} to={`/courses/${c.id}`} className="course-card-link">
            <article className="course-card">
              <div className="course-number icon-bubble icon">{c.id}</div>
              <h4>{c.title}</h4>
              <div className="meta">Duración: {c.duration}</div>
              <p className="text-muted">{c.desc}</p>
            </article>
          </Link>
        ))}
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
            <li>
              Zimbardo, P. G., & Boyd, J. N. (2008). <i>The Time Paradox: The New Psychology of Time That Will Change Your Life.</i> Free Press.
            </li>
            <li>
              Lyubomirsky, S. (2008). <i>The How of Happiness: A Scientific Approach to Getting the Life You Want.</i> Penguin Press.
            </li>
            <li>
              Festinger, L. (1954). <i>A Theory of Social Comparison Processes.</i> Human Relations, 7(2), 117–140.
            </li>
            <li>
              Neff, K. D. (2011). <i>Self-Compassion: The Proven Power of Being Kind to Yourself.</i> HarperCollins.
            </li>
          </ul>
        </div>
      )}
    </section>
  );
}
