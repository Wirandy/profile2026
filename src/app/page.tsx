import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Navbar />
      <div className="snap-start min-h-screen">
        <Hero />
      </div>
      <div className="snap-start min-h-screen">
        <About />
      </div>
      <div className="snap-start min-h-screen flex items-center justify-center">
        <Skills />
      </div>
      <div className="snap-start min-h-screen flex items-center justify-center">
        <Projects />
      </div>
      <div className="snap-start min-h-screen flex flex-col justify-center">
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
