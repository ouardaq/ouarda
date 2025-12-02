import Terminal from '@/components/Terminal';

export default function Contact() {
  return (
    <div className="container mx-auto px-4">
      <section className="mb-16">
        {/* Main Page Title */}
        <h1 className="pt-16 text-3xl mb-4 font-normal text-[var(--text)]">Contact</h1>
        
        <Terminal 
          text="./get_in_touch.sh" 
          typingSpeed={40}
          className="text-xl mb-8"
        />
        
        {/* Contact Card - Uses global .card class */}
        <div className="card max-w-2xl mx-auto">
          <div className="mb-8">
            {/* Uses global .section-title class for styling and accent color */}
            <h2 className="section-title">Get in touch</h2>
            <p className="mb-4 text-[var(--text)]">
              Let's connect. Whether you have a question, a project idea, or just want to say hi,
            </p>
          </div>
          
          <div className="space-y-6">
            {/* Email Section */}
            <div>
              <h3 className="text-lg mb-2 font-bold">Email</h3>
              <p>
                <a 
                  href="mailto:ouardahrn@gmail.com" 
                  className="text-[var(--accent)] hover:underline decoration-[var(--accent)] transition-all"
                >
                  ouardahrn@gmail.com
                </a>
              </p>
            </div>
            
            {/* Location Section */}
            <div>
              <h3 className="text-lg mb-2 font-bold">Location</h3>
              <p className="text-[var(--text)]">Rabat, Morocco</p>
            </div>
            
            {/* Social Section */}
            <div>
              <h3 className="text-lg mb-2 font-bold">Social</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/ouardaq" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] border-b border-[var(--accent)] pb-1 hover:opacity-70 transition-opacity"
                >
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/ouardaqerrouech/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] border-b border-[var(--accent)] pb-1 hover:opacity-70 transition-opacity"
                >
                  LinkedIn
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}