import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../images/moptrologo.png"
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import serviceLogo from "../images/Group 46.png"
const HomePage = () => {
    return (
        <div style={{overflow:'hidden'}}>
            <img src={serviceLogo} className='serviceLogo' alt="" />
            <div className='logo divCenter'>
                <img src={logo} alt="" />
            </div>
            <div className='box divCenter'>
                <div className='titleBox divCenter'>
                    Employee Productivity Dashboard
                </div>
                <div className='dashboardBox divCenter'>
                    <table>

                        <tr>
                            <td>Productivity on Monday
                                <div className="greenBar" style={{ width: '4%' }} ></div>
                            </td>

                            <td>4%</td>
                        </tr>
                        <tr>
                            <td>Productivity on Tuesday
                                <div className="greenBar" style={{ width: '92%' }} ></div>
                            </td>
                            <td>92%</td>
                        </tr>
                        <tr>
                            <td>Productivity on Wednesday
                                <div className="greenBar" style={{ width: '122%' }}></div></td>
                            <td>122%</td>
                        </tr>
                        <tr>
                            <td>Productivity on Thursday
                                <div className="greenBar" style={{ width: '93%' }} ></div></td>
                            <td>93%</td>
                        </tr>
                        <tr>
                            <td>Productivity on Friday
                                <div className="greenBar" style={{ width: '89%' }} ></div></td>
                            <td>89%</td>
                        </tr>
                        <tr>
                            <td>Productivity on Saturday
                                <div className="greenBar" style={{ width: '98%' }} ></div></td>
                            <td>98%</td>
                        </tr>
                    </table>
                </div>
                <div className='navBox divCenter'>
                <Link className='width-adjust' to="/home">
                        <FaHome className='icon'/>
                    </Link>
                    <Link to="/employees"> 
                        <FaUser className='icon'/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage
