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
        {`I am a versatile Software Developer and recent Master's graduate with a passion for building and coding. 
        I am driven by a love for learning—whether it’s a new programming syntax or a human language. 
        I'm rarely away from the keyboard; if I'm not compiling code, I am probably gaming.`}
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
