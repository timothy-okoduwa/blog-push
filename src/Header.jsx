import React from "react";
import styled from "styled-components";
// import {AiOutlineMenuFold} from 'react-icons/ai'
import {RiMenu3Fill} from 'react-icons/ri'
import { useNavigate } from "react-router-dom";
import {NavLink} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import {signOut} from 'firebase/auth'
import { auth } from "./FirebaseConfig";
const Header =({isAuth,setIsAuth})=>{
 const navigate = useNavigate()
  const signUsersOut =()=>{
   signOut(auth).then(()=>{
    localStorage.clear()
    setIsAuth(false)
    navigate('./Login')
   })
  }
    return(


        <Container>
        <Wrapper>
          <Sigh>T8m0thy.</Sigh>
          <Nav>
       
           
              <NavLinks to="/">Home</NavLinks>
          
           
          
           {
            !isAuth ?  <NavLinks to="/Login">Login</NavLinks>
            :
            <>
            <NavLinks to="/About">Create Post</NavLinks>
            <Button onClick={signUsersOut} >LogOut</Button>
            </>

           }
            <NavLinks to="/d">Contact</NavLinks>
        
          </Nav>
          <Icon>
          <RiMenu3Fill/>
          
          </Icon>
        </Wrapper>
      </Container>

    )
       
    
}
export default Header;


const Container = styled.div`
  width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background: white;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  top: 0;

`;

const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const Nav = styled.div`
  display: flex;
  @media screen and (max-width:767px){
  display: none;
  }
`;

const NavLinks = styled(NavLink)`
  font-weight: bold;
  font-size: 16px;
  font-family: inter, sans-serif;
  margin-left: 50px;
  text-decoration: none;
  color: black;
  cursor: pointer;
  &.active{
  color: blue;
  }
`;

const Sigh = styled.div`
  font-family: "Comforter", cursive;
  font-size: 25px;
`;
const Icon = styled.div`
cursor: pointer;
font-size: 29px;
font-weight: 100;
  @media screen and (min-width:768px){
  display: none;
  }
`