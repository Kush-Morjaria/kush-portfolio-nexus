import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import kmLogo from "@/assets/km-logo.png";
import emailLogo from "@/assets/email-logo.svg";
import linkedinLogo from "@/assets/linkedin-logo.svg";
import instagramLogo from "@/assets/instagram-logo.svg";
import xLogo from "@/assets/x-logo.svg";

export const Header = () => {
  const today = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={kmLogo} alt="KM Logo" className="w-8 h-8" />
            <div>
              <h1 className="text-xl font-bold text-foreground">Kush Morjaria</h1>
              <p className="text-sm text-muted-foreground">Campus Explorer on a Quest for Adventure</p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <a 
                href="mailto:kushm@my.yorku.ca" 
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <img src={emailLogo} alt="Email" className="w-5 h-5" />
                kushm@my.yorku.ca
              </a>
              <a 
                href="https://www.linkedin.com/in/kush-morjaria" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <img src={linkedinLogo} alt="LinkedIn" className="w-5 h-5" />
                LinkedIn
              </a>
              <a 
                href="https://www.instagram.com/kushmorjaria?igsh=MWo1aW10d3VyMHY1Zg==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <img src={instagramLogo} alt="Instagram" className="w-5 h-5" />
                Instagram
              </a>
              <a 
                href="https://x.com/KushMorjaria" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <img src={xLogo} alt="X (Twitter)" className="w-5 h-5" />
                X
              </a>
            </div>
            <a href="/KushMorjaria-Resume.pdf" download>
              <Button variant="accent" size="sm">
                Download Resume
              </Button>
            </a>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              Menu
            </Button>
          </div>
        </div>
        <div className="mt-2 text-xs text-muted-foreground text-right">
          Last updated: {today}
        </div>
      </div>
    </header>
  );
}