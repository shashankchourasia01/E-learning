import React, { useState } from 'react';
import styled from "styled-components";
import {MdMenu, MdShoppingCart} from "react-icons/md";
import {Link, useNavigate} from 'react-router-dom';
import { useSidebarContext } from '../context/sidebar_context';
import { useCartContext } from '../context/cart_context';
import { useAuth0 } from '@auth0/auth0-react';
import { AWS, DATA_SCIENCE, DESIGN, MARKETING, PYTHON, WEB_DEVELOPMENT } from '../utils/constants';

const Navbar = () => {


  const { loginWithRedirect } = useAuth0();

  const { logout } = useAuth0();

  const { user,  isAuthenticated } = useAuth0();
  const {total_items} = useCartContext();
  const {openSidebar} = useSidebarContext();

let navigate=useNavigate();

  const[value,setValue]=useState({
    data:" "
  });

//   if(value.data=="python"){
// navigate()
//   }
function containsPython(inputString) {
  
  const regex = /\bpython\b/i;
  return regex.test(inputString);
}
function containsWeb(inputString) {
  
  const regex = /\bweb\b/i; 
  return regex.test(inputString);
}
function containsData(inputString) {
  
  const regex = /\bdata\b/i; 
  return regex.test(inputString);
}
function containsAws(inputString) {
  
  const regex = /\baws\b/i; 
  return regex.test(inputString);
}
function containsDesign(inputString) {
  
  const regex = /\bdesign\b/i; 
  return regex.test(inputString);
}
function containsMaketing(inputString) {
  
  const regex = /\bmarketing\b/i; 
  return regex.test(inputString);
}


  const handle=()=>{
    if(containsPython(value.data)){
      let t=PYTHON
      navigate(`/category/${t}`)
    }
    else if(containsWeb(value.data)){
      let t=WEB_DEVELOPMENT
      navigate(`/category/${t}`)
    }
    else if(containsData(value.data)){
      let t=DATA_SCIENCE
      navigate(`/category/${t}`)
    }
    else if(containsAws(value.data)){
      let t=AWS
      navigate(`/category/${t}`)
    }
    else if(containsDesign(value.data)){
      let t=DESIGN
      navigate(`/category/${t}`)
    }
    else if(containsMaketing(value.data)){
      let t=MARKETING
      navigate(`/category/${t}`)
    }
    else {
      
      navigate(`/category/`)
    }
 

  }

  return (
    <NavbarWrapper className = "bg-white flex">
      <div className='container w-100'>
        <div className='brand-and-toggler flex flex-between w-100'>
          <Link to = "/" className='navbar-brand text-uppercase ls-1 fw-8'>
            <span>Edu</span>Nexa
          </Link>
         <Form>
         <SearchBar  onChange={(e)=>{
 setValue({...value,data:e.target.value})
         }}></SearchBar>
         <Button style={{color:"black"}} onClick={handle}>search</Button>
         </Form>
        

          <Login>
  
   
  {
    isAuthenticated?(
      <a className='btn' onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </a>

    ):(    <a className='btn' onClick={() => loginWithRedirect()}>Log In</a>)
  }


  
  </Login>

          <div className='navbar-btns flex'>
            <Link to = "/cart" className='cart-btn'>

              <MdShoppingCart />
              <span className='item-count-badge'>{total_items}</span>
            </Link>
            <button type = "button" className='sidebar-open-btn' onClick={() => openSidebar()}>
              <MdMenu />
            </button>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.nav`
 background-image: linear-gradient(90deg, #0AE0FF, #9900FB);
  height: 80px;
  box-shadow: rgba(50, 50, 93, 0.15) 0px 16px 12px -2px, rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;

  .navbar-brand{
    font-size: 23px;
    span{
      color: var(--clr-orange);
    }
  }
  .cart-btn{
    margin-right: 18px;
    font-size: 23px;
    position: relative;
    .item-count-badge{
      background-color: var(--clr-orange);
      position: absolute;
      right: -10px;
      top: -10px;
      font-size: 12px;
      font-weight: 700;
      display: block;
      width: 23px;
      height: 23px;
      color: var(--clr-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .sidebar-open-btn{
    transition: all 300ms ease-in-out;
    &:hover{
      opacity: 0.7;
    }
  }
`;

export default Navbar;

const Login=styled.div`
position:relative;
left:130px;
bottom:4px;
color:black;
font-size:18px;
letter-spacing:1.42px;

`

const SearchBar=styled.input`
color:black;
width:400px;
height:20px;
background:whitesmoke;
border:2px grey solid;
position:relative;
left:90px;
border-radius:5px;
`

const Form=styled.form`

`

const Button=styled.button`

color:black;
top:2px;
position:relative;
left:103px;
color:grey;
`