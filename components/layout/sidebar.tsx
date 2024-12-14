'use client';

import { cn } from "@/lib/utils";
import { Calendar, Users, MapPin, BarChart3, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const routes = [
  {
    label: 'CRM',
    icon: BarChart3,
    href: '/dashboard/crm',
  },
  {
    label: 'Scheduling',
    icon: Calendar,
    href: '/dashboard/scheduling',
  },
  {
    label: 'Agents',
    icon: Users,
    href: '/dashboard/agents',
  },
  {
    label: 'Addresses',
    icon: MapPin,
    href: '/dashboard/addresses',
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const SidebarContent = () => (
    <div className="space-y-4 py-4 flex flex-col h-full bg-gray-100">
      <div className="px-3 py-2 flex-1">
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              onClick={() => setOpen(false)}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                pathname === route.href ? "text-primary bg-primary/10" : "text-gray-500"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3")} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="hidden md:flex h-full">
        <SidebarContent />
      </div>
      
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="md:hidden fixed bottom-4 right-4">
          <button className="p-2 bg-primary text-white rounded-full shadow-lg">
            <Menu className="h-6 w-6" />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-72">
          <SidebarContent />
        </SheetContent>
      </Sheet>
    </>
  );
}