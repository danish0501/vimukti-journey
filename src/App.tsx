import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ScrollToTop from "@/components/shared/ScrollToTop";
import BackToTopButton from "@/components/shared/BackToTopButton";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
// import Therapy from "./pages/Therapy";
// import Training from "./pages/Training";
// import Consultation from "./pages/Consultation";
// import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
// import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <BackToTopButton />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            {/* <Route path="/therapy" element={<Therapy />} /> */}
            {/* <Route path="/training" element={<Training />} /> */}
            {/* <Route path="/consultation" element={<Consultation />} /> */}
            {/* <Route path="/events" element={<Events />} /> */}
            {/* <Route path="/blog" element={<Blog />} /> */}
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
