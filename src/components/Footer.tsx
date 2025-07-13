import React from 'react';
import { Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center space-y-6">
          {/* Social Media Icons */}
          <div className="flex justify-center items-center gap-8">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/soumya37_/#"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-muted/50 hover:bg-primary/10 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
              aria-label="Follow me on Instagram"
            >
              <Instagram className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </a>

            {/* Twitter/X */}
            <a
              href="https://x.com/soumyasourav03"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-muted/50 hover:bg-primary/10 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
              aria-label="Follow me on X (Twitter)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          {/* Copyright Text */}
          <div className="pt-4 border-t border-border/50">
            <p className="font-inter text-sm text-muted-foreground">
              © 2025 Soumya Sourav Kuanr. All rights reserved.
            </p>
            <p className="font-inter text-xs text-muted-foreground/70 mt-2">
              
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
