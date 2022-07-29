import React from "react";
import styled from "styled-components";
import {auth,provider} from './FirebaseConfig'
import{signInWithPopup} from 'firebase/auth'
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const Login=({isAuth,setIsAuth})=>{

const navigate =useNavigate()


const signInWithGoogle=()=>{
signInWithPopup(auth,provider).then((result)=>{
    localStorage.setItem('isAuth',true)
setIsAuth(true)
navigate('/')
})
}



    return(
        <Div>
  <Align>
  
  <p>Sign In With Google to Continue </p>
  <Button onClick={signInWithGoogle} > Sign In With Google</Button>
  </Align>
       
        </Div>
    )
}

export default Login

const Div = styled.div`
margin-top: 120px;
display: flex;
justify-content: center;
`

const Align = styled.div`

margin-top: 70px;

`