import React, { useState } from 'react';
import styles from '../stylesheets/NavBar.css';
import { Link, Navigate } from 'react-router-dom';
import thundergoose from '../assets/thundergoose.png';

const Navbar = (props) => {
  //the way each user profile will look in the feed
  return (
    <header>
      <nav className='navBar'>
        <div>
          <Link to='/Profile'>
            <button className='navBtn'>console.log(myProfile)</button>
          </Link>
          <Link to='/Daily'>
            <button className='navBtn'>function dailyProblem()</button>
          </Link>
        </div>
        <div className='mascot'>
          <img className='navBarImage' src={thundergoose} alt='starmole' />
          <h1>CodersOnly</h1>
        </div>
        <div className='navBtnDiv'>
          <Link to='/Feed'>
            <button className='navBtn'>console.log(coders)</button>
          </Link>
          <Link to='/Matches'>
            <button className='navBtn'>if(match === true)</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
