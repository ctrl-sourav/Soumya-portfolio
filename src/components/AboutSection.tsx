
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <Card className="hover-lift border-border bg-card">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-inter">
                  I'm a final-year Computer Science and Engineering undergraduate, passionate about learning new technologies and applying them to real-world challenges. I'm actively seeking opportunities to grow, innovate, and contribute to impactful projects.
                </p>
                
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">4</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Years of Study</h3>
                    <p className="text-muted-foreground">Computer Science & Engineering</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">∞</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Learning</h3>
                    <p className="text-muted-foreground">Continuous Growth Mindset</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">🎯</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Goal</h3>
                    <p className="text-muted-foreground">Impactful Software Solutions</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
