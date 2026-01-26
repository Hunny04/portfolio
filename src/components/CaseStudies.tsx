// MISSION FILES – Single Page Interactive Control System
// Vite + React | No routing | Same-page expandable missions

import { motion, useScroll, useTransform } from "framer-motion";
import { useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import RotatingText from "./RotatingText";

interface Mission {
  brand: string;
  brandColor: "emerald" | "violet" | "amber";

  id: string;
  title: string;
  status: string;
  years: number;
  objective: string;
  responsibilities: string[];
  tools: string[];
  timeline: string[];
  metrics: Record<string, string>;
  outcome: string;
  color: string;
  link: string;
  logo: string;
  yearsLabel: string;
  position: string;
}

const missions: Mission[] = [
  // Brand color = control-room identity per mission
  {
    id: "shaola",
    brand: "Shaola",
    brandColor: "emerald",
    title: "Shaola",
    status: "Archived",
    years: 6,
    yearsLabel: "Months",
    objective: "Build foundational execution discipline and signal awareness.",
    responsibilities: [
      "Assisted in campaign execution workflows",
      "Tracked engagement, reach, and content response",
      "Optimized captions, hashtags, and basic SEO elements",
      "Reported performance insights to senior strategists",
    ],
    tools: ["Instagram Insights", "Google Search Console", "Canva", "Meta Suite"],
    timeline: ["Onboarding", "Execution Support", "Signal Training", "System Understanding"],
    metrics: {
      LearningVelocity: "High",
      ExecutionAccuracy: "+25%",
      StrategicClarity: "Established",
    },
    outcome: "Built a strong foundation in data-led execution and systems thinking.",
    color: "#deb887",
    link: "https://shaaola.com/",
    logo: "/public/images/shaola.avif",
    position: "Marketing Intern",
  },
  {
    id: "dhaarami",
    brand: "Dhaarami Fashion",
    brandColor: "violet",
    title: "Dhaarami Fashion",
    status: "Completed",
    years: 1.5,
    yearsLabel: "Year",
    objective: "Strengthen brand presence and content performance through structured strategy.",
    responsibilities: [
      "Owned seasonal content strategy",
      "Optimized reels, carousels, and posting cadence",
      "Monitored engagement velocity",
      "Maintained visual and messaging consistency",
    ],
    tools: ["Instagram Analytics", "Canva", "Meta Ads Manager"],
    timeline: ["Strategy Design", "Creative Deployment", "Optimization", "Brand Lift"],
    metrics: {
      EngagementGrowth: "+35%",
      BrandRecall: "Improved",
      Consistency: "High",
    },
    outcome: "Improved engagement and brand recall through performance-led creative decisions.",
    color: "#008b8b",
    link: "https://dhaarmifashion.com/",
    logo: "/public/images/dhaarmi.png",
    position: "Digital Marketing Lead",
  },
  {
    id: "shria",
    brand: "Shria Traditions",
    brandColor: "amber",
    title: "Shria Traditions",
    status: "Accomplished",
    years: 1,
    yearsLabel: "Year",
    objective: "Build scalable growth systems while preserving heritage brand identity.",
    responsibilities: [
      "Led end-to-end digital strategy",
      "Planned festive and launch campaigns",
      "Analyzed search intent and audience behavior",
      "Built long-term growth roadmaps",
    ],
    tools: ["Google Analytics", "Search Console", "SEO Tools"],
    timeline: ["SEO Setup", "Campaign Launch", "Festive Ops", "Scaling"],
    metrics: {
      VisibilityGrowth: "+40%",
      TrafficQuality: "+30%",
      Scalability: "Strong",
    },
    outcome: "Strengthened digital visibility and strategic clarity for long-term growth.",
    color: "#d7d4aae8",
    link: "https://byshria.com/",
    logo: "/public/images/shria.jpg",
    position: "Brand Strategist",
  },
];

function LiveDot() {
  return <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping mr-2" />;
}

function Typewriter({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [text]);
  return <p className="text-zinc-200 text-sm font-mono">{displayed}_</p>;
}

function Counter({ value, color = "white", postfix }: { value: number; color?: string; postfix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      if (i >= value) {
        i = value;
        clearInterval(interval);
      }
      setCount(i);
    }, 25);
    return () => clearInterval(interval);
  }, [value]);
  return (
    <span
      className="text-4xl font-bold"
      style={{
        color: color,
      }}>
      {count} {postfix}
    </span>
  );
}

