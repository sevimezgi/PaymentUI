import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaymentProcess from './components/PaymentProcess';
import SuccessComponent from './components/SuccessComponent';
import FailComponent from './components/FailComponent';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PaymentProcess />} />
          <Route path="/success.html" element={<SuccessComponent />} />
          <Route path="/fail.html" element={<FailComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
