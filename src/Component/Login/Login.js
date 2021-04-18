import React from 'react';
import Footer from '../HomeComponent/Footer/Footer';
import Heder from '../HomeComponent/Header/Heder';
import LoginPart from './LoginPart';

const Login = () => {
    document.title = "Log In Page - Ababil Information Technology"

    return (
        <div style={{
            width: '100%',
            background: '#37517e'
          }}>
               <Heder/>
               <LoginPart/>
               <Footer/>
        </div>
    );
};

export default Login;