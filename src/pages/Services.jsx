import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import img1 from '../assets/images/1.png'
import img2 from '../assets/images/2.png'
import img3 from '../assets/images/3.png'
import img4 from '../assets/images/4.png'

function Services() {
  const [popupImage, setPopupImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = (image) => {
    setPopupImage(image);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupImage(null);
  };
  return (
    <>
      <Navbar />
      
      <div className="page-container">
        <div className="services-container">
          {/* Hero Section */}
          <div className="services-hero">
            <h1 className="services-title">Our Services</h1>
            <h2 className="services-subtitle">
              "We strengthen your credit services - You strengthen your clients."
            </h2>
          </div>

                <div className="services-content-grid">
                <div className="service-card">
                  <div className="card-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19V1h-2v1H7V1H5v1H4.5C3.67 2 3.01 2.67 3.01 3.5L3 19.5c0 .83.67 1.5 1.5 1.5h15c.83 0 1.5-.67 1.5-1.5v-16C21 2.67 20.33 2 19.5 2zM19.5 19.5h-15V8h15v11.5z"/>
                  </svg>
                  </div>
                  <h3>Credit Report Analysis</h3>
                  <p>
                  Comprehensive review of clients credit reports from all three bureaus. We identify 
                  errors, inaccuracies, and negative items that can be disputed or removed to 
                  improve client credit score.
                  </p>
                </div>

                <div className="service-card">
                  <div className="card-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  </div>
                  <h3>Dispute Resolution</h3>
                  <p>
                  Professional dispute letters and documentation to challenge inaccurate, 
                  outdated, or unverifiable items on client's credit report.
                  </p>
                </div>

                <div className="service-card">
                  <div className="card-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  </div>
                  <h3>Debt Validation</h3>
                  <p>
                  We help verify the legitimacy of debts on client's credit report through 
                  proper debt validation procedures.
                  </p>
                </div>

                <div className="service-card">
                  <div className="card-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                  </div>
                  <h3>Letter generation</h3>
                  <p>
                  We use Credit Repair Cloud to create compliant, 
                  personalized dispute letters based on each client’s credit profile.
                  </p>
                </div>

                <div className="service-card">
                  <div className="card-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                  </div>
                  <h3>Letter Dispatch</h3>
                  <p>
                  We dispatch your letters through CFPB.
                  </p>
                </div>

                <div className="service-card">
                  <div className="card-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
                  </svg>
                  </div>
                  <h3>FTC Reports & Utility Bills</h3>
                  <p>
                  We handle client's FTC reports and manage their utility bills
                  for letter dispatch.
                  </p>
                </div>
                </div>

                {/* Process Section */}
          <div className="process-section">
            <h2 className="section-title">Our Proven Success</h2>
            <p className="subtitle"><center>Please click on the numbers below to expand images.</center></p>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number" onClick={() => openPopup(img1)} style={{cursor: 'pointer'}}>1</div>
                <img src={img1} alt="Credit Building" style={{maxWidth: "100%", height: "auto", marginTop: "1rem"}}></img>
              </div>
              <div className="process-step">
                <div className="step-number" onClick={() => openPopup(img2)} style={{cursor: 'pointer'}}>2</div>
                <img src={img2} alt="Credit Building" style={{maxWidth: "100%", height: "auto", marginTop: "1rem"}}></img>
              </div>
              <div className="process-step">
                <div className="step-number" onClick={() => openPopup(img3)} style={{cursor: 'pointer'}}>3</div>
                <img src={img3} alt="Credit Building" style={{maxWidth: "100%", height: "auto", marginTop: "1rem"}}></img>
              </div>
              <div className="process-step">
                <div className="step-number" onClick={() => openPopup(img4)} style={{cursor: 'pointer'}}>4</div>
                <img src={img4} alt="Credit Building" style={{maxWidth: "100%", height: "auto", marginTop: "1rem"}}></img>
              </div>
            </div>
          </div>
        </div>

        {/* Image Popup Modal */}
        {showPopup && (
          <div className="popup-overlay" onClick={closePopup}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <button className="popup-close" onClick={closePopup}>&times;</button>
              <img src={popupImage} alt="Process Step" className="popup-image" />
            </div>
          </div>
        )}
        
        {/* Footer */}
        <footer className="page-footer">
          <p className="copyright">&copy; {new Date().getFullYear()} Darkhi. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default Services;