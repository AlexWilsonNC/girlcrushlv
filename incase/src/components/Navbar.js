import React from 'react';
import '../css/nav.css';
import camper from '../assets/camper.png';

function Navbar({ currentPage, handlePageChange }) {
  return (
    <div id="nav" name="top">
        <div id="leftnav">
          <img id="camper" src={camper}/>
        </div>
        <div id="rightnav">
          <a href=''>home</a>
          <a href=''>destinations</a>
          <a href=''>journey</a>
          <a href=''>shop</a>
          <a href=''>login</a>
        </div>
    </div>
  );
};

export default Navbar;