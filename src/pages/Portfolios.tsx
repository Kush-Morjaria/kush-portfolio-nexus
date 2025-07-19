import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Target, Award, FileText, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function Portfolios() {
  const portfolios = [
    {
      id: "siza",
      title: "SIZA HubSpot Ticketing POC",
      icon: Award,
      description: "End‑to‑end proof‑of‑concept ticketing system integrating HubSpot CRM with a React/Tailwind frontend and FastAPI backend, plus live Grafana dashboards.",
      status: "Demo Pending",
      artifacts: 3,
      href: "#",
      color: "bg-purple-500/10 text-purple-600",
      highlights: [
        "React, Tailwind CSS, FastAPI, HubSpot OAuth2, Grafana, PostgreSQL",
        "Live ticket creation/view, CRM tabs, dashboard embedding",
        "Automated token refresh, REST endpoints"
      ]
    },
    {
      id: "captionize",
      title: "Captionize IDEA (WIP)",
      icon: Brain,
      description: "AI‑powered classroom captioning app: live Whisper transcription synced with lecture slides and personalized note generation via OpenAI.",
      status: "In Progress",
      artifacts: 2,
      href: "#",
      color: "bg-blue-500/10 text-blue-600",
      highlights: [
        "Python, Whisper API, OpenAI GPT‑4, React Native (planned)",
        "Transcription, slide sync, study notes"
      ]
    },
    {
      id: "finance",
      title: "Personal Finance Tracker",
      icon: FileText,
      description: "PDF parser for multi‑line bank & credit‑card statements with transaction classification; visualizes spend categories and trends in Grafana dashboards.",
      status: "Complete",
      artifacts: 1,
      href: "#",
      color: "bg-green-500/10 text-green-600",
      highlights: [
        "Python, PyPDF2, Pandas, Grafana, MySQL",
        "Transaction classification, spend visualization"
      ]
    },
    {
      id: "lida",
      title: "LIDA AI Assistant Enhancements",
      icon: Brain,
      description: "Prompt‑engineered Confluence, supervisor, and incident‑retrieval agents to improve enterprise knowledge workflows by 75% in accuracy and relevance.",
      status: "Internal Demo",
      artifacts: 1,
      href: "#",
      color: "bg-blue-500/10 text-blue-600",
      highlights: [
        "LangChain, OpenAI API, Python, Confluence API",
        "Enterprise knowledge workflow improvements"
      ]
    },
    {
      id: "collision",
      title: "Collision 2024 Volunteer Portal",
      icon: Award,
      description: "Supported the on‑site tech infrastructure for Collision conference: livestream setup, attendee check‑in tools, and volunteer coordination dashboards.",
      status: "Complete",
      artifacts: 1,
      href: "#",
      color: "bg-purple-500/10 text-purple-600",
      highlights: [
        "Node.js, Socket.io, AWS EC2, Zoom SDK",
        "Livestream setup, attendee support, dashboards"
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
                  <div className="bg-accent/30 rounded-lg px-4 py-2 text-sm text-muted-foreground font-medium">
                    <span className="font-semibold text-primary">Coming Soon:</span> This section will allow you to view detailed project demos, code samples, and interactive walkthroughs for each portfolio artifact once public versions are available.
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Professional Development Goals */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-foreground">Professional Goals</h2>
        <Card className="shadow-card">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-foreground mb-3">Short-Term Goals</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2" />
                    <span>Successfully complete my RBC co‑op term by December 2025, delivering the monitoring pipeline, Grafana dashboards, and LIDA AI enhancements at production quality.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2" />
                    <span>Prototype and user‑test the Captionize IDEA MVP in a real classroom setting, gathering feedback to iterate on transcription accuracy and note‑generation features.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2" />
                    <span>Expand my automation toolkit by mastering advanced Ansible patterns and HashiCorp Vault workflows through hands‑on projects.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-3">Long-Term Goals</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <span>Transition into a full‑time Technical Systems Analyst or DevOps Engineer role in financial services, leading cross‑functional projects that blend AI, security, and data visualization.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <span>Launch my own AI‑driven SaaS product targeting education and accessibility, leveraging lessons learned from Captionize.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <span>Build a recognized personal brand in the intersection of FinTech and automation, speaking at conferences and contributing to open‑source communities.</span>
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