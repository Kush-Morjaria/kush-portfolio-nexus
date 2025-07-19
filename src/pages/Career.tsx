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
        <h2 className="text-3xl font-bold text-primary">Education History</h2>
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>B.Sc. Computer Science, York University (2023 – 2027 expected)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-muted-foreground">Awarded the Best Entrance Award (Fall 2023)</p>
            <p className="text-muted-foreground">Relevant coursework: Data Structures & Algorithms, Database Systems, Machine Learning</p>
          </CardContent>
        </Card>
      </section>

      {/* Professional Experience */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-primary">Work Experience</h2>
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Technical Systems Analyst (Co‑op), RBC — Toronto, ON</CardTitle>
            <span className="text-muted-foreground">May 2025 – December 2025</span>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Built and scheduled a Python‑based monitoring pipeline that queries MongoDB every 15 minutes, detects anomalies, and sends structured alerts into Splunk.</li>
              <li>Secured credentials via Ansible playbooks pulling secrets (DB URIs, tokens) from HashiCorp Vault.</li>
              <li>Designed and deployed Grafana dashboards (pie charts, time series) for live ticket and finance metrics, embedding panels in internal portals with anonymous access.</li>
              <li>Prompt‑engineered GenAI agents (Confluence, supervisor, incident retrieval) for the LIDA platform, boosting retrieval accuracy by 75%.</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>IT Assistant, York University — Toronto, ON</CardTitle>
            <span className="text-muted-foreground">Sep 2024 – April 2025</span>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Resolved and closed ~20 service tickets/week for faculty & students (software troubleshooting, access issues, password resets).</li>
              <li>Maintained hardware inventory; coordinated procurement, delivery, and installation of replacement PCs, peripherals, and network equipment.</li>
              <li>Documented SOPs and trained new student hires on ticketing‑system workflows.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Notable Projects & Achievements */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-primary">Notable Projects & Achievements</h2>
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>HubSpot Ticketing POC (“SIZA”)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Architected a full‑stack proof‑of‑concept: React/Tailwind frontend with CRM tabs (Contacts, Deals, Tickets), embedded Grafana dashboard iframe, and live ticket creation/view.</li>
              <li>Implemented FastAPI backend handling OAuth2 via HubSpot, automated token refresh, and REST endpoints for contacts and tickets.</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Captionize IDEA (in progress)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Conceptualized an AI‑powered live‑captioning app for classrooms: uses Whisper API for transcription, aligns captions with uploaded slides, and generates personalized study notes via OpenAI.</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Personal Finance Tracker</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Developed a PDF parser for multi‑line bank and credit‑card statements with transaction classification; visualized spend categories in Grafana.</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Collision 2024 Volunteer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Assisted with on‑site tech setup, attendee support, and speaker livestreams at North America’s leading startup conference.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Certifications & Awards */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-primary">Certifications & Awards</h2>
        <Card className="shadow-card">
          <CardContent className="space-y-2">
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Best Entrance Award, York University (Fall 2023)</li>
              <li>Ansible Fundamentals course, Udemy (completed)</li>
            </ul>
          </CardContent>
        </Card>
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
            <a href="/KushMorjaria-Resume.pdf" download>
              <Button variant="professional" size="lg">
                <Download className="w-4 h-4" />
                Download PDF
              </Button>
            </a>
            <a href="/KushMorjaria-Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                <ExternalLink className="w-4 h-4" />
                View Online
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}