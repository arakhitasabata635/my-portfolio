const NavPupUp = ({ isOpen, handleClick, navLinks }) => {
  if (!isOpen) return null;
  return (
    <div className=" md:hidden text-white absolute top-full left-0 right-0 glass-effect border-t border-border animate-fade-in">
      <div className="container mx-auto px-4 py-4 space-y-4">
        {navLinks.map((link) => {
          return (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="block w-full text-left py-2 px-4 rounded-lg bg-card transition-colors"
            >
              {link.label}
            </button>
          );
        })}
        <a
          href="https://drive.google.com/file/d/1ZoOyW3Bm-r003BDXoChhPOoqumoqOYut/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 w-full gradient-primary hover-glow transition-bounce"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-download mr-2 w-4 h-4"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" x2="12" y1="15" y2="3"></line>
          </svg>
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default NavPupUp;
