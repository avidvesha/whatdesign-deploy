import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ClientLogos from "./components/ClientLogos";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ReactGA from 'react-ga4';
import { useEffect } from "react";


export default function App() {
  useEffect(() => {
    ReactGA.initialize('G-RWMELF3TM3');
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: 'App.tsx'
    });
  }, []);
  return (
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
  );
}
