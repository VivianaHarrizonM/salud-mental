import { useParams, Link } from "react-router-dom";
import "./CourseDetail.css";

const courses = [
  {
    id: "1",
    title: "Manejar la sensación de ir tarde en la vida",
    description:
      "Aprende a reconocer, aceptar y transformar la sensación de estar atrasado respecto a tus metas.",
    content:
      "En este curso exploramos las causas psicológicas del autosabotaje y la comparación constante. Incluye ejercicios guiados y reflexiones personales.",
    image: "/assets/curso1.jpg",
  },
  {
    id: "2",
    title: "Autoestima y resiliencia",
    description: "Fortalece tu confianza y aprende a superar los desafíos emocionales.",
    content:
      "Incluye prácticas de autoafirmación, respiración consciente y reestructuración cognitiva para momentos de inseguridad.",
    image: "/assets/curso2.jpg",
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
        <p>{course.content}</p>
        <Link to="/" className="back-link">
          ← Volver
        </Link>
      </div>
    </div>
  );
};

export default CourseDetail;
