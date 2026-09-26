import React from "react";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FitLogProvider } from "../context/FitLogContext";

export const metadata = {
  title: "FitLog — Workout Library",
  description: "Train with intent. Log every set."
};
const RootLayout = ({ children }) => {
  return (
    <html className="scroll-smooth">
      <body className="m-0 bg-[#090a08] font-sans text-[#f2f3ec]">
        <FitLogProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </FitLogProvider>
      </body>
    </html>
  );
};

export default RootLayout;
