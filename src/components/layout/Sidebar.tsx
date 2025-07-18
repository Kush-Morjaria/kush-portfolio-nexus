import { NavLink } from "react-router-dom";
import { 
  Home, 
  User, 
  Briefcase, 
  Target, 
  FileText, 
  Award,
  Brain,
  Code,
  Mail,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  {
    title: "Home",
    href: "/",
    icon: Home,
    description: "About Me"
  },
  {
    title: "Career",
    href: "/career",
    icon: Briefcase,
    description: "Education & Experience",
    subItems: [
      { title: "Education", href: "/career/education" },
      { title: "Experience", href: "/career/experience" },
      { title: "Resume", href: "/career/resume" }
    ]
  },
  {
    title: "Goals & Portfolios",
    href: "/portfolios",
    icon: Target,
    description: "Professional Development",
    subItems: [
      { title: "Discover Myself", href: "/portfolios/discover" },
      { title: "Skills & Interests", href: "/portfolios/skills" },
      { title: "Building Credentials", href: "/portfolios/credentials" }
    ]
  },
  {
    title: "Artifacts",
    href: "/artifacts",
    icon: Code,
    description: "Work Samples & Projects"
  },
  {
    title: "Contact",
    href: "/contact",
    icon: Mail,
    description: "Get in Touch"
  }
];

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-card border-r border-border h-screen sticky top-16 overflow-y-auto">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-foreground mb-6">Portfolio Index</h2>
        
        <nav className="space-y-2">
          {navigationItems.map((item) => (
            <div key={item.href}>
              <NavLink
                to={item.href}
                end={item.href === "/"}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )
                }
              >
                <item.icon className="w-4 h-4" />
                <div className="flex-1">
                  <div className="font-medium">{item.title}</div>
                  <div className="text-xs opacity-75">{item.description}</div>
                </div>
                {item.subItems && (
                  <ChevronRight className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                )}
              </NavLink>
              
              {item.subItems && (
                <div className="ml-7 mt-2 space-y-1">
                  {item.subItems.map((subItem) => (
                    <NavLink
                      key={subItem.href}
                      to={subItem.href}
                      className={({ isActive }) =>
                        cn(
                          "block px-3 py-2 text-sm rounded-md transition-colors",
                          isActive
                            ? "text-primary font-medium bg-accent"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                        )
                      }
                    >
                      {subItem.title}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};