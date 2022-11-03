import React from "react";

import { ToastContainer } from "react-toastify";

import HeadComponent from "../HeadComponent";

export default function AuthLayout({ title, children }: any) {
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
      <main className="w-full h-screen bg-gradient-to-r from-[#0F172A] to-[#193152] flex justify-center items-center transition-opacity">
        <div>
          {children}
          <p className="text-center text-white text-xs">
            &copy;2022 Dev Saul. All rights reserved.
          </p>
        </div>
      </main>
    </>
  );
}
