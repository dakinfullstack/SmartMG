"use client";
import React from "react";
export const dynamic = "force-dynamic";
import { useState } from "react";
import Drawer from "../_component/layout/drawer";
const drawerWidth = 240;
type Props = { children: React.ReactNode };

export default function layout({ children }: Props) {
  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="flex h-screen bg-gray-100">
        <div>
          <Drawer />
        </div>

        <div className="flex-1 p-6">
          {children}
          {/* <div className="grid grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-bold mb-2">Total Users</h3>
                <p className="text-4xl font-bold">1,234</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-bold mb-2">Total Sales</h3>
                <p className="text-4xl font-bold">$56,789</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-bold mb-2">Total Revenue</h3>
                <p className="text-4xl font-bold">$123,456</p>
              </div>
            </div>
  
            <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="bg-white rounded-lg shadow p-6"></div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-bold mb-4">Sales by Channel</h3>
              </div>
            </div>
  
            <div className="bg-white rounded-lg shadow p-6 mt-6">
              <h3 className="text-lg font-bold mb-4">Activity Overview</h3>
            </div> */}
        </div>
      </div>
    </>
  );
}
