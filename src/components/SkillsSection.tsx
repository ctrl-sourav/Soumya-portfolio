import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Backend Development", 
      skills: ["Node.js", "Express", "Python", "Java", "RESTful APIs"]
    },
    {
      title: "Database & Tools",
      skills: ["MongoDB", "SQL", "Git", "GitHub", "VS Code", ]
    },
    {
      title: "Other Technologies",
      skills: ["Docker", "AWS", "Firebase", "Postman", ]
    }
  ];

  const languages = [
    { name: "JavaScript", level: 90 },
    { name: "Python", level: 85 },
    { name: "Java", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "C++", level: 70 }
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="hover-lift animate-slide-in-left border-border bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="font-poppins font-semibold text-xl text-foreground mb-4">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium transition-all duration-300 ease-in-out cursor-default hover:bg-primary/10 hover:text-primary hover:shadow-md hover:scale-105"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="animate-fade-in border-border bg-card">
            <CardContent className="p-8">
              <h3 className="font-poppins font-semibold text-2xl text-foreground mb-8 text-center">
                Programming Languages Proficiency
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {languages.map((lang, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{lang.name}</span>
                      <span className="text-sm text-muted-foreground">{lang.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${lang.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
