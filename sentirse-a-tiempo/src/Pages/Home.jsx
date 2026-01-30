
import CoursesSection from '../components/CoursesSection';
import IntroSection from '../components/IntroSection';
import Cursos from '../components/Cursos';

export default function Home() {
  return (
    <div>
      <div className="container">
        < IntroSection/>
        <Cursos />
      </div>
      
      <CoursesSection />
    </div>
  );
}
