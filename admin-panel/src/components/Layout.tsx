import React from 'react';
//import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 px-2 pb-2 bg-[#F5F5F5]">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default Layout; 