import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/contact';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Contact />
    </div>
  );
}