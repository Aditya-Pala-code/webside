// ===============================
// components/Layout.jsx
// ===============================

import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />

      {/* Ye part change hoga */}
      <Outlet />

      <Footer />
    </>
  );
}