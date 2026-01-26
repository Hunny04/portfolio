import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Alert {
  id: string;
  type: "info" | "success" | "warning" | "error";
  title: string;
  message: string;
  timestamp: Date;
}

const SystemAlerts = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    const alertTemplates = [
      { type: "success" as const, title: "Campaign Optimized", message: "Meta Ads performance increased by 15%" },
      { type: "info" as const, title: "Data Sync Complete", message: "Analytics data updated successfully" },
      { type: "warning" as const, title: "High Traffic Detected", message: "Server load at 78% capacity" },
      { type: "success" as const, title: "Conversion Goal Met", message: "Monthly target achieved ahead of schedule" },
      { type: "info" as const, title: "AI Analysis Updated", message: "New insights available for review" },
      { type: "warning" as const, title: "Budget Alert", message: "Campaign budget 85% utilized" },
    ];

    const createAlert = () => {
      const template = alertTemplates[Math.floor(Math.random() * alertTemplates.length)];
      const alert: Alert = {
        id: Date.now().toString(),
        type: template.type,
        title: template.title,
        message: template.message,
        timestamp: new Date(),
      };

      setAlerts((prev) => [alert, ...prev.slice(0, 4)]); // Keep only 5 alerts

      // Auto-remove after 8 seconds
      setTimeout(() => {
        setAlerts((prev) => prev.filter((a) => a.id !== alert.id));
      }, 4000);
    };

    // Create alerts periodically
    const interval = setInterval(createAlert, 8000 + Math.random() * 10000);

    return () => clearInterval(interval);
  }, []);

  const getAlertStyles = (type: Alert["type"]) => {
    switch (type) {
      case "success":
        return "border-neon-green bg-neon-green/10 text-neon-green";
      case "warning":
        return "border-yellow-400 bg-yellow-400/10 text-yellow-400";
      case "error":
        return "border-red-400 bg-red-400/10 text-red-400";
      default:
        return "border-neon-cyan bg-neon-cyan/10 text-neon-cyan";
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
      <AnimatePresence>
        {alerts.map((alert) => (
          <motion.div
            key={alert.id}
            initial={{ opacity: 0, x: 300, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`p-4 rounded-lg border backdrop-blur-sm shadow-lg ${getAlertStyles(alert.type)}`}>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-semibold text-sm">{alert.title}</h4>
                <p className="text-xs opacity-80 mt-1">{alert.message}</p>
                <p className="text-xs opacity-60 mt-2">{alert.timestamp.toLocaleTimeString()}</p>
              </div>
              <button
                onClick={() => setAlerts((prev) => prev.filter((a) => a.id !== alert.id))}
                className="ml-2 text-current opacity-60 hover:opacity-100 transition-opacity">
                ×
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default SystemAlerts;
