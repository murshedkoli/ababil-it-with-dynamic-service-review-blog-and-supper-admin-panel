import React, { } from 'react';
import { useHistory, useLocation } from 'react-router';
import './LoginPart.css'
import "firebase/auth";
import firebase from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyDTx0cfKWDdFSGzfBdHqMCzyaBl-mwGU1M",
    authDomain: "ababil-it-assignment-11.firebaseapp.com",
    projectId: "ababil-it-assignment-11",
    storageBucket: "ababil-it-assignment-11.appspot.com",
    messagingSenderId: "71790704391",
    appId: "1:71790704391:web:307047e1d8e82008a7b7a2"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}



const LoginPart = () => {

    document.title = "Login Page - Ababil Information Technology"

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };



    const handleSubmitForm = (user) => {
        const userData = {
           
            imgUrl: user.photoURL,
            name: user.displayName,
            email: user.email,
            isAdmin:false
        }

       
        fetch('http://localhost:5000/adduser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
            sessionStorage.setItem('user', JSON.stringify(data));
            history.replace(from);
            
            })

    }

    const googleLogin = () => {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                // var credential = result.credential;

                // var token = credential.accessToken;
                var user = result.user;
                handleSubmitForm(user)
               
            


            }).catch((error) => {

                var errorMessage = error.message;
                var email = error.email;
                console.log(errorMessage, email)
            });
    }





    return (
        <div className="container" style={{ height: '200px', display: 'flex', alignItems: 'center' }} >
 
            <div class="col-md-12"> <button onClick={googleLogin} class="btn  btn-google btn-block text-uppercase btn-outline" ><img src="https://img.icons8.com/color/16/000000/google-logo.png"/> Sign In Using Google</button> </div>

        </div>
    );
};

export default LoginPart;