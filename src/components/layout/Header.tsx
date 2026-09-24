import { useState } from "react";
import { Link } from "react-router-dom";
import { Download, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { SocialLinks } from "@/components/SocialLinks";
import { profile } from "@/data/profile";
import { KMConstellation } from "@/components/KMConstellation";

const navItems = [
  { label: "Projects", hash: "#projects" },
  { label: "Experience", hash: "#experience" },
  { label: "About", hash: "#about" },
  { label: "Contact", hash: "#contact" },
];

const resumeHref = profile.resumeUrl ? `${import.meta.env.BASE_URL}${profile.resumeUrl}` : null;

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-background/75 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link to="/" className="group flex items-center gap-3 font-display text-lg">
          <KMConstellation className="h-7 w-[42px]" />
          <span>{profile.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navItems.map((item) => (
            <Link
              key={item.hash}
              to={{ pathname: "/", hash: item.hash }}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-secondary"
            >
              {item.label}
            </Link>
          ))}
          {resumeHref && (
            <Button asChild variant="accent" size="sm" className="ml-2">
              <a href={resumeHref} target="_blank" rel="noopener noreferrer">
                <Download /> Resume
              </a>
            </Button>
          )}
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col gap-6">
            <SheetTitle className="font-display">{profile.name}</SheetTitle>
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {navItems.map((item) => (
                <Link
                  key={item.hash}
                  to={{ pathname: "/", hash: item.hash }}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base transition-colors hover:bg-muted"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            {resumeHref && (
              <Button asChild variant="accent">
                <a href={resumeHref} target="_blank" rel="noopener noreferrer">
                  <Download /> Resume
                </a>
              </Button>
            )}
            <SocialLinks className="mt-auto flex-wrap" />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
