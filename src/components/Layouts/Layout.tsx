import React, { useState } from "react";

import { ToastContainer } from "react-toastify";

import TopBar from "../Admin/TopBar";
import Sidebar from "../Admin/Sidebar";
import HeadComponent from "../HeadComponent";
import MobileSidebar from "../MobileSidebar";

export default function Layout({ title, children }: any) {
  const [isOpen, setIsOpen] = useState(true);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  return (
    <>
      <HeadComponent title={title} />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <main
        className={`flex flex-row  w-full min-h-screen ${isOpen ? "md:gap-[200px]" : "md:gap-[60px]"
          }`}
      >
        <aside className="sidebar">
          <Sidebar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
          {showMobileSidebar &&
            <MobileSidebar setShowMobileSidebar={setShowMobileSidebar} />

          }
        </aside>
        <div className="w-full bg-gray-200">
          <TopBar
            showMobileSidebar={showMobileSidebar}
            setShowMobileSidebar={setShowMobileSidebar}
          />
          {children}
        </div>
      </main>
    </>
  );
}
