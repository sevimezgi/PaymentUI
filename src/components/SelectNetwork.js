import React from 'react';
import './PaymentProcess.css';
import polygonIcon from '../images/polygonIcon.png';

function SelectNetwork({ onSelectNetwork }) {
    return (
        <div className="select-container">
            <h2>Select Network</h2>
            <button className="select-button" onClick={() => onSelectNetwork('137')}>
                <img src={polygonIcon} alt="Polygon" className="button-icon" />
                Polygon Network
            </button>
        </div>
    );
}

export default SelectNetwork;
