import React, { ReactNode } from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import Header from '../Header/Header';

const Layout = () => {
  return (
    <div className="">
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

// interface LayoutProps {
//   children: React.ReactNode;
// }

// const Layout: React.FC<LayoutProps> = ({ children }) => {
//   return <div className="layout">{children}</div>;
// };

export default Layout;
