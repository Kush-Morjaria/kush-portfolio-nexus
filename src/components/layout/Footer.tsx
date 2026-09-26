import { Link } from "react-router-dom";
import { KMConstellation } from "@/components/KMConstellation";
import { profile, stations } from "@/data/profile";

const links = [
  { label: "GitHub", href: profile.socials.github },
  { label: "LinkedIn", href: profile.socials.linkedin },
  { label: "Instagram", href: profile.socials.instagram },
  { label: "X", href: profile.socials.x },
  { label: "Email", href: `mailto:${profile.email}` },
];

/** Colophon: name and copyright, the places to find me as plain text links, and the way back to the first stop. */
export const Footer = () => (
  <footer className="container pb-xl">
    <div className="rule-double" />
    <div className="mt-lg grid gap-lg md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
      <div>
        <Link to="/" className="group inline-flex items-center gap-sm font-display text-title">
          <KMConstellation className="h-7 w-[42px]" />
          {profile.name}
        </Link>
        <p className="label mt-sm">
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
      </div>

      <div className="space-y-sm md:text-right">
        <ul className="flex flex-wrap gap-x-md gap-y-xs md:justify-end">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="label text-ink transition-colors duration-fast ease-out-expo hover:text-amber"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <Link
          to={{ pathname: "/", hash: `#${stations[0].section}` }}
          className="label inline-block transition-colors duration-fast ease-out-expo hover:text-amber"
        >
          ↑ Back to {stations[0].code} {stations[0].name}
        </Link>
      </div>
    </div>
  </footer>
);
