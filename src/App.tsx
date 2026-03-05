import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const Admisiones = lazy(() => import("./pages/Admisiones"));
const Primaria = lazy(() => import("./pages/Primaria"));
const Preescolar = lazy(() => import("./pages/Preescolar"));
const Secundaria = lazy(() => import("./pages/Secundaria"));
const Preparatoria = lazy(() => import("./pages/Preparatoria"));
const VidaEscolar = lazy(() => import("./pages/VidaEscolar"));
const Contacto = lazy(() => import("./pages/Contacto"));

const queryClient = new QueryClient();

const Loading = () => (
  <div className="flex min-h-screen items-center justify-center bg-background">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-accent" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/admisiones" element={<Admisiones />} />
            <Route path="/primaria" element={<Primaria />} />
            <Route path="/preescolar" element={<Preescolar />} />
            <Route path="/secundaria" element={<Secundaria />} />
            <Route path="/preparatoria" element={<Preparatoria />} />
            <Route path="/vida-escolar" element={<VidaEscolar />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
