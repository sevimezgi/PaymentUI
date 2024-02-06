import React from 'react';
import { useLocation } from 'react-router-dom';
import './SuccessFailPage.css';

function SuccessComponent() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const txId = queryParams.get('tx_id');
  const receiverAddress = queryParams.get('receiver_address');
  const txHash = queryParams.get('tx_hash');
  const currency = queryParams.get('currency');
  const networkName = queryParams.get('network_name');

  return (
    <div className="status-page success">
      <div className="status-icon">&#10003;</div>
      <h2>Payment Successful</h2>
      <p>Your payment has been processed successfully.</p>
      <div className="details-container">
        <p className="detail"><div className='strong'>Transaction ID:</div> {txId}</p>
        <p className="detail"><div className='strong'>Receiver Address:</div> {receiverAddress}</p>
        <p className="detail"><div className='strong'>Transaction Hash:</div> {txHash}</p>
        <p className="detail"><div className='strong'>Networ kName:</div> {networkName}</p>
        <p className="detail"><div className='strong'>Currency:</div> {currency}</p>
      </div>
    </div>
  );
}

export default SuccessComponent;