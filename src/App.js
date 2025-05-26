import React, { useState } from 'react';
import './App.css';

function App() {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [durationMonths, setDurationMonths] = useState(120);
  const [interestRate, setInterestRate] = useState(8.5);
  const [fixedInstallment, setFixedInstallment] = useState(15000);
  const [balance, setBalance] = useState(null);
  const [savingAmount, setSavingAmount] = useState(450000);
  const [savingSum, setSavingSum] = useState(null);

  const findBalance = () => {
    let bal = loanAmount;
    for (let index = 1; index <= durationMonths; index++) {
      bal = bal - (fixedInstallment - (bal * interestRate / 100 / 12));
    }
    setBalance(bal.toFixed(2));
  };

  const findSum = () => {
    let sum = 0;
    for (let index = 3; index <= durationMonths;) {
      if (sum === 0) {
        sum = savingAmount + (savingAmount * interestRate / 100 / 4);
      } else {
        sum = savingAmount + sum + sum * interestRate / 100 / 4;
      }
      console.log(`after ${index} months: ${sum}`);
      index += 3;
    }
    setSavingSum(sum.toFixed(2));
  };

  return (
    <div className="App">
      <h1>Loan and Savings Calculator</h1>

      <div>
      <h2>Savings Sum Calculation</h2>
        <label>Duration (months)</label>
        <input type="number" value={durationMonths} onChange={e => setDurationMonths(+e.target.value)} placeholder="Duration (months)" />
        <label>Interest Rate (%)</label>
        <input type="number" value={interestRate} onChange={e => setInterestRate(+e.target.value)} placeholder="Interest Rate (%)" />
        <label>Saving Amount</label>
        <input type="number" value={savingAmount} onChange={e => setSavingAmount(+e.target.value)} placeholder="Saving Amount" />
        <button onClick={findSum}>Calculate Saving Sum</button>
        {savingSum !== null && <p>Total Savings after {durationMonths} months: <strong>{savingSum}</strong></p>}
      </div>
    </div>
  );
}

export default App;
