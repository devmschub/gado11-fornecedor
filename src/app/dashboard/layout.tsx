'use client';

import { Sidebar } from '@/components/dashboard/Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-background-dark text-white font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-64 overflow-y-auto custom-scrollbar relative">
        {/* Main content area */}
        <main className="flex-1 p-6 lg:p-10 relative">
          <div className="absolute inset-0 pointer-events-none grid-pattern opacity-30 z-0"></div>
          <div className="relative z-10 w-full max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
