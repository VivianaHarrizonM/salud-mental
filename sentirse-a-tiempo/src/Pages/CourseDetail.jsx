import { useParams, Link } from "react-router-dom"
import "./CourseDetail.css"

const courses = [
  {
    id: "1",
    title: "Manejar la sensación de ir tarde en la vida",
    description: "Aprende a reconocer, aceptar y transformar la sensación de estar atrasado respecto a tus metas.",
    preview:
      "Muchas personas viven con la idea constante de que van tarde...",
    content:
      "Este curso te ayudará a comprender de dónde surge la sensación de 'ir tarde' en la vida y cómo transformarla en una oportunidad de autoconocimiento. Exploraremos tres raíces principales: Comparaciones sociales: cómo las redes, los logros ajenos y las narrativas de éxito generan la idea de estar atrasado. -Presión cultural: los mandatos sobre edad, pareja, carrera y familia que marcan un “reloj” externo. -Expectativas heredadas: las voces de la familia, la escuela y la sociedad que se convierten en estándares invisibles. A través de ejercicios guiados, aprenderás a: - Identificar tus propios ritmos y diferenciar lo que realmente deseas de lo que sientes que “deberías” hacer. - Cuestionar los estándares colectivos y reemplazarlos por una noción de progreso más personal y auténtica.- Reconocer los momentos en que la ansiedad por el futuro te roba presencia, y aplicar técnicas para volver al aquí y ahora. El curso incluye: - Reflexiones escritas para observar tus pensamientos y darles un nuevo significado. - Prácticas de pausa consciente que te ayudarán a regular la sensación de urgencia y cultivar calma. - Herramientas de reencuadre para transformar la idea de “ir tarde” en la certeza de que tu camino es único. - Dinámicas de autoafirmación que fortalecen tu confianza y celebran tus logros sin comparaciones. Al finalizar, tendrás un mapa más claro de tu propio tiempo vital, con recursos prácticos para reducir la ansiedad y abrazar tu proceso con amabilidad. La meta no es acelerar ni competir, sino reconciliarte con tu ritmo y confiar en que estás exactamente donde necesitas estar",
    image: "/assets/reloj.png",
  },
  {
    id: "2",
    title: "Autoestima y resiliencia",
    description: "Fortalece tu confianza y aprende a sostenerte en momentos difíciles.",
    preview:
      "La autoestima no es sentirte bien todo el tiempo...",
    content:
      "Exploraremos creencias limitantes, ejercicios de autocompasión...",
    image: "/assets/estima.png",
  },
  {
    id: "3",
    title: "Relaciones y ritmo propio",
    description: "Aprende a comunicar límites y cuidar tu energía.",
    preview:
      "Muchas veces nos desconectamos de nuestro ritmo...",
    content:
      "Este módulo te acompaña a identificar patrones de sobrecarga emocional...",
    image: "/assets/ritmo.png",
  },
]

export default function CourseDetail() {
  const { id } = useParams()
  const course = courses.find(c => c.id === id)
  const isAuth = Boolean(localStorage.getItem("auth_token"))

  if (!course) {
    return (
      <div className="course-detail container">
        <h2>Curso no encontrado</h2>
        <Link to="/">Volver al inicio</Link>
      </div>
    )
  }

  return (
    <div className="course-detail container">
      <img src={course.image} alt={course.title} className="course-image" />

      <div className="course-info">
        <h1>{course.title}</h1>
        <p className="course-description">{course.description}</p>

        {!isAuth ? (
          <>
            <p className="course-preview">{course.preview}</p>

            <div className="course-cta">
              <p className="text-muted">
                Regístrate gratis para acceder al contenido completo del curso.
              </p>
              <Link to="/register" className="pill pill-primary">
                Desbloquear curso
              </Link>
            </div>

            <Link to="/" className="back-link">← Volver</Link>
          </>
        ) : (
          <>
            <p>{course.content}</p>
            <Link to="/home" className="back-link">
              ← Volver al inicio
            </Link>
          </>
        )}
      </div>
    </div>
  )
}
