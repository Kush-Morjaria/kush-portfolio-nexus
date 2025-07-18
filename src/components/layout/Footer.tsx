import { Mail, Linkedin, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:kush.morjaria@example.com" className="hover:text-secondary transition-colors">
                  kush.morjaria@example.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                <a 
                  href="https://linkedin.com/in/kushmorjaria" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  linkedin.com/in/kushmorjaria
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Toronto, Ontario, Canada</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link to="/career/resume" className="block hover:text-secondary transition-colors">
                Download Resume
              </Link>
              <Link to="/portfolios" className="block hover:text-secondary transition-colors">
                View Portfolios
              </Link>
              <Link to="/artifacts" className="block hover:text-secondary transition-colors">
                Work Samples
              </Link>
              <Link to="/contact" className="block hover:text-secondary transition-colors">
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Professional Statement */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Professional Focus</h3>
            <p className="text-sm leading-relaxed">
              Passionate about leveraging technology to drive business innovation. 
              Experienced in IT support, automation, and data visualization with 
              a focus on continuous learning and professional growth.
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>© {currentYear} Kush Morjaria. All rights reserved.</p>
          <p className="mt-2 text-primary-foreground/70">
            Built for COOP 2100 - Professional ePortfolio
          </p>
        </div>
      </div>
    </footer>
  );
};