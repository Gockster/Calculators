import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx'
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';
import React, { useState } from 'react';

function App() {

 
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
});

const inputIsValid = userInput.duration >= 1;


function handleChange(inputIdentifier, newValue ){
 setUserInput((prevUserInput) => {
    return{
        ...prevUserInput,
        [inputIdentifier]: +newValue
    }
 })
}
    
  return (
    <>
  <Header />
  <UserInput userInput={userInput} onChange={handleChange} />
  {!inputIsValid && <p className='center'>Please anter Duration greater than zero</p>}
  {inputIsValid && <Results input={userInput} />}
  </>
  );
}

export default App;
