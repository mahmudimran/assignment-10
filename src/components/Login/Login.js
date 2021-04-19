import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./fireBase.config"
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);   
  }


const Login = () => {

    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, email } = res.user;
                const signedInUser = { displayName, email }
                setLoggedInUser(signedInUser)
                history.replace(from);
            })
    }
    return (
        <div>
            <h2 className="text-center">Let's Have a Discussion </h2>
            <h3 className="text-center"> About Your Identification </h3>
            <br/>
            <div className="d-flex justify-content-center"><button className="btn-success p-2" onClick={handleGoogleSignIn}> Sign in with Google </button></div>
        </div>
    );
};

export default Login;