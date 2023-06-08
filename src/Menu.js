import React from "react";
import { Link } from "react-router-dom";
import logodata from "./Logodata";

export default function () {
  return (
    <div>
      <header>
        <nav>
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <p className="booking">
                  {" "}
                  <Link to="/"> Booking.com </Link>
                </p>
              </div>

              <div className="col-lg-7">
                <ul className="head-btn">
                  <li>
                    <button className="btn">NPR</button>
                  </li>
                  <li>
                    <button className="btn">
                      {logodata.map((a) => (
                        <img src={a.logo} alt="" />
                      ))}
                    </button>
                  </li>
                  <li>
                    {" "}
                    <button className="btn">
                      {" "}
                      <i class="bi bi-question-circle"></i>{" "}
                    </button>
                  </li>
                  <li>
                    {" "}
                    <button className="btn-list"> List your Property </button>
                  </li>
                  <li>
                    {" "}
                    <button className="btnn"> Register </button>
                  </li>
                  <li>
                    {" "}
                    <button className="btnn"> Sign in </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <nav>
          <div className="container">
            <div className="link-logo">
              <ul className="link-ul">
                <li>
                  {" "}
                  <button>
                    {" "}
                    <i class="bi bi-building"></i> stays
                  </button>{" "}
                </li>
                <li>
                  {" "}
                  <button>
                    <i class="bi bi-airplane"></i> flights{" "}
                  </button>{" "}
                </li>
                <li>
                  {" "}
                  <button>
                    {" "}
                    <i class="bi bi-car-front"></i> Car rentals{" "}
                  </button>{" "}
                </li>
                <li>
                  {" "}
                  <button>
                    {" "}
                    <i class="bi bi-award"></i> Attractions{" "}
                  </button>{" "}
                </li>
                <li>
                  {" "}
                  <button>Airport Taxis</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
