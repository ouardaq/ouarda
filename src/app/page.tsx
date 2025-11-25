import Image from "next/image";
import Terminal from '@/components/Terminal';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Skills from '@/components/Skills';




export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="mb-16 py-16">
        <h1 className="text-3xl mb-4 font-normal">Ouarda Qerrouech</h1>
        <Terminal 
          text='Integration Developer / Software engineer' 
          className="text-xl mb-6"
        />
    
        <p className="max-w-2xl text-lg">
        {`A recent Master's graduate and a versatile software developer with a passion for building and coding . Driven by my love for learning-whether its a programming language or a human language- i am always passionate about my .. I am also a space enthusiast and an avid gamer .`}
        </p>
      </section>
      
            <About />
            <Experience />
            <Education />
            <Projects />
            <Skills />

      
    </div>
  );
}
