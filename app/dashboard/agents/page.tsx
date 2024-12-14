'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Grid, List, Plus } from "lucide-react";
import { agents } from '@/lib/data';
import { AgentList } from './components/agent-list';
import { AgentGrid } from './components/agent-grid';
import Link from 'next/link';

export default function AgentsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentAgents = agents.slice(startIndex, endIndex);
  const totalPages = Math.ceil(agents.length / itemsPerPage);

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Agents</h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
          >
            {viewMode === 'grid' ? <List className="h-4 w-4" /> : <Grid className="h-4 w-4" />}
          </Button>
          <Link href="/dashboard/agents/create">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create an Agent
            </Button>
          </Link>
        </div>
      </div>

      {viewMode === 'list' ? (
        <AgentList agents={currentAgents} startIndex={startIndex} />
      ) : (
        <AgentGrid agents={currentAgents} />
      )}

      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i}
            variant={currentPage === i + 1 ? "default" : "outline"}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </Button>
        ))}
      </div>
    </div>
  );
}