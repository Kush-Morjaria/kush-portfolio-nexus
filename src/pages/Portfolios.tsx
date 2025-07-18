import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Target, Award, FileText, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function Portfolios() {
  const portfolios = [
    {
      id: "discover",
      title: "Discover Myself",
      icon: Brain,
      description: "Self-assessment, personal values exploration, and professional identity development",
      status: "Complete",
      artifacts: 5,
      href: "/portfolios/discover",
      color: "bg-blue-500/10 text-blue-600",
      highlights: [
        "Myers-Briggs Personality Assessment",
        "Core Values Exercise",
        "Professional Strengths Analysis",
        "Career Vision Statement"
      ]
    },
    {
      id: "skills",
      title: "Skills & Interests",
      icon: Target,
      description: "Undergraduate competencies mapping, skill development tracking, and SMART goals",
      status: "In Progress", 
      artifacts: 8,
      href: "/portfolios/skills",
      color: "bg-green-500/10 text-green-600",
      highlights: [
        "Technical Skills Assessment",
        "Soft Skills Development Plan",
        "SMART Goals Framework",
        "Learning Objectives Tracking"
      ]
    },
    {
      id: "credentials",
      title: "Building Credentials",
      icon: Award,
      description: "Project artifacts, code samples, certifications, and professional accomplishments",
      status: "Active",
      artifacts: 12,
      href: "/portfolios/credentials",
      color: "bg-purple-500/10 text-purple-600",
      highlights: [
        "RBC Project Deliverables",
        "Code Repositories",
        "Certification Progress",
        "Professional Recognition"
      ]
    }
  ];

  return (
    <div className="space-y-12">
      {/* Page Header */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Goals & Portfolios</h1>
        <p className="text-xl text-muted-foreground">
          Professional Development Through Structured Learning and Reflection
        </p>
      </section>

      {/* Portfolio Overview */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 -mx-6 px-6 py-8 rounded-xl">
        <h2 className="text-2xl font-bold text-foreground mb-4">Portfolio Framework</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          This portfolio system follows the COOP 2100 framework for professional development, 
          organized into three key areas that collectively demonstrate my growth as a technology 
          professional. Each portfolio contains artifacts, reflections, and evidence of continuous 
          learning and skill development.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-card p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="font-medium">Growth Mindset</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Continuous learning and adaptation to new challenges
            </p>
          </div>
          <div className="bg-card p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-5 h-5 text-primary" />
              <span className="font-medium">Evidence-Based</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Documented artifacts and reflective analysis
            </p>
          </div>
          <div className="bg-card p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-primary" />
              <span className="font-medium">Goal-Oriented</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Strategic career planning and skill development
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Cards */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-foreground">Portfolio Collections</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          {portfolios.map((portfolio) => (
            <Card key={portfolio.id} className="shadow-card hover:shadow-elevated transition-all duration-200 border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg ${portfolio.color}`}>
                      <portfolio.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{portfolio.title}</CardTitle>
                      <p className="text-muted-foreground">{portfolio.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={portfolio.status === "Complete" ? "default" : "secondary"}>
                      {portfolio.status}
                    </Badge>
                    <Badge variant="outline">
                      {portfolio.artifacts} artifacts
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-3">Key Components:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {portfolio.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Link to={portfolio.href}>
                    <Button variant="outline" className="group">
                      Explore Portfolio
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Professional Development Goals */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-foreground">Current Development Goals</h2>
        
        <Card className="shadow-card">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-foreground mb-3">Short-term Goals (6 months)</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2" />
                    <span>Complete AWS Cloud Practitioner certification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2" />
                    <span>Enhance Python automation skills with advanced libraries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2" />
                    <span>Develop expertise in container orchestration (Kubernetes)</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-foreground mb-3">Long-term Goals (2 years)</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <span>Transition to Senior Developer or DevOps Engineer role</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <span>Lead cross-functional technology projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <span>Mentor junior developers and contribute to team growth</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}