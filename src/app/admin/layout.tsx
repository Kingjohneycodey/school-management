import React, { ReactNode } from 'react';

interface AdminLayoutProps {
    children: ReactNode;
  }

  const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div>
     <header>Header</header>
     <nav>Sidebar</nav>
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;
