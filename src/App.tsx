import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Home from "./pages/Home";
import Career from "./pages/Career";
import Portfolios from "./pages/Portfolios";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/career" element={<Career />} />
            <Route path="/career/education" element={<Career />} />
            <Route path="/career/experience" element={<Career />} />
            <Route path="/career/resume" element={<Career />} />
            <Route path="/portfolios" element={<Portfolios />} />
            <Route path="/portfolios/discover" element={<Portfolios />} />
            <Route path="/portfolios/skills" element={<Portfolios />} />
            <Route path="/portfolios/credentials" element={<Portfolios />} />
            <Route path="/artifacts" element={<Portfolios />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
