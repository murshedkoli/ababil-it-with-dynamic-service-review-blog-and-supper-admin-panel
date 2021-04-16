import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Heder = () => {
    return (
        <header class="fixed-top container ">
            <div className="row">
                <div class="col-md-3" >

                    <h1 class="logo me-auto"><a href="index.html">Arsha</a></h1>

                </div>
                <div className="col-md-9 d-flex " >
                    <nav id="navbar" class="navbar">
                        <ul >
                            <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
                            <li><a class="nav-link scrollto" href="#about">About</a></li>
                            <li><a class="nav-link scrollto" href="#services">Services</a></li>

                            <li><a class="nav-link scrollto" href="#contact">Admin</a></li>
                            <li><a class="getstarted scrollto" href="#about">Login</a></li>
                        </ul>
                    </nav>

                </div>
            </div>

        </header>
    );
};

export default Heder;