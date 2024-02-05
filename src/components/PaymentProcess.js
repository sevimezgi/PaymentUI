import React, { useState } from 'react';
import SelectNetwork from './SelectNetwork';
import SelectCurrency from './SelectCurrency';
import PaymentPage from './PaymentPage';

function PaymentProcess() {
  const [step, setStep] = useState('selectNetwork');
  const [chainId, setChainId] = useState(null);
  const [tokenContractAddress, setTokenContractAddress] = useState(null);

  const handleSelectNetwork = (network) => {
    setChainId(network);
    setStep('selectCurrency');
  };

  const handleSelectCurrency = (currency) => {
    setTokenContractAddress(currency);
    setStep('paymentPage');
  };

  return (
    <div>
      {step === 'selectNetwork' && <SelectNetwork onSelectNetwork={handleSelectNetwork} />}
      {step === 'selectCurrency' && <SelectCurrency onSelectCurrency={handleSelectCurrency} />}
      {step === 'paymentPage' && <PaymentPage chainId={chainId} tokenContractAddress={tokenContractAddress} />}
    </div>
  );
}

export default PaymentProcess;
