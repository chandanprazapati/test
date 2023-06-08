import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Service from "./Service";

export default function Mainmenu() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </>
  );
}
