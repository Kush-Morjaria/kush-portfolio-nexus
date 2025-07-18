import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex min-h-[calc(100vh-64px)]">
        <Sidebar />
        <main className="flex-1 min-h-full">
          <div className="container mx-auto px-6 py-8 max-w-4xl">
            {children}
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
};