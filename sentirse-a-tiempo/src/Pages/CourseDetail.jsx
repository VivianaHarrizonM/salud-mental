import { useParams, Link } from "react-router-dom";
import "./CourseDetail.css";

const courses = [ 
  {
    id: "1",
    title: "Manejar la sensación de ir tarde en la vida",
    description:
      "Aprende a reconocer, aceptar y transformar la sensación de estar atrasado respecto a tus metas.",
    content:
      "Este curso te ayudará a comprender de dónde surge la sensación de 'ir tarde' en la vida: las comparaciones sociales, la presión del éxito y las expectativas familiares o culturales. A través de ejercicios de autoconocimiento, aprenderás a cuestionar los estándares externos y a construir una visión de progreso más auténtica y alineada contigo. Exploraremos estrategias para reconectar con tu propio ritmo, reducir la ansiedad por el futuro y enfocarte en lo que realmente tiene sentido para ti. Incluye meditaciones guiadas, reflexiones escritas y ejemplos prácticos para aplicar en tu día a día.",
    image: "/src/assets/reloj.png",
  },
  {
    id: "2",
    title: "Autoestima y resiliencia",
    description:
      "Fortalece tu confianza y aprende a superar los desafíos emocionales.",
    content:
      "Este módulo está diseñado para que reconectes con tu valor personal y construyas una base sólida de autoestima. Iniciaremos explorando las creencias limitantes que suelen aparecer en momentos de duda o fracaso, y aprenderás cómo transformarlas mediante técnicas de reestructuración cognitiva. También practicaremos ejercicios de autoafirmación, respiración consciente y escritura terapéutica, que te permitirán afrontar los desafíos desde una perspectiva más compasiva. Al finalizar, tendrás herramientas para reconocer tus logros, aceptar tus procesos y mantener una actitud resiliente ante los cambios de la vida.",
    image: "/src/assets/estima.png",
  },
  {
    id: "3",
    title: "Relaciones y ritmo propio",
    description:
      "Descubre cómo comunicar tus límites y mantener relaciones que respeten tu ritmo personal.",
    content:
      "A lo largo de este curso, aprenderás a identificar los patrones que te hacen sobrecargarte o ceder ante las expectativas de los demás. Reflexionaremos sobre cómo establecer límites claros sin culpa, cómo comunicar tus necesidades desde la calma y cómo sostener relaciones más equilibradas y genuinas. Te brindaremos herramientas para reconocer cuándo estás actuando desde la comparación o la obligación, y cómo regresar a tu centro para priorizar el bienestar. Incluye prácticas de comunicación consciente, gestión emocional y ejercicios para fortalecer tu presencia en los vínculos más importantes de tu vida.",
    image: "/src/assets/ritmo.png",
  },
];
const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="course-detail">
        <h2>Curso no encontrado</h2>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="course-detail">
      <img src={course.image} alt={course.title} className="course-image" />
      <div className="course-info">
        <h1>{course.title}</h1>
        <p className="course-description">{course.description}</p> 
        <p>{course.content}</p>
        <Link to="/" className="back-link">
          ← Volver
        </Link>
      </div>
    </div>
  );
};

export default CourseDetail;
