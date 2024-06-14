import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import ProfileImage from './Components/ProfileImage.js';
import Introduction from './Components/Introduction.js';
import Body from './Components/Body.js';
import Footer from './Components/Footer.js';


function Main() {
  return (
    <div className='container'>
      <div className='main-content'>
        <ProfileImage />
        <Introduction />
        <Body />
        <Footer />
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < Main />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
