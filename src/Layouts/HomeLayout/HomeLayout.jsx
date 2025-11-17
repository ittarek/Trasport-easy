import Navbar from '@/components/Header/Navbar';
import React from 'react';
import { Outlet } from 'react-router';

export const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
