'use client';

import { Address } from "@/lib/data";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

interface AddressTableProps {
  addresses: Address[];
  startIndex: number;
}

export function AddressTable({ addresses, startIndex }: AddressTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>No</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Address</TableHead>
          <TableHead>City</TableHead>
          <TableHead>Country</TableHead>
          <TableHead>Phone Number</TableHead>
          <TableHead>Language</TableHead>
          <TableHead>State</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {addresses.map((address, index) => (
          <TableRow key={address.id}>
            <TableCell>{startIndex + index + 1}</TableCell>
            <TableCell>{address.name}</TableCell>
            <TableCell>{address.address}</TableCell>
            <TableCell>{address.city}</TableCell>
            <TableCell>{address.country}</TableCell>
            <TableCell>{address.phoneNumber}</TableCell>
            <TableCell>{address.language}</TableCell>
            <TableCell>{address.state}</TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}