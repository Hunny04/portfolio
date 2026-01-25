import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Hero from "./components/Hero";
import Dashboard from "./components/Dashboard";
import CaseStudies from "./components/CaseStudies";
import About from "./components/About";
import CTA from "./components/CTA";
import CustomCursor from "./components/CustomCursor";
import ParticleSystem from "./components/ParticleSystem";
import DataStreams from "./components/DataStreams";
import SystemAlerts from "./components/SystemAlerts";
import PageLoader from "./components/PageLoader";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [showMissionFiles, setShowMissionFiles] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // GSAP ScrollTrigger integration
    lenis.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length ? lenis.scrollTo(value as any) : lenis.scroll || 0;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
    });

    ScrollTrigger.addEventListener("refresh", () => lenis.resize());
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-gray-900 text-white overflow-x-hidden relative">
      {/* Page Loader */}
      {isLoading && <PageLoader onLoadingComplete={() => setIsLoading(false)} />}

      {/* Background Effects */}
      <ParticleSystem />
      <DataStreams />

      {/* System Alerts */}
      <SystemAlerts />

      {/* Main Content */}
      <CustomCursor />
      <Hero onEnterControlRoom={() => setShowMissionFiles(true)} />
      <Dashboard />
      <CaseStudies />
      <About />
      <CTA />

      {/* Mission Files Modal */}
      {showMissionFiles && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-full h-full max-w-7xl mx-4 my-4 bg-gray-900 rounded-lg overflow-hidden">
            <button
              onClick={() => setShowMissionFiles(false)}
              className="absolute top-4 right-4 z-10 text-white hover:text-cyan-400 transition-colors">
              ✕
            </button>
            <CaseStudies />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
