
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Index from "./pages/Index";
import OurStory from "./pages/OurStory";
import Program from "./pages/Program";
import RSVP from "./pages/RSVP";
import Gifts from "./pages/Gifts";
import GalleryPage from "./pages/GalleryPage";
import PracticalInfo from "./pages/PracticalInfo";
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
            <Route path="/" element={<Index />} />
            <Route path="/notre-histoire" element={<OurStory />} />
            <Route path="/programme" element={<Program />} />
            <Route path="/rsvp" element={<RSVP />} />
            <Route path="/cadeaux" element={<Gifts />} />
            <Route path="/galerie" element={<GalleryPage />} />
            <Route path="/infos-pratiques" element={<PracticalInfo />} />
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
