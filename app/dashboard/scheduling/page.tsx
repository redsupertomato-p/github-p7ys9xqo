'use client';

import { useState } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { addresses, agents, meetings } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SchedulingPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedAgent, setSelectedAgent] = useState<string>("");
  const [selectedAddress, setSelectedAddress] = useState<string>("");

  const handleScheduleMeeting = () => {
    if (!date || !selectedAgent || !selectedAddress) return;
    // In a real app, this would make an API call to create a meeting
    console.log("Scheduling meeting:", { date, selectedAgent, selectedAddress });
  };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Schedule a Meeting</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
          <div className="space-y-2">
            <Select onValueChange={setSelectedAgent}>
              <SelectTrigger>
                <SelectValue placeholder="Select an agent" />
              </SelectTrigger>
              <SelectContent>
                {agents.map((agent) => (
                  <SelectItem key={agent.id} value={agent.id.toString()}>
                    {agent.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Select onValueChange={setSelectedAddress}>
              <SelectTrigger>
                <SelectValue placeholder="Select an address" />
              </SelectTrigger>
              <SelectContent>
                {addresses.map((address) => (
                  <SelectItem key={address.id} value={address.id.toString()}>
                    {address.name} - {address.address}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button
            className="w-full"
            onClick={handleScheduleMeeting}
            disabled={!date || !selectedAgent || !selectedAddress}
          >
            Schedule Meeting
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Meetings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {meetings.map((meeting) => {
              const agent = agents.find(a => a.id === meeting.agentId);
              const address = addresses.find(a => a.id === meeting.addressId);
              
              return (
                <div
                  key={meeting.id}
                  className="p-4 border rounded-lg space-y-2"
                >
                  <h3 className="font-semibold">{meeting.title}</h3>
                  <p className="text-sm text-gray-500">
                    Date: {new Date(meeting.date).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-500">
                    Agent: {agent?.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    Location: {address?.name}
                  </p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}