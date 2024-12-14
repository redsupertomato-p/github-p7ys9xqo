'use client';

import { useState } from 'react';
import { Agent } from '@/lib/types';
import { toast } from 'sonner';

export function useAgents() {
  const [isLoading, setIsLoading] = useState(false);

  const createAgent = async (data: Omit<Agent, 'id'>) => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/agents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to create agent');
      
      const agent = await response.json();
      toast.success('Agent created successfully');
      return agent;
    } catch (error) {
      toast.error('Failed to create agent');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const updateAgent = async (id: string, data: Partial<Agent>) => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/agents/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to update agent');
      
      const agent = await response.json();
      toast.success('Agent updated successfully');
      return agent;
    } catch (error) {
      toast.error('Failed to update agent');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteAgent = async (id: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/agents/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete agent');
      
      toast.success('Agent deleted successfully');
    } catch (error) {
      toast.error('Failed to delete agent');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    createAgent,
    updateAgent,
    deleteAgent,
  };
}