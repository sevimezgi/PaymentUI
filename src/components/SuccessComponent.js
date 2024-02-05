import React from 'react';
import { useLocation } from 'react-router-dom';
import './SuccessFailPage.css';

function SuccessComponent() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const amount = queryParams.get('amount');
  const userId = queryParams.get('userId');
  const network = queryParams.get('network');
  const currency = queryParams.get('currency');

  return (
    <div className="status-page success">
      <div className="status-icon">&#10003;</div>
      <h2>Payment Successful</h2>
      <p>Your payment has been processed successfully.</p>
      <div className="details-container">
        <p className="detail"><div className='strong'>Network:</div> {network}</p>
        <p className="detail"><div className='strong'>Currency:</div> {currency}</p>
        <p className="detail"><div className='strong'>Amount:</div> {amount}</p>
        <p className="detail"><div className='strong'>User ID:</div> {userId}</p>
      </div>
    </div>
  );
}

export default SuccessComponent;