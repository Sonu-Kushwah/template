import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'
const currDate =   new Date(). toLocaleDateString(); 
const currTime =   new Date(). toLocaleTimeString();
ReactDOM.render(
  <>
  <App/>
  <h1>Today Date = {currDate} </h1>
  <h2>Current TIme = {currTime} </h2>
  </>,
document.getElementById("root")
);
  