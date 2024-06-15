import React from 'react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-screen w-screen">{children}</div>;
};
