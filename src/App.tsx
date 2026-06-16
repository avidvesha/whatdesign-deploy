import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ClientLogos from "./components/ClientLogos";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

import GoogleAnalytics from "./GoogleAnalytics";

export default function App() {
  const GA_ID = (import.meta as any).env?.VITE_GA_ID || "G-926BQSVSCN";

  return (
    <>
      <GoogleAnalytics measurementId={GA_ID} />
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <ClientLogos />
        <Portfolio />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
