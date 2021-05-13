import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'

const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
const image1 = "https://picsum.photos/200/300";
const image2 = "https://picsum.photos/250/400";
const image3 = "https://picsum.photos/300/400";
const redirect = "https://www.google.com"

const heading = {
  color: '#fa9191',
  textTransfor: 'capitalize',
  textAlign: 'center',
  fontWeight: 'bold',
  textShadow: '0px 2px 4px #ffe9c5',
  margin: '50px 0px',
  fontFamily: '"Josefin Sans", sans-serif'
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
