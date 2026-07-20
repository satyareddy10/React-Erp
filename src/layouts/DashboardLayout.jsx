/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="admin-layout">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <main className="admin-content">
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsSidebarOpen(true)}
        >
          ☰ Menu
        </button>
        {children || <Outlet />}
      </main>
    </div>
  );
}

export default DashboardLayout;
