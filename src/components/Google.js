import React from 'react';
import GoogleLogin from 'react-google-login';
import { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../store/appContext';
import { useEffect } from 'react';
function Google() {
    const { actions } = useContext(Context)
    const [isSignedIn] = useState(false)
    useEffect(() =>{
        actions.GetGoogleData()
    }, [actions])
    const responseGoogle = (response) =>{
       
        console.log(response)
        actions.SaveDataGoogle(response)
      }
    let gContent;
    if (isSignedIn) {
        gContent = null;
    }
    else {
        gContent = (
            <GoogleLogin
            clientId="624627734945-2drap48vts46jo3fi5smm73l2a1d0cuq.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            >
            </GoogleLogin>
        );
    }
    return <div>{gContent}</div>
}
export default Google