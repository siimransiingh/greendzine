import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../images/moptrologo.png"
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import serviceLogo from "../images/Group 46.png"
import SearchBar from './../component/Searchbar';
import EmployeeList from '../component/EmployeeList';

const InfoPage = () => {
  
  return (
    <>
    <img src={serviceLogo} className='serviceLogo' alt="" />
            <div className='logo divCenter'>
                <img src={logo} alt="" />
            </div>
            <SearchBar 
            />
       <div className='navBox divCenter'>
                <Link to="/home">
                        <FaHome className='icon'/>
                    </Link>
                    <Link to="/employees"> 
                        <FaUser className='icon'/>
                    </Link>
                </div>
    </>
  )
}

export default InfoPage