import React from 'react';
import './SuccessFailPage.css';

function SuccessComponent() {
  return (
    <div className="status-page success">
      <div className="status-icon">&#10003;</div>
      <h2>Payment Successful</h2>
      <p>Your payment has been processed successfully.</p>
    </div>
  );
}

export default SuccessComponent;
