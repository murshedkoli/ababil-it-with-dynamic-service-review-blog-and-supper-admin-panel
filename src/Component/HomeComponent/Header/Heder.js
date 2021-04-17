import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Heder = () => {
    return (
        <header id="header" class=" container ">
            <div className="row">
                <div class="col-md-3" >

                    <Link to="/">
                    <h1 class="logo me-auto"><a>Ababil It</a></h1>
                    </Link>

                </div>
                <div className="col-md-9 "  >
                    <nav id="navbar" class="navbar">
                        <ul >
                            <Link to="/">
                            <li><a class="nav-link  " >Home</a></li>
                            </Link>
                            <li><a class="nav-link " href="#about">About</a></li>
                            <li><a class="nav-link " href="#services">Services</a></li>

                            <Link to="/dashboard">
                            <li><a class="nav-link " >Admin</a></li>
                            </Link>
                            <Link to="/login">
                            <li><a class="getstarted " >Login</a></li>
                            </Link>
                        </ul>
                    </nav>

                </div>
            </div>

        </header>
    );
};

export default Heder;