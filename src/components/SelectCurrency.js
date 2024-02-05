import React from 'react';
import './PaymentProcess.css';
import usdtIcon from '../images/USDTIcon.png';

function SelectCurrency({ onSelectCurrency }) {
    return (
        <div className="select-container">
            <h2>Select Currency</h2>
            <button className="select-button" onClick={() => onSelectCurrency('0xc2132D05D31c914a87C6611C10748AEb04B58e8F')}>
                <img src={usdtIcon} alt="USDT" className="button-icon" />
                USDT
            </button>
            <button className="select-button" onClick={() => onSelectCurrency(null)}>Next</button>
        </div>
    );
}

export default SelectCurrency;
