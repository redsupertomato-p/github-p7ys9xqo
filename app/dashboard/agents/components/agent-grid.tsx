'use client';

import { Agent } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, Volume2 } from "lucide-react";

interface AgentGridProps {
  agents: Agent[];
}

export function AgentGrid({ agents }: AgentGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {agents.map((agent) => (
        <Card key={agent.id}>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>{agent.title}</span>
              <Volume2 className="h-5 w-5 text-gray-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm font-medium">Name: {agent.name}</p>
              <p className="text-sm text-gray-500">Voice: {agent.voice}</p>
              <p className="text-sm text-gray-500">Language: {agent.language}</p>
              <p className="text-sm text-gray-500">State: {agent.state}</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="ghost" size="icon">
              <Pencil className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Trash2 className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}