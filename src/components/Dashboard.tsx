 import { useState } from 'react';
import { motion } from 'framer-motion';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const Dashboard = () => {
  const [activeMode, setActiveMode] = useState('seo');

  const strategyModes = [
    { id: 'seo', label: '🔍 SEO & Store Growth', color: 'cyan' },
    { id: 'ads', label: '📢 Paid Ads (Meta)', color: 'green' },
    { id: 'social', label: '📱 Social Media Growth', color: 'purple' },
    { id: 'strategy', label: '🎯 Brand Strategy', color: 'yellow' }
  ];

  const metricsData = [
    { name: 'Jan', engagement: 4000, acquisition: 2400, performance: 2400, efficiency: 3200 },
    { name: 'Feb', engagement: 3000, acquisition: 1398, performance: 2210, efficiency: 2800 },
    { name: 'Mar', engagement: 2000, acquisition: 9800, performance: 2290, efficiency: 2400 },
    { name: 'Apr', engagement: 2780, acquisition: 3908, performance: 2000, efficiency: 2200 },
    { name: 'May', engagement: 1890, acquisition: 4800, performance: 2181, efficiency: 2100 },
    { name: 'Jun', engagement: 2390, acquisition: 3800, performance: 2500, efficiency: 2300 }
  ];

  const tools = [
    { name: 'Meta Ads', icon: '📊', description: 'Advanced campaign optimization' },
    { name: 'Shopify', icon: '🛒', description: 'E-commerce platform expertise' },
    { name: 'Analytics', icon: '📈', description: 'Data-driven insights' },
    { name: 'Strategy', icon: '🎯', description: 'Brand growth frameworks' }
  ];

  return (
    <section className="min-h-screen py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-center mb-16 font-mono"
        >
          STRATEGY CONTROL ROOM
        </motion.h2>

        {/* Strategy Modes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {strategyModes.map((mode) => (
            <motion.button
              key={mode.id}
              onClick={() => setActiveMode(mode.id)}
              className={`p-6 rounded-lg border-2 transition-all duration-300 font-mono text-sm ${
                activeMode === mode.id
                  ? `border-${mode.color}-400 bg-${mode.color}-400/10 text-${mode.color}-400 shadow-lg shadow-${mode.color}-400/20`
                  : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-gray-500'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {mode.label}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Center Panel - Live Metrics */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-lg p-6"
            >
              <h3 className="text-2xl font-bold mb-6 text-cyan-400 font-mono">LIVE METRICS</h3>
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
                      whileInView={{ width: '80%' }}
                      transition={{ duration: 2 }}
                    ></motion.div>
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
                      whileInView={{ width: '65%' }}
                      transition={{ duration: 2, delay: 0.2 }}
                    ></motion.div>
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
                      whileInView={{ width: '90%' }}
                      transition={{ duration: 2, delay: 0.4 }}
                    ></motion.div>
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
                      whileInView={{ width: '75%' }}
                      transition={{ duration: 2, delay: 0.6 }}
                    ></motion.div>
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
                        backgroundColor: '#1F2937',
                        border: '1px solid #374151',
                        borderRadius: '8px'
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
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-lg p-6"
            >
              <h3 className="text-2xl font-bold mb-6 text-purple-400 font-mono">STRATEGY INTELLIGENCE</h3>

              {/* Tools */}
              <div className="space-y-4 mb-8">
                <h4 className="text-lg font-semibold text-gray-300 mb-4">Core Tools</h4>
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors cursor-pointer group"
                  >
                    <span className="text-2xl">{tool.icon}</span>
                    <div>
                      <div className="font-semibold text-gray-200 group-hover:text-cyan-400 transition-colors">
                        {tool.name}
                      </div>
                      <div className="text-sm text-gray-400">{tool.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Frameworks */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-300 mb-4">Strategic Frameworks</h4>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="p-4 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 border border-cyan-400/20 rounded-lg"
                >
                  <h5 className="font-semibold text-cyan-400 mb-2">Content Pillars Strategy</h5>
                  <p className="text-sm text-gray-300">Building authoritative content ecosystems that drive organic growth and establish thought leadership.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="p-4 bg-gradient-to-r from-green-400/10 to-cyan-400/10 border border-green-400/20 rounded-lg"
                >
                  <h5 className="font-semibold text-green-400 mb-2">Funnel Optimization</h5>
                  <p className="text-sm text-gray-300">Data-driven conversion rate optimization from awareness to revenue generation.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
