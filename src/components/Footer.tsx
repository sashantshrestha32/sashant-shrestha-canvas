
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Github, AtSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="font-heading text-2xl font-bold text-primary">
              Sashant<span className="text-secondary">.Dev</span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-xs">
              Digital marketing specialist and SEO expert based in Pokhara, Nepal.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.facebook.com/share/16AktHhqJu/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-500 hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/sashant_shrestha32?igsh=MThjaDZieDYzZ2dlbw%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-500 hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/sashant-shrestha-47a805329/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/sashantshrestha32/portfolio" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-500 hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:sashants1660@gmail.com" 
                aria-label="Email"
                className="text-gray-500 hover:text-primary transition-colors"
              >
                <AtSign size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover-link text-muted-foreground">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover-link text-muted-foreground">About</Link>
              </li>
              <li>
                <Link to="/resume" className="hover-link text-muted-foreground">Resume</Link>
              </li>
              <li>
                <Link to="/experience" className="hover-link text-muted-foreground">Experience</Link>
              </li>
              <li>
                <Link to="/blog" className="hover-link text-muted-foreground">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="hover-link text-muted-foreground">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-medium text-lg mb-4">Contact Info</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>
                <span className="font-semibold">Location:</span> Pokhara 8, Gandaki, Nepal
              </p>
              <p>
                <span className="font-semibold">Phone:</span> +977 9762567644
              </p>
              <p>
                <span className="font-semibold">Email:</span> sashants1660@gmail.com
              </p>
            </div>
            <div className="mt-4">
              <Button asChild>
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-10 pt-6">
          <p className="text-center text-muted-foreground text-sm">
            © {currentYear} Sashant Shrestha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
