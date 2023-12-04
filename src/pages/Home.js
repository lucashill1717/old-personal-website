import '../App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NavButton({ value, link }) {
  const navigate = useNavigate();
  
  function route() {
    navigate(link);
  }

  return (
    <button className='nav' onClick={route}>{value}</button>
  );
}

function NavBar() {
  return (
    <div className='navbar'>
      <NavButton value='Home' link='/' />
      <NavButton value='About Me' link='/about' />
      <NavButton value='Projects' link='/projects' />
      <NavButton value='Socials' link='/socials' />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <NavBar />
    </>
  );
}
