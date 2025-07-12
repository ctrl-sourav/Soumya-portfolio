
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-poppins font-bold text-foreground mb-6">
            Soumya Sourav
            <span className="block text-primary">Kuanr</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-inter">
            Aspiring Software Engineer | Tech Explorer | Problem Solver
          </p>
          
          <p className="text-base sm:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Final-year Computer Science and Engineering student at Gandhi Institute for Technological Advancement, Bhubaneswar
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={() => scrollToSection('projects')}
              variant="outline"
              size="lg" 
              className="p-3 rounded-full bg-card border border-border shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
            >
              Explore My Work
            </Button>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              size="lg" 
              className="p-3 rounded-full bg-card border border-border shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
            >
              Let's Connect
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-16">
            <a 
              href="https://github.com/ctrl-sourav" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 touch-target"
            >
              <Github className="w-6 h-6 text-foreground" />
            </a>
            <a 
              href="https://www.linkedin.com/in/soumya-sourav-kuanr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 touch-target"
            >
              <Linkedin className="w-6 h-6 text-foreground" />
            </a>
          </div>
          
          <div className="animate-bounce">
            <button 
              onClick={() => scrollToSection('about')}
              className="p-2 rounded-full hover:bg-accent transition-colors duration-300 touch-target"
            >
              <ArrowDown className="w-6 h-6 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
