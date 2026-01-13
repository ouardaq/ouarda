import Terminal from '@/components/Terminal';

export default function About() {
  return (
    <section className="mb-16">
      <Terminal text="about me" className="section-title" />
      <div className="card">
        <p className="mb-4">
          Hello there! I'm Ouarda, born in Oujda from the east of Morocco . My fascination with computers began in childhood and evolved into a deep ardour for Computer Science.
        </p>
        <p className="mb-4">
            I'm a language-agnostic developer who thrives on breaking down complex problems and quickly mastering the right tools for the job.        </p>
        <p className="mb-4">
            I developed a passion for gaming early in life, long before I even understood the code behind the magic. What started as a childhood obsession 
            with beating the next level has grown into a deep appreciation for the craft. The elegance of the systems design, the technical marvels of the engines, 
            the freedom to build and explore new worlds—interactive entertainment captures my imagination like nothing else.
            </p>
        <p className="mb-4">
          I also have my eyes on the stars.
          I am an avid enthusiast of space science, fascinated by everything from astrophysics to the mysteries of the cosmos
        </p>
        <p className="mb-4">
          {/* <span className="dark:text-yellow-400 text-yellow-700 font-mono rounded">
            // ALERT: "Currently seeking job opportunities starting December 2025!"
          </span> */}
        </p>
      </div>
    </section>
  );
}

