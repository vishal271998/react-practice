import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Link } from 'react-router-dom';
import Routes from "./routes";

ReactDOM.render((

    <div className="wrapper">
        <BrowserRouter>
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/contact/contact-form">Contact Form</Link></li>
        </ul>
    </nav>

            <Routes />
        </BrowserRouter>
    </div>
), document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
