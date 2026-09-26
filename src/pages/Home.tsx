import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TodaySection } from "@/components/TodaySection";
import { ContactSection } from "@/components/ContactSection";

// One section per station on the transit line: 01 Vaughan, 02 Projects, 03 Today, 04 Contact.
export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <TodaySection />
      <ContactSection />
    </>
  );
}
