import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const links = [
  { label: "GitHub", href: profile.socials.github, icon: Github },
  { label: "LinkedIn", href: profile.socials.linkedin, icon: Linkedin },
  { label: "Instagram", href: profile.socials.instagram, icon: Instagram },
  { label: "X", href: profile.socials.x, icon: XIcon },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export const SocialLinks = ({ className, iconClassName }: { className?: string; iconClassName?: string }) => (
  <ul className={cn("flex items-center gap-1", className)}>
    {links.map(({ label, href, icon: Icon }) => (
      <li key={label}>
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={label}
          title={label}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <Icon className={cn("h-[18px] w-[18px]", iconClassName)} />
        </a>
      </li>
    ))}
  </ul>
);
