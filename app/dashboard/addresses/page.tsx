'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { addresses } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { AddressTable } from './components/address-table';

export default function AddressesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredAddresses = addresses?.filter(address =>
    Object.values(address).some(
      value => value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  ) || [];

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentAddresses = filteredAddresses.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredAddresses.length / itemsPerPage);

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Addresses</h2>
        <div className="w-1/3">
          <Input
            placeholder="Search addresses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Card className="p-4">
        <AddressTable addresses={currentAddresses} startIndex={startIndex} />
      </Card>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2">
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
      )}
    </div>
  );
}