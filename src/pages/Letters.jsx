import React from 'react';
import Navbar from '../components/Navbar';

function Letters() {
  // Letter sample data with placeholder Google Drive links
  const letterSamples = [
    {
      id: 1,
      title: "Personal information Update",
      driveLink: "https://drive.google.com/your-link-here", // Replace with actual Google Drive link
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Dispute Inquiries",
      driveLink: "https://drive.google.com/your-link-here", // Replace with actual Google Drive link
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Debt Validation",
      driveLink: "https://drive.google.com/your-link-here", // Replace with actual Google Drive link
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "Place Security Freeze",
      driveLink: "https://drive.google.com/your-link-here", // Replace with actual Google Drive link
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      )
    },
    {
      id: 5,
      title: "Request Consumer Credit Report",
      driveLink: "https://drive.google.com/your-link-here", // Replace with actual Google Drive link
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
        </svg>
      )
    },
    {
      id: 6,
      title: "Fraud Alert Removal",
      driveLink: "https://drive.google.com/your-link-here", // Replace with actual Google Drive link
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
        </svg>
      )
    }
  ];

  return (
    <>
      <Navbar />
      
      <div className="page-container">
        <div className="letters-container">
          {/* Letters Header */}
          <div className="letters-header">
            <h2 className="letters-main-title">Some Sample Letters</h2>
          </div>

          {/* Letters Grid */}
          <div className="letters-grid">
            {letterSamples.map((letter) => (
              <div key={letter.id} className="letter-card">
                <div className="letter-icon">
                  {letter.icon}
                </div>
                <div className="letter-content">
                  <h3>{letter.title}</h3>
                  <p>{letter.description}</p>
                  <a 
                    href={letter.driveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="letter-link"
                  >
                    View Template
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <footer className="page-footer">
          <p className="copyright">&copy; {new Date().getFullYear()} Credit Repair Portfolio. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default Letters;