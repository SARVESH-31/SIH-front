import React, { useState } from 'react';
import './pharmacyhome.css';
import { QrReader } from 'react-qr-reader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faQrcode, faCheckCircle } from '@fortawesome/free-solid-svg-icons'; // Import specific icons

const PharmacyHome = () => {
  const [qrData, setQrData] = useState(null);
  const [isCameraActive, setIsCameraActive] = useState(false);

  const handleScan = (data) => {
    if (data) {
      setQrData(data);
      setIsCameraActive(false);  // Turn off camera after successful scan
    }
  };

  const handleError = (err) => {
    console.error("QR Code Scanning Error:", err);
  };

  const handleActivateCamera = () => {
    setIsCameraActive(true);
  };

  return (
    <div className="pharmacy-home-container">
      <h1>Welcome, Pharmacy</h1>

      {!isCameraActive && (
        <button className="scan-btn" onClick={handleActivateCamera}>
          <FontAwesomeIcon icon={faQrcode} className="icon" /> Scan QR Code
        </button>
      )}

      {isCameraActive && (
        <div className="scanner-container">
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: '100%' }}
          />
        </div>
      )}

      {qrData && (
        <div className="qr-data">
          <FontAwesomeIcon icon={faCheckCircle} className="icon-success" /> 
          <p>Scanned Data: {qrData}</p>
        </div>
      )}
    </div>
  );
};

export default PharmacyHome;
