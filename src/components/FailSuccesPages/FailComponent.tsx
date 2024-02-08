import './SuccessFailPage.css';

const FailComponent = () => {
  return (
    <div className="status-page fail">
      <div className="status-icon">&#10060;</div>
      <h2>Payment Failed</h2>
      <p>There was an issue processing your payment. Please try again.</p>
    </div>
  );
}

export default FailComponent;
