"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const activities = [
  {
    user: "John Doe",
    action: "created a new project",
    time: "2 minutes ago",
  },
  {
    user: "Jane Smith",
    action: "uploaded a new file",
    time: "5 minutes ago",
  },
  {
    user: "Mike Johnson",
    action: "completed a task",
    time: "10 minutes ago",
  },
  {
    user: "Sarah Wilson",
    action: "commented on a project",
    time: "15 minutes ago",
  },
];

export function RecentActivity() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0"
          >
            <div>
              <p className="font-medium">{activity.user}</p>
              <p className="text-sm text-muted-foreground">{activity.action}</p>
            </div>
            <span className="text-sm text-muted-foreground">{activity.time}</span>
          </motion.div>
        ))}
      </div>
    </Card>
  );
}