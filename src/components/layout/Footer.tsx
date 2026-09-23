import { SocialLinks } from "@/components/SocialLinks";
import { profile } from "@/data/profile";

export const Footer = () => (
  <footer className="border-t border-border">
    <div className="container flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted-foreground sm:flex-row">
      <p>
        © {new Date().getFullYear()} {profile.name} · {profile.location}
      </p>
      <SocialLinks />
    </div>
  </footer>
);
