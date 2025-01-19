import React from 'react';
//import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import SearchBar from '@/components/searchbar'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 bg-[#F5F5F5] relative">
        <div className='sticky top-0 bg-white py-3 border-b flex items-center gap-4'>        
          <SidebarTrigger />
          <SearchBar/>
        </div>
        <div className='px-2 pt-1 pb-2'>
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
};

export default Layout; 