import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Mobile from "./Mobile";
import Bookchange from "./Bookchange";
import Service from "./Service";
import Bookingbusiness from "./Bookingbusiness";

export default function Footermenu() {
  return (
    <>
      <section className="container">
        <div className="footer-menu">
          <ul className="footer-list">
            <li>
              <Link to="/mobile">Mobile Version</Link>
            </li>

            <li>
              <Link to="/bookchange">Make changes to your booking online</Link>
            </li>
            <li>
              <Link to="/service">Customer Service help</Link>
            </li>
            <li>
              <Link to="/affiliate">Become an affiliate</Link>
            </li>
            <li>
              <Link to="/bookingbusiness">Booking.com for Business</Link>
            </li>
          </ul>
        </div>
      </section>
      <Routes>
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/bookchange" element={<Bookchange />} />
        <Route path="/service" element={<Service />} />
        <Route path="/bookingbusiness" element={<Bookingbusiness />} />
      </Routes>
    </>
  );
}
