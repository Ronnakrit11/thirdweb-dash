"use client";

import { Card } from "@/components/ui/card";
import { 
  Activity, 
  CreditCard, 
  DollarSign, 
  Users 
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    icon: DollarSign,
    description: "+20.1% from last month",
  },
  {
    title: "Active Users",
    value: "2,350",
    icon: Users,
    description: "+180 new users",
  },
  {
    title: "Active Subscriptions",
    value: "1,200",
    icon: CreditCard,
    description: "+19% from last month",
  },
  {
    title: "Active Now",
    value: "573",
    icon: Activity,
    description: "+201 since last hour",
  },
];

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <stat.icon className="h-8 w-8 text-purple-500" />
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </p>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}