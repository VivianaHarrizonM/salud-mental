
import Hero from '../components/Hero';
import CoursesSection from '../components/CoursesSection';
import IntroSection from '../components/IntroSection';

export default function Home() {
  return (
    <div>
      <div className="container">
        < IntroSection/>
        <Hero />
      </div>
      
      <CoursesSection />
    </div>
  );
}
