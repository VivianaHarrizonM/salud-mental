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
      "La autoestima no es sentirte bien todo el tiempo, sino aprender a sostenerte incluso en los días grises. Es la raíz que te recuerda que tu valor no depende de la aprobación externa, y la resiliencia es la fuerza que te permite florecer aun en medio de la tormenta. En este módulo exploraremos: - Creencias limitantes que han debilitado tu confianza y cómo transformarlas en pensamientos que te impulsen. - Ejercicios de autocompasión, para que aprendas a hablarte con la misma ternura con la que acompañarías a alguien que amas. - Prácticas de resiliencia, que te ayudarán a levantarte después de las caídas y a reconocer que cada tropiezo también es aprendizaje.- Dinámicas de afirmación personal, para fortalecer tu voz interior y recordar que tu historia merece ser contada con dignidad. El curso te ofrece: - Reflexiones guiadas que iluminan las raíces de tu autoestima y te invitan a nutrirla con paciencia. - Herramientas de resiliencia emocional que te enseñan a transformar la adversidad en crecimiento. - Momentos de pausa consciente para reconectar con tu fuerza interna y cultivar serenidad en medio de la dificultad. Al finalizar, habrás aprendido a sostenerte con confianza y a mirar los desafíos como oportunidades para crecer. Descubrirás que la verdadera resiliencia no es resistir sin quebrarse, sino aprender a recomponerte con amor y seguir adelante con más fuerza que antes.",
    image: "/assets/estima.png",
  },
  {
    id: "3",
    title: "Relaciones y ritmo propio",
    description: "Aprende a comunicar límites y cuidar tu energía.",
    preview:
      "Muchas veces nos desconectamos de nuestro ritmo...",
    content:
    "Muchas veces nos desconectamos de nuestro ritmo por intentar sostener relaciones que nos exigen más de lo que podemos dar. En ese esfuerzo, la energía se dispersa y la voz interior se silencia. Este módulo es una invitación a reconectar con tu compás vital, a reconocer que cuidar de ti también es un acto de amor hacia los demás. Aquí aprenderás a: - Identificar patrones de sobrecarga emocional, esos momentos en que das más de lo que tienes y terminas agotada.- Reconocer tus límites naturales, no como barreras rígidas, sino como espacios de respeto y cuidado.- Comunicar con claridad y ternura, expresando tus necesidades sin culpa ni miedo.- Cultivar relaciones más auténticas, donde tu energía se comparte desde la abundancia y no desde la carencia.El curso incluye:- Reflexiones guiadas para observar cómo tus vínculos afectan tu ritmo interno.- Prácticas de pausa consciente que te ayudan a volver a ti antes de responder o comprometerte.- Ejercicios de comunicación empática, para expresar límites de manera firme pero amorosa.- Dinámicas de autocuidado energético, que te enseñan a proteger tu vitalidad y a nutrir tu presencia en cada relación.Al finalizar, habrás aprendido que cuidar tu energía no es egoísmo, sino la base para construir vínculos más sanos y duraderos. Descubrirás que tu ritmo propio es el mejor regalo que puedes ofrecer: cuando caminas fiel a ti misma, tus relaciones florecen en armonía.",
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

    <section className="course-detail container">
      {/* HERO */}
      <div className="course-hero">
        <img
          src={course.image}
          alt={course.title}
          className="course-image"
        />

        <div className="course-info">
          <h1>{course.title}</h1>
          <p >{course.description}</p>

          {!isAuth && (
            <div className="course-cta">
              <p className="course-preview">{course.preview}</p>
              <p className="text-muted">
                Regístrate gratis para acceder al contenido completo del curso.
              </p>
              <Link to="/login" className="pill pill-primary">
                Desbloquear curso
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* CONTENIDO */}
      {isAuth && (
        <div className="course-info">
          {course.content
            .split("-")
            .filter(Boolean)
            .map((block, index) => (
              <div key={index}  >
                <p>{block.trim()}</p>
              </div>
            ))}

          <Link to="/" className="back-link">
            ← Volver al inicio
          </Link>
        </div>
      )}
    </section>
  )

}
