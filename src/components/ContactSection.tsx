import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  // Replace with your actual Formspree endpoint
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mldnqagq";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({
          title: "Failed",
          description: "Something went wrong. Try again later.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      label: "Email",
      value: "soumyasourav03@gmail.com",
      link: "mailto:soumyasourav03@gmail.com"
    },
    {
      label: "Phone",
      value: "+91 7978790148",
      link: "tel:+917978790148"
    },
    {
      label: "LinkedIn",
      value: "soumya-sourav-kuanr",
      link: "https://www.linkedin.com/in/soumya-sourav-kuanr"
    },
    {
      label: "GitHub",
      value: "ctrl-sourav",
      link: "https://github.com/ctrl-sourav"
    }
  ];

  return (
    <section id="contact" className="py-24 gradient-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and exciting projects
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="hover-lift animate-slide-in-left border-border bg-card">
            <CardHeader>
              <CardTitle className="font-poppins text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex flex-col space-y-1">
                  <span className="font-semibold text-foreground">{info.label}</span>
                  <a 
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-primary hover:underline transition-colors duration-300"
                  >
                    {info.value}
                  </a>
                </div>
              ))}
              
              <div className="pt-6">
                <p className="text-muted-foreground leading-relaxed">
                  Feel free to reach out if you have any questions, want to discuss potential opportunities, 
                  or just want to connect. I'm always excited to meet new people in the tech community!
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover-lift animate-slide-in-right border-border bg-card">
            <CardHeader>
              <CardTitle className="font-poppins text-2xl text-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={4}
                    required
                  />
                </div>
                
                <Button 
                 type="submit" 
                 variant="outline"
                 size="lg"
                 className="p-3 bg-card border border-border shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
                 disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
