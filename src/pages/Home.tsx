import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Star } from "lucide-react";
import { Link } from "react-router-dom";
import kushHeadshot from "../../image.jpg";

export default function Home() {
  const coreValues = ["Ambition", "Discipline", "Honesty"];
  const keySkills = ["Python", "Ansible", "Grafana", "IT Support", "Automation", "Data Visualization"];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 -mx-6 px-6 py-12 rounded-xl">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                Kush Morjaria
                <span className="text-primary block text-2xl font-medium mt-2">Technical Systems Analyst</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Hi, I’m Kush Morjaria, a Technical Systems Analyst co‑op at RBC who blends AI‑driven automation with enterprise finance solutions. Passionate about turning complex data into secure, scalable insights, I build production‑ready pipelines and intelligent dashboards that drive real‑world impact.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link to="/career">
                <Button variant="professional" size="lg" className="group">
                  Explore My Journey
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/portfolios">
                <Button variant="accent" size="lg">
                  View Portfolios
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative">
              <img 
                src={kushHeadshot} 
                alt="Kush Morjaria - Professional Headshot"
                className="w-64 h-64 object-cover rounded-full shadow-elevated border-4 border-card"
              />
              <div className="absolute -bottom-2 -right-2 bg-secondary text-secondary-foreground rounded-full p-2">
                <Star className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section - Highlighted */}
      <section className="bg-gradient-to-br from-accent/10 to-secondary/10 border-l-4 border-primary px-8 py-10 rounded-xl mb-8">
        <h2 className="text-4xl font-bold text-primary mb-4">About Me – Kush Morjaria</h2>
        <p className="text-lg text-foreground leading-relaxed mb-4">
          My name is Kush Morjaria, and I’m a Computer Science student at York University, graduating in 2027. I’m currently on a co-op as a Technical Systems Analyst at RBC, where I focus on automation and AI-driven solutions. I thrive on momentum—solving problems efficiently and building systems that last. What makes me unique is my ambition. I don’t just want a job—I want to build an empire. That mindset fuels my discipline and honesty in everything I do.
        </p>
        <p className="text-lg text-foreground leading-relaxed mb-4">
          I grew up in Mozambique, a place rich in culture but limited in opportunity. It taught me to be resourceful and grounded, to find solutions even when resources were scarce. That environment shaped my entrepreneurial mindset. I learned that nothing is guaranteed—and that success must be built, not given.
        </p>
        <p className="text-lg text-foreground leading-relaxed mb-4">
          I chose York University for its balance of opportunity, diversity, and strong technical training. I joined the Lassonde School of Engineering with a passion for using technology to create impact. Over time, I gravitated toward Computer Science because it lets me build tools that scale ideas into real-world solutions. I bring self-discipline, curiosity, and quick learning to every project—qualities that help me succeed both in school and at RBC.
        </p>
        <p className="text-lg text-foreground leading-relaxed">
          My greatest inspiration is my father. I’ve always seen him as both a teacher and a leader. No matter how tough life got, he stayed true to his values. His calm under pressure, consistent discipline, and honesty in business are qualities I strive to emulate. He taught me that success without integrity is meaningless—and that real leadership begins with character.
        </p>
      </section>

      {/* Core Values & Vision and Professional Background */}
      <section className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Core Values & Vision</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-foreground mb-2">My Core Values:</h4>
                <div className="flex flex-wrap gap-2">
                  {coreValues.map((value) => (
                    <Badge key={value} variant="secondary" className="text-sm">
                      {value}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Career Vision:</h4>
                <p className="text-muted-foreground leading-relaxed">
                  To become a technology leader who bridges the gap between business needs 
                  and innovative solutions, driving digital transformation while maintaining 
                  the highest standards of integrity and professional excellence.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>Professional Background</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing my undergraduate degree while working as a Technical Systems Analyst 
                at RBC, one of Canada's leading financial institutions. My role involves supporting 
                critical infrastructure, developing automation solutions, and contributing to 
                data-driven decision making.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in Python automation, infrastructure monitoring with Grafana, 
                and implementing enterprise solutions using Ansible and HashiCorp Vault. 
                My recent work includes developing AI-powered workflows and proof-of-concept 
                integrations with HubSpot CRM.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Skills */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-foreground">Technical Expertise</h2>
        <Card className="shadow-card">
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-3">
              {keySkills.map((skill) => (
                <Badge key={skill} variant="outline" className="text-sm py-1 px-3">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Purpose Statement */}
      <section className="bg-accent/30 -mx-6 px-6 py-8 rounded-xl">
        <h2 className="text-2xl font-bold text-foreground mb-4">Purpose of This Portfolio</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          This ePortfolio serves as a comprehensive documentation of my professional development, 
          academic achievements, and personal growth throughout my co-operative education experience. 
          It showcases my commitment to continuous learning, professional excellence, and my journey 
          toward becoming a well-rounded technology professional.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Here you'll find detailed accounts of my work at RBC, reflections on my learning experiences, 
          portfolio artifacts demonstrating my skills, and my strategic approach to career development 
          in the technology sector.
        </p>
      </section>
    </div>
  );
}