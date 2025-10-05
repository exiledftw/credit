import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";
import brilliance from "../assets/brilliance.svg";
import file from "../assets/file-pencil-alt-svgrepo-com.svg"

function Home() {
  return (
    <>
      <Navbar />

      {/* Main content container */}
        <div className="page-container">
          <div className="home">
            <div className="home-container">
          <h1 className="home-title">Credit Repair Portfolio</h1>
          <p className="home-subtitle">"
            We strengthen your credit services - You strengthen your clients."
          </p>
          <div className="home-content">
            <div className="feature-card">
              <Link to="/services" style={{ textDecoration: "none", color: "inherit" }}>
            <img src={ brilliance } alt="bril icon" width={32} height={32} />
            <p>Our services.</p>
              </Link>
            </div>

            <div className="feature-card">
              <Link to="/letters" style={{ textDecoration: "none", color: "inherit" }}>
            <img src={ file } alt="file icon" width={32} height={32}/>
            <p>Sample letters.</p>
              </Link>
            </div>
          </div>
            </div>
          </div>
          
          {/* Footer */}
        <footer className="page-footer">
          <p className="copyright">&copy; {new Date().getFullYear()} Darkhi. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default Home;
