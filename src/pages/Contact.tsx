import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Linkedin, 
  MapPin, 
  Phone, 
  Send, 
  MessageCircle,
  Calendar,
  ExternalLink
} from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "kush.morjaria@example.com",
      href: "mailto:kush.morjaria@example.com",
      description: "Best for detailed inquiries and professional correspondence"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/kushmorjaria",
      href: "https://linkedin.com/in/kushmorjaria",
      description: "Connect for professional networking and career opportunities"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      description: "Available for urgent matters and scheduled calls"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Toronto, Ontario, Canada",
      href: "#",
      description: "Open to local opportunities and in-person meetings"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Page Header */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Get in Touch</h1>
        <p className="text-xl text-muted-foreground">
          Let's connect and explore opportunities to work together
        </p>
      </section>

      {/* Contact Methods */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {contactMethods.map((method) => (
          <Card key={method.title} className="shadow-card hover:shadow-elevated transition-all duration-200">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <method.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="font-medium text-foreground">{method.title}</h3>
                  {method.href !== "#" ? (
                    <a 
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-primary hover:text-primary-hover transition-colors flex items-center gap-1 group"
                    >
                      {method.value}
                      {method.href.startsWith("http") && (
                        <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      )}
                    </a>
                  ) : (
                    <p className="text-foreground">{method.value}</p>
                  )}
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Contact Form */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-foreground">Send a Message</h2>
          <p className="text-muted-foreground">
            Use the form below to send me a direct message. I'll respond within 24 hours.
          </p>
        </div>

        <Card className="shadow-card max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-primary" />
              Contact Form
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What would you like to discuss?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell me more about your inquiry..."
                  rows={5}
                />
              </div>

              <Button 
                type="submit" 
                variant="professional" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? (
                  "Sending Message..."
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Professional Availability */}
      <section className="bg-gradient-to-r from-primary/5 to-secondary/5 -mx-6 px-6 py-8 rounded-xl">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-bold text-foreground">Professional Availability</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-card p-4 rounded-lg shadow-sm">
              <h4 className="font-medium text-foreground mb-2">Collaboration</h4>
              <p className="text-sm text-muted-foreground">
                Open to technology projects, consulting opportunities, and professional partnerships
              </p>
            </div>
            <div className="bg-card p-4 rounded-lg shadow-sm">
              <h4 className="font-medium text-foreground mb-2">Mentoring</h4>
              <p className="text-sm text-muted-foreground">
                Available to mentor students and early-career professionals in technology
              </p>
            </div>
            <div className="bg-card p-4 rounded-lg shadow-sm">
              <h4 className="font-medium text-foreground mb-2">Speaking</h4>
              <p className="text-sm text-muted-foreground">
                Interested in speaking at technology events and sharing co-op experiences
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}