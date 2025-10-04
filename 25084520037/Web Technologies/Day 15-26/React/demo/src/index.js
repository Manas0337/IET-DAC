import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';

import reportWebVitals from './reportWebVitals';
import Calculator from './Q1calc';
import Factorial from './Q1Fact'
import OperationCalculator from './Q1operationcalc';
import { Header, Footer, Content } from './Q2Multiplefunction';
import TextTransformer from './Q3Classcomponent'; // adjust path as needed



function Layout() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Calculator num1="10" num2="20" />
    <Factorial number="10" />
    <OperationCalculator num1="20" num2="10" operation="Subtraction" />
    <Layout />
    <TextTransformer></TextTransformer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
