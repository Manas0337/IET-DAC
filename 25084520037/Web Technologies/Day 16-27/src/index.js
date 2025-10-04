import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Factorial from './Q1Factstatemanagement';
import Calculator from './Q1Calstatemanagement';
import OperationCalculator from './Q1operationcalcstatemgmt';
import LifecycleDemo from './Q2LifecycleDemo';
import TextTransformer from "./Q3TextTransformer";
import UserDetailsForm from "./Q4UserDetailsForm";





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  <Factorial number={6} />
  <Calculator num1={40} num2={50}/>
  
  <OperationCalculator num1={20} num2={58} operation="Addition" />
  <OperationCalculator num1={20} num2={58} operation="Subtraction" />
  <OperationCalculator num1={20} num2={58} operation="Multiplication" />
  <OperationCalculator num1={20} num2={58} operation="Division" />
  
    <LifecycleDemo />

  <TextTransformer />
  <UserDetailsForm />
  </React.StrictMode>
);


reportWebVitals();
