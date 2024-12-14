'use client';

import { Sidebar } from "@/components/layout/sidebar";
import { Navbar } from "@/components/layout/navbar";
import { useAuthRedirect } from "@/hooks/use-auth-redirect";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading } = useAuthRedirect();

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
      </div>
    );
  }

  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex h-[calc(100vh-4rem)]">
        <div className="hidden md:flex w-72 flex-col fixed inset-y-16 z-50">
          <Sidebar />
        </div>
        <main className="flex-1 md:pl-72 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}