import React from "react";
import "./App.css";
import {NavLink} from "react-router-dom"

function Navbar() {
  return (
    <>
      <div className="container_fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg bg-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="#">
                  Ujjawal Web
                </NavLink>
                
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink activeclassname="menu_active"
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeclassname="menu_active" className="nav-link" to="/Service">
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeclassname="menu_active" className="nav-link" to="/About">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeclassname="menu_active" className="nav-link" to="/Contact">
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
