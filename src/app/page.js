import Hero from '../components/Hero';
import Services from '../components/Services';
import Capabilities from '../components/Capabilities';
import Portfolio from '../components/Portfolio';
import Process from '../components/Process';
import Stats from '../components/Stats';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="relative bg-black">
      <Hero />
      <Services />
      <Capabilities />
      <Portfolio />
      <Process />
      <Stats />
      <Contact />
    </main>
  );
}
