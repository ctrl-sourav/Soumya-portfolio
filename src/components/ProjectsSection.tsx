import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Student Colllaboration Platform',
      description:
        'A Student collaborative platform learn and grow together. Chat, video call, share notes, and form study groups.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      link: 'https://github.com/ctrl-sourav',
      liveLink: 'https://ctrl-sourav.vercel.app',
    },
    {
      title: 'Task Management App',
      description:
        'A full-stack task management application with real-time updates',
      technologies: ['Node.js', 'Express', 'MongoDB', 'React'],
      link: 'https://github.com/ctrl-sourav/Flow_pilot',
      liveLink: 'https://flow-pilot-peach.vercel.app/',
    },
    {
      title: 'Weather Dashboard',
      description:
        'Interactive weather dashboard with location-based forecasts',
      technologies: ['React', 'TypeScript', 'API Integration', 'Tailwind CSS'],
      link: 'https://github.com/ctrl-sourav/SkyCast',
      liveLink: 'https://sky-cast-orpin.vercel.app/',
    },
    {
      title: 'E-commerce Platform',
      description: 'Modern e-commerce platform with payment integration',
      technologies: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
      link: 'https://github.com/ctrl-sourav/Nexus_cart',
      liveLink: 'https://nexus-cart.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="py-24 gradient-bg">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for development
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="font-poppins text-xl">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  {/* Live Demo Button */}
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 text-sm px-4 border-primary text-primary hover:bg-primary/10 transition-all"
                  >
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>

                  {/* GitHub Button */}
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 text-sm px-4 border-primary text-primary hover:bg-primary/10 transition-all"
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                       View on GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects */}
        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="p-3 bg-card border border-border shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
          >
            <a
              href="https://github.com/ctrl-sourav?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
