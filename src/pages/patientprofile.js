import React, { useState } from 'react';
import 'E:/SEHAT/sehat-app/src/pages/patientprofile.css'; // Import the CSS for styling

const PatientProfile = () => {
  const [showQRCode, setShowQRCode] = useState(false);

  // Hardcoded sample patient data (replace this with actual data when backend is added)
  const patient = {
    name: "John Doe",
    dob: "1985-06-15",
    email: "johndoe@example.com",
    phone: "+91 9876543210",
    aadhar: "123456781234",
    image: "https://via.placeholder.com/100",
    qrCode: "https://via.placeholder.com/150"
  };

  // Function to encode the first 8 digits of the Aadhar card number
  const encodeAadhar = (aadhar) => {
    return aadhar.slice(0, 4).replace(/\d/g, '*') + aadhar.slice(4, 8).replace(/\d/g, '*') + aadhar.slice(8);
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={patient.image} alt="Patient" className="profile-image" />
        <h2>{patient.name}</h2>
        <p><strong>Date of Birth:</strong> {patient.dob}</p>
        <p><strong>Email:</strong> {patient.email}</p>
        <p><strong>Phone Number:</strong> {patient.phone}</p>
        <p><strong>Aadhar Number:</strong> {encodeAadhar(patient.aadhar)}</p>

        <button className="qr-button" onClick={() => setShowQRCode(!showQRCode)}>
          {showQRCode ? 'Hide QR Code' : 'View QR Code'}
        </button>

        {showQRCode && (
          <div className="qr-code">
            <img src={patient.qrCode} alt="QR Code" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientProfile;
