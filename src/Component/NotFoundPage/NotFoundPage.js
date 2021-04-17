import React from 'react';
import Heder from '../HomeComponent/Header/Heder';

const NotFoundPage = () => {
    return (
        <div style={{ width: '100%',background: '#37517e'}}>
            <Heder></Heder>
            <div style={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color:'white' }}>
                <h1 >This page is not Available .. 404</h1>
            </div>
        </div>
    );
};

export default NotFoundPage;