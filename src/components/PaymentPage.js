// PaymentPage.js
import React, { useState } from 'react';
import axios from 'axios';
import './PaymentPage.css';

function PaymentPage({ chainId, tokenContractAddress }) {
    const [amount, setAmount] = useState('');
    const [userId, setUserId] = useState('');
    const [isReloading, setIsReloading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const serverUrl = process.env.REACT_APP_SERVER_URL;

        try {
            const response = await axios.post(`${serverUrl}/api/createPayment`, {
                amount,
                userId,
                chainId,
                tokenContractAddress
              }, {
                headers: {
                  'Content-Type': 'application/json'
                }
              });

            if (response.data && response.data.code === 0) {
                const { invoiceCallbackUrl } = response.data.data;
                window.open(invoiceCallbackUrl, '_blank');
            }

        } catch (error) {
            console.error('Error making the API call', error);
        }
    };

    const handleReload = () => {
        setAmount('');
        setUserId('');
        setIsReloading(true);
        setTimeout(() => setIsReloading(false), 1000);
    };

    return (
        <div className="payment-container">
            <div className="header">
                <h2>Payment Page</h2>
                <svg onClick={handleReload} className={`reload-icon ${isReloading ? 'rotate' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" height="24" width="24">
                    <polyline points="23 4 23 10 17 10"></polyline>
                    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
                </svg>
            </div>
            <form className="payment-form" onSubmit={handleSubmit}>
                <div className="inputbox">
                    <input
                        type="number"
                        value={amount}
                        name="amount"
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                    <span>Amount</span>
                </div>
                <div className="inputbox">
                    <input
                        type="text"
                        value={userId}
                        name="receiverAddress"
                        onChange={(e) => setUserId(e.target.value)}
                        required
                    />
                    <span>User ID</span>
                </div>
                <div className="pay">
                    <button type="submit" className="btn btn-success btn-block">Submit Payment</button>
                </div>
            </form>
        </div>
    );
}

export default PaymentPage;
