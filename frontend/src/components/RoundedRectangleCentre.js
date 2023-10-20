// src/components/RoundedRectangleCentre.js
import React from 'react';
import '../styles/RoundedRectangle.css';

function RoundedRectangleCentre({ children }) { // Accept children as props
  return (
    <div className="rounded-rectangle">
      {children}  
    </div>
  );
}

export default RoundedRectangleCentre;
