'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', meetings: 4, agents: 2 },
  { name: 'Feb', meetings: 3, agents: 3 },
  { name: 'Mar', meetings: 6, agents: 4 },
  { name: 'Apr', meetings: 8, agents: 4 },
  { name: 'May', meetings: 7, agents: 5 },
];

export default function CRMPage() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">CRM Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Activity Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart width={500} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="meetings" fill="hsl(var(--chart-1))" name="Meetings" />
              <Bar dataKey="agents" fill="hsl(var(--chart-2))" name="Active Agents" />
            </BarChart>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b pb-2">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.meetings} meetings scheduled</p>
                  </div>
                  <div className="text-sm text-gray-500">
                    {item.agents} active agents
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}