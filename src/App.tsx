import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { SmoothScroll } from "./components/motion/SmoothScroll";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

// BASE_URL is Vite's `base` (e.g. "/kush-portfolio-nexus/" on GitHub Pages); the router needs it without the trailing slash.
const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

const App = () => (
  <BrowserRouter basename={basename}>
    <SmoothScroll>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </SmoothScroll>
  </BrowserRouter>
);

export default App;
