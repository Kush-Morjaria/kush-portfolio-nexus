import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "@/components/motion/SmoothScroll";
import { TransitLine } from "@/components/TransitLine";
import { Header } from "./Header";
import { Footer } from "./Footer";

// Lenis already honours html's scroll-padding-top (5rem); sections carry generous top padding,
// so land a little past that and let the padding clear the sticky header.
const SECTION_OFFSET = 48;

// React Router doesn't scroll on navigation: glide to the #section if there is one, otherwise jump to the top.
const useScrollOnNavigate = () => {
  const { pathname, hash } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    const target = hash ? document.getElementById(hash.slice(1)) : null;
    if (lenis) {
      if (target) lenis.scrollTo(target, { offset: SECTION_OFFSET, duration: 1.4 });
      else lenis.scrollTo(0, { immediate: true });
    } else if (target) {
      target.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, lenis]);
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  useScrollOnNavigate();

  return (
    // lg:pl-44 leaves the left margin for the transit line.
    <div className="flex min-h-screen flex-col lg:pl-44">
      <TransitLine />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
