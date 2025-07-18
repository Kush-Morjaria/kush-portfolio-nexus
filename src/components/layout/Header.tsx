import { Mail, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import kmLogo from "@/assets/km-logo.png";

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
              <p className="text-sm text-muted-foreground">Software Developer & IT Professional</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <a 
                href="mailto:kush.morjaria@example.com" 
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                kush.morjaria@example.com
              </a>
              <a 
                href="https://linkedin.com/in/kushmorjaria" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
            <Button variant="accent" size="sm">
              Download Resume
            </Button>
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
};