export default function MissionFiles(): JSX.Element {
  const [activeMission, setActiveMission] = useState<Mission | null>(null);
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setActiveMission(missions[(missions.findIndex((m) => m.id === activeMission?.id) + 1) % missions.length]);
      }
      if (e.key === "ArrowLeft") {
        setActiveMission(
          missions[(missions.findIndex((m) => m.id === activeMission?.id) - 1 + missions.length) % missions.length],
        );
      }
    },
    [activeMission],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <section
      id="mission-files"
      className="min-h-screen bg-black text-white px-6 md:py-24 py-16 relative overflow-hidden">
      {/* CRT Scanlines */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_2px,transparent_4px)] opacity-20" />
      {/* HERO */}
      <motion.div style={{ y }} className="max-w-6xl mx-auto text-center md:mt-24 mt-10 mb-10">
        <h1 className="text-5xl md:text-7xl font-bold">Mission Files</h1>
        <p className="mt-6 text-lg md:text-2xl text-zinc-300">
          Classified records of strategy, growth systems, and execution.
        </p>
      </motion.div>

      {/* GLOBAL COUNTERS */}
      <div className="max-w-5xl mx-auto grid grid-cols-6 md:grid-cols-3 md:gap-10 gap-4 text-center mb-28">
        <div className="col-span-2 md:col-span-1">
          <Counter value={3} postfix="+" />
          <p className="text-zinc-400 mt-2">Years Experience</p>
        </div>
        <div className="col-span-1">
          <p className="text-zinc-400 mt-2 text-2xl md:text-4xl">As</p>
        </div>
        <div className="col-span-3 md:col-span-1">
          <RotatingText
            texts={["Brand Strategist", "Marketing Head", "Creative Creator", "Digital Marketing", "SEO Specialist"]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-transparent text-3xl md:text-4xl text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2500}
          />
        </div>
      </div>

      {/* MISSIONS GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {missions.map((m, i) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}>
            <Card
              onMouseEnter={() => setActiveMission(m)}
              onMouseLeave={() => setActiveMission(null)}
              className="bg-white/5 border-white/10 backdrop-blur-xl rounded-3xl cursor-pointer hover:scale-[1.06] transition"
              style={{
                border: `6px solid ${m.color}`,
              }}>
              <CardContent className="md:px-8 py-8 px-4 relative">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    {/* <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl">
                      <img src={m.logo} alt={`${m.brand} logo`} className="w-8 h-8 object-contain" />
                    </div> */}
                    <div>
                      <h3 className="text-xl font-mono tracking-wide" style={{ color: m.color }}>
                        {m.brand}
                      </h3>
                      <a
                        href={m.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-zinc-400 font-mono">
                        <span>Mission 0{i + 1} — </span>
                        <span className="hover:underline">{m.title}</span>
                      </a>
                    </div>
                  </div>
                  <span className="text-sm px-3 py-1 rounded-full bg-white/10 text-white">{m.status}</span>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-8 text-center">
                  <div>
                    <Counter value={m.years} color={m.color} postfix={i == 1 ? "+" : ""} />
                    <p className="text-xs text-zinc-400">{m.yearsLabel}</p>
                  </div>
                  <div>
                    <p className="text-zinc-400 text-base">As</p>
                  </div>
                  <div>
                    <p className="text-zinc-400 text-base">{m.position}</p>
                  </div>
                </div>

                <p className="mt-6 text-emerald-400 font-mono flex items-center justify-center">
                  <LiveDot /> LIVE SIGNAL · Hover to decode ░░░
                </p>

                {(activeMission?.id === m.id || window.innerWidth < 769) && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-8 rounded-2xl p-6 border font-mono bg-${m.brandColor}-500/10 border-${m.brandColor}-400/30`}>
                    <p className={`text-${m.brandColor}-400 text-sm mb-3 flex items-center gap-2`}>📂 OBJECTIVE FILE</p>

                    <Typewriter text={m.objective} />

                    <div className="mt-6">
                      <p className="text-zinc-400 text-xs mb-2">⚙️ KEY OPERATIONS</p>
                      <ul
                        className="list-disc list-inside text-xs space-y-1"
                        style={{
                          color: m.color,
                        }}>
                        {m.responsibilities.map((r) => (
                          <li key={r}>{r}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {m.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 rounded-lg text-xs text-black font-bold"
                          style={{ background: m.color }}>
                          {tool}
                        </span>
                      ))}
                    </div>

                    <p className={`mt-6 text-${m.brandColor}-400 text-sm`}>STATUS ▸ {m.status}</p>
                  </motion.div>
                )}
                <motion.div>
                  <p className="text-sm text-zinc-400 mt-4 mb-2 font-mono">📡 Ops Snapshot</p>
                  <ul className="list-disc list-inside text-xs text-zinc-300 space-y-1">
                    {m.responsibilities.slice(0, 3).map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>

                  <p className="text-sm text-emerald-400 mt-4 font-mono">STATUS ▸ {m.status}</p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* EXPANDED MISSION PANEL */}

      {/* 
            <section className="mt-8">
              <h4 className="text-xl font-semibold">Timeline</h4>
              <div className="flex flex-wrap gap-3 mt-3">
                {activeMission.timeline.map((t) => (
                  <span key={t} className="px-4 py-2 rounded-xl bg-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </section>

            <section className="mt-8">
              <h4 className="text-xl font-semibold">Tools & Systems</h4>
              <div className="flex flex-wrap gap-3 mt-3">
                {activeMission.tools.map((tool) => (
                  <span key={tool} className="px-4 py-2 rounded-xl bg-white/10">
                    {tool}
                  </span>
                ))}
              </div>
            </section>

            <section className="mt-8">
              <h4 className="text-xl font-semibold">Impact Metrics</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-3">
                {Object.entries(activeMission.metrics).map(([k, v]) => (
                  <div key={k} className="p-4 bg-white/5 rounded-xl">
                    <p className="text-sm text-zinc-400">{k}</p>
                    <p className="text-lg font-semibold">{v}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-8">
              <h4 className="text-xl font-semibold">Outcome</h4>
              <p className="text-zinc-300 mt-2">{activeMission.outcome}</p>
            </section>

            <div className="mt-10 text-right">
              <Button size="lg" onClick={() => setActiveMission(null)}>
                Close Mission
              </Button>
            </div> */}
    </section>
  );
}
