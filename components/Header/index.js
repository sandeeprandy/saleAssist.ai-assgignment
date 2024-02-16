import React from 'react';
import './index.css'; 
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa"
import { FaTag } from "react-icons/fa6"
import { FaCartPlus } from "react-icons/fa6";

const Header = () => {
  return (
    <header> 
      <div className='compenyName'><p className='compeny'>TANN  TRIM</p>  <div className='icons'> <FaSearch /> <FaUser /> <FaTag/> <FaCartPlus/> </div>  </div>

      <div><p className='example-class' >   bags travel acceseries gifts jewlerys</p>    </div>
      <h1>select your items below</h1>
    </header>
  );
};

export default Header;
