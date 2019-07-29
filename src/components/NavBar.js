import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

const NavBar = () => {
  return (

    <div>
        <br/>
        <div className='navbar' className='center'>
          <NavLink to='/' exact><Button size='large' color='purple'>Home</Button></NavLink>
          <NavLink to='/recycle-center-finder' exact><Button size='massive' color='green'>Recycle It!</Button></NavLink>
          <NavLink to='/materials' exact><Button size='large' color='red'>Materials</Button></NavLink>
          <br/>
          <br/>
        </div>
    </div>
  );
};

export default NavBar;
