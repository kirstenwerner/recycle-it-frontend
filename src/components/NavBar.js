import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

const NavBar = () => {
  return (

    <div>
        <br/>
        <div className='navbar' className='center'>
          <NavLink to='/' exact><Button size='medium' color='olive'>Home</Button></NavLink>
          <NavLink to='/recycle-center-finder' exact><Button size='big' color='green'>Recycle It!</Button></NavLink>
          <NavLink to='/materials' exact><Button size='medium' color='teal'>Materials</Button></NavLink>
          <br/>
          <br/>
        </div>
    </div>
  );
};

export default NavBar;
