'use client';

import { useState } from 'react';
import { Address } from '@/lib/types';
import { toast } from 'sonner';

export function useAddresses() {
  const [isLoading, setIsLoading] = useState(false);

  const createAddress = async (data: Omit<Address, 'id'>) => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/addresses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to create address');
      
      const address = await response.json();
      toast.success('Address created successfully');
      return address;
    } catch (error) {
      toast.error('Failed to create address');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const updateAddress = async (id: string, data: Partial<Address>) => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/addresses/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to update address');
      
      const address = await response.json();
      toast.success('Address updated successfully');
      return address;
    } catch (error) {
      toast.error('Failed to update address');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteAddress = async (id: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/addresses/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete address');
      
      toast.success('Address deleted successfully');
    } catch (error) {
      toast.error('Failed to delete address');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    createAddress,
    updateAddress,
    deleteAddress,
  };
}