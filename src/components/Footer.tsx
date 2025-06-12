import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">G</span>
              </div>
              <span className="font-bold text-xl text-foreground">GameSeeders</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your ultimate destination for downloading the latest games. 
              Fast, reliable, and always up-to-date.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/system-requirements" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  System Requirements
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Follow Us</h3>
            <div className="flex space-x-4">
              {/* YouTube */}
              <a 
                href="https://www.youtube.com/@GameSeederz" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-2.215-.202-11.016-.202-13.231 0C3.19 3.391 2 5.06 2 7.386v9.228c0 2.326 1.19 3.995 4.384 4.202 2.215.202 11.016.202 13.231 0C20.81 20.609 22 18.94 22 16.614V7.386c0-2.326-1.19-3.995-4.385-4.202zM10 15.5v-7l6 3.5-6 3.5z" />
                </svg>
              </a>
              {/* Facebook */}
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12.073c0-5.522-4.477-10-10-10S2 6.55 2 12.073c0 4.991 3.657 9.128 8.438 9.877v-6.987H7.898v-2.89h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.2 22 17.064 22 12.073z" />
                </svg>
              </a>
              {/* TikTok */}
              <a 
                href="https://www.tiktok.com/@gameseederz?is_from_webapp=1&sender_device=pc" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M232 64.6v33.1c-22.4-.3-43-8.5-58.9-22.3v70.9c0 30.9-25.1 56-56 56s-56-25.1-56-56 25.1-56 56-56c5.6 0 11 .8 16.1 2.4v34.5c-5-3.5-11.2-5.6-17.9-5.6-16.6 0-30.1 13.5-30.1 30.1s13.5 30.1 30.1 30.1 30.1-13.5 30.1-30.1V24h32c0 22.6 18.3 40.9 40.9 40.9H232z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 GameSeeders. All rights reserved. | 
            <span className="ml-1">Made with ❤️ for gamers</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
