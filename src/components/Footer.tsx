export default function Footer() {
  return (
    <footer className="py-6 border-t border-[var(--border)] text-[var(--text)] text-sm transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>© {new Date().getFullYear()} Ouarda Qerrouech</p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://github.com/ouardaq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)] transition-colors duration-200"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/ouardaq/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[var(--accent)] transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:ouardahrn@gmail.com" 
              className="hover:text-[var(--accent)] transition-colors duration-200"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
