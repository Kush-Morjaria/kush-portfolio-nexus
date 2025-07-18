import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Building, Download, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function Career() {
  return (
    <div className="space-y-12">
      {/* Page Header */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Career Journey</h1>
        <p className="text-xl text-muted-foreground">
          Education, Professional Experience, and Career Development
        </p>
      </section>

      {/* Education Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-foreground">Education</h2>
        
        <Card className="shadow-card">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-xl">Bachelor of Technology</CardTitle>
                <p className="text-muted-foreground">Software Development</p>
              </div>
              <Badge variant="secondary">In Progress</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Building className="w-4 h-4" />
                <span>University/College Name</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Expected Graduation: 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Toronto, ON</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-foreground mb-2">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Software Engineering",
                    "Database Systems",
                    "Web Development",
                    "System Administration",
                    "Network Security",
                    "Project Management"
                  ].map((course) => (
                    <Badge key={course} variant="outline" className="text-xs">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-foreground mb-2">Academic Achievements:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Dean's List for Academic Excellence</li>
                  <li>Cooperative Education Program Participant</li>
                  <li>Technology Innovation Society Member</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Professional Experience */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-foreground">Professional Experience</h2>
        
        <Card className="shadow-card border-l-4 border-l-primary">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-xl">IT Support Specialist (Co-op)</CardTitle>
                <p className="text-muted-foreground font-medium">Royal Bank of Canada (RBC)</p>
              </div>
              <Badge variant="default">Current</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Sept 2024 - Present</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Toronto, ON</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-foreground mb-3">Key Responsibilities & Achievements:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>
                    <strong>Infrastructure Support:</strong> Provide L1/L2 technical support for critical 
                    banking systems, ensuring 99.9% uptime for business-critical applications
                  </li>
                  <li>
                    <strong>Automation Development:</strong> Developed Python scripts integrated with 
                    Ansible and HashiCorp Vault to automate routine maintenance tasks, reducing manual 
                    effort by 40%
                  </li>
                  <li>
                    <strong>Data Visualization:</strong> Created comprehensive Grafana dashboards for 
                    system monitoring and performance tracking, improving incident response time by 25%
                  </li>
                  <li>
                    <strong>AI Integration:</strong> Led proof-of-concept development for LIDA AI 
                    (Large Language Models for Data Analysis) to enhance data interpretation capabilities
                  </li>
                  <li>
                    <strong>CRM Enhancement:</strong> Designed and implemented HubSpot integration POC 
                    to streamline customer relationship management processes
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-foreground mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python",
                    "Ansible",
                    "HashiCorp Vault",
                    "Grafana",
                    "Linux",
                    "Docker",
                    "SQL",
                    "PowerShell",
                    "HubSpot API",
                    "REST APIs"
                  ].map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="bg-accent/30 p-4 rounded-lg">
                <h4 className="font-medium text-foreground mb-2">Impact & Learning:</h4>
                <p className="text-muted-foreground leading-relaxed">
                  This role has provided invaluable experience in enterprise-level IT operations, 
                  automation, and financial services technology. I've gained deep insights into 
                  regulatory compliance, security protocols, and the critical importance of 
                  reliability in financial systems.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Volunteer & Community Involvement */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-foreground">Community Involvement</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Technology Mentor</CardTitle>
              <p className="text-muted-foreground">Local Community Center</p>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                <Calendar className="w-4 h-4" />
                <span>2023 - Present</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Volunteer mentor helping high school students learn programming fundamentals 
                and explore technology career paths through hands-on workshops and one-on-one guidance.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Hackathon Participant</CardTitle>
              <p className="text-muted-foreground">Various Technology Events</p>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                <Calendar className="w-4 h-4" />
                <span>2022 - Present</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Active participant in local hackathons and technology competitions, focusing on 
                innovative solutions for social impact and business automation challenges.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resume Download */}
      <section className="bg-gradient-to-r from-primary/5 to-secondary/5 -mx-6 px-6 py-8 rounded-xl">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Complete Resume</h3>
            <p className="text-muted-foreground">
              Download my full resume with detailed work history, skills, and achievements.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="professional" size="lg">
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
            <Link to="/career/resume">
              <Button variant="outline" size="lg">
                <ExternalLink className="w-4 h-4" />
                View Online
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}