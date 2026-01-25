import { motion } from "framer-motion";
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { FeatureCard } from "./FeatureCard";
import LogoLoop from "./LogoLoop";

const Dashboard = () => {
  const growthItems = [
    {
      title: "SEO & Store Growth",
      icon: "🔍",
      tools: ["Google Analytics", "Search Console", "SEMrush"],
    },
    {
      title: "Content & Branding",
      icon: "🎨",
      tools: ["Canva", "Figma", "ChatGPT", "Photoshop"],
    },
    {
      title: "SEO & Organic Growth",
      icon: "📈",
      tools: ["Ahrefs", "SEMrush", "Yoast"],
    },
    {
      title: "Trust & Optimization",
      icon: "🛡️",
      tools: ["Hotjar", "Google Reviews", "Trustpilot"],
    },
  ];

  const metricsData = [
    { name: "Jan", engagement: 4000, acquisition: 2400, performance: 2400, efficiency: 3200 },
    { name: "Feb", engagement: 3000, acquisition: 1398, performance: 2210, efficiency: 2800 },
    { name: "Mar", engagement: 2000, acquisition: 9800, performance: 2290, efficiency: 2400 },
    { name: "Apr", engagement: 2780, acquisition: 3908, performance: 2000, efficiency: 2200 },
    { name: "May", engagement: 1890, acquisition: 4800, performance: 2181, efficiency: 2100 },
    { name: "Jun", engagement: 2390, acquisition: 3800, performance: 2500, efficiency: 2300 },
  ];

  const imageLogos = [
    { src: "/logos/google-analytics.svg", alt: "Company 1", href: "https://company1.com" },
    { src: "/logos/google-search-console.svg", alt: "Company 2", href: "https://company2.com" },
    { src: "/logos/meta-ads.svg", alt: "Company 3", href: "https://company3.com" },
    { src: "/logos/google-ads.svg", alt: "Company 4", href: "https://company4.com" },
    { src: "/logos/canva.svg", alt: "Company 5", href: "https://company5.com" },
    { src: "/logos/figma.svg", alt: "Company 6", href: "https://company6.com" },
    { src: "/logos/chatgpt.svg", alt: "Company 7", href: "https://company7.com" },
    { src: "/logos/photoshop.svg", alt: "Company 8", href: "https://company8.com" },
  ];

  return (
    <section className="min-h-screen py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-center mb-16 font-mono">
          STRATEGY CONTROL ROOM
        </motion.h2>

        {/* Strategy Modes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {growthItems.map((item) => (
            <FeatureCard key={item.title} item={item} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Center Panel - Live Metrics */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400 font-mono">VISIBLE METRICS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Engagement Growth</span>
                    <span className="text-green-400 font-bold">+127%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-green-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "80%" }}
                      transition={{ duration: 2 }}></motion.div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Customer Acquisition</span>
                    <span className="text-cyan-400 font-bold">+89%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-cyan-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "65%" }}
                      transition={{ duration: 2, delay: 0.2 }}></motion.div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Ad Performance</span>
                    <span className="text-purple-400 font-bold">+156%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-purple-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      transition={{ duration: 2, delay: 0.4 }}></motion.div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Sales Efficiency</span>
                    <span className="text-yellow-400 font-bold">+203%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-yellow-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      transition={{ duration: 2, delay: 0.6 }}></motion.div>
                  </div>
                </div>
              </div>

              {/* Charts */}
              <div className="mt-8">
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={metricsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1F2937",
                        border: "1px solid #374151",
                        borderRadius: "8px",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="engagement"
                      stackId="1"
                      stroke="#06B6D4"
                      fill="#06B6D4"
                      fillOpacity={0.3}
                    />
                    <Area
                      type="monotone"
                      dataKey="acquisition"
                      stackId="1"
                      stroke="#10B981"
                      fill="#10B981"
                      fillOpacity={0.3}
                    />
                    <Area
                      type="monotone"
                      dataKey="acquisition"
                      stackId="1"
                      stroke="rgb(192 132 252)"
                      fill="rgb(192 132 252)"
                      fillOpacity={0.3}
                    />
                    <Area
                      type="monotone"
                      dataKey="acquisition"
                      stackId="1"
                      stroke="rgb(250 204 21)"
                      fill="rgb(250 204 21)"
                      fillOpacity={0.3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>

          {/* Right Panel - Strategy Intelligence */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-6 text-purple-400 font-mono">STRATEGY INTELLIGENCE</h3>

              {/* Tools */}
              <div className="space-y-4 mb-8">
                <h4 className="text-lg font-semibold text-gray-300 mb-4">Core Tools</h4>
                {/* TOOLS */}
                <LogoLoop
                  logos={imageLogos}
                  speed={50}
                  direction="left"
                  logoHeight={60}
                  gap={60}
                  hoverSpeed={0}
                  scaleOnHover
                  fadeOut
                  fadeOutColor="transparent"
                  ariaLabel="Technology partners"
                  renderItem={(item: any) => {
                    return (
                      <img
                        src={item.src!}
                        alt={item.alt!}
                        className="h-12 object-contain fill-white bg-white rounded-md"
                      />
                    );
                  }}
                />
                <LogoLoop
                  logos={imageLogos}
                  speed={50}
                  direction="right"
                  logoHeight={60}
                  gap={60}
                  hoverSpeed={0}
                  scaleOnHover
                  fadeOut
                  fadeOutColor="transparent"
                  ariaLabel="Technology partners"
                  renderItem={(item: any) => {
                    return (
                      <img
                        src={item.src!}
                        alt={item.alt!}
                        className="h-12 object-contain fill-white bg-white rounded-md"
                      />
                    );
                  }}
                />
                <LogoLoop
                  logos={imageLogos}
                  speed={50}
                  direction="left"
                  logoHeight={60}
                  gap={60}
                  hoverSpeed={0}
                  scaleOnHover
                  fadeOut
                  fadeOutColor="transparent"
                  ariaLabel="Technology partners"
                  renderItem={(item: any) => {
                    return (
                      <img
                        src={item.src!}
                        alt={item.alt!}
                        className="h-12 object-contain fill-white bg-white rounded-md"
                      />
                    );
                  }}
                />
                <LogoLoop
                  logos={imageLogos}
                  speed={50}
                  direction="right"
                  logoHeight={60}
                  gap={60}
                  hoverSpeed={0}
                  scaleOnHover
                  fadeOut
                  fadeOutColor="transparent"
                  ariaLabel="Technology partners"
                  renderItem={(item: any) => {
                    return (
                      <img
                        src={item.src!}
                        alt={item.alt!}
                        className="h-12 object-contain fill-white bg-white rounded-md"
                      />
                    );
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
        <p className="mt-10 text-base text-gray-400 text-center">Digital growth is 80% system, 20% tools.</p>
      </div>
    </section>
  );
};

export default Dashboard;
