import React,{Fragment} from 'react'
import './footer.css'
import {ImFacebook2} from 'react-icons/im'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import {HiLocationMarker} from 'react-icons/hi'
import {FaPhoneSquare} from 'react-icons/fa'
import {MdMarkEmailUnread} from 'react-icons/md'

const Footer = () => {
  return (
    <Fragment>
        <section className="footer">
            <div className="footer-container">
                <div className="footer-row">
                    {/* {first col} */}
                    <div className="footer-col">
                        <div className="col-content">
                            <h2>Doentown</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, a?</p>
                            <ul className="footer-link_1">
                                <li><a href="#"><ImFacebook2 style={{width:'21px'}} className='icon1'/></a></li>
                                <li><a href="#"><FaTwitterSquare style={{width:'30px'}}  className='icon1'/></a></li>
                                <li><a href="#"><FaInstagramSquare style={{width:'30px'}} className='icon1'/></a></li>
                            </ul>
                        </div>
                    </div>
                     {/* {second col} */}
                    <div className="footer-col">
                        <div className="col-content">
                            <h2>Community</h2>
                            <ul className="footer-link">
                                <li><a href="#"><span><BsFillArrowRightSquareFill className='icon'/></span>Search Properties</a></li>
                                <li><a href="#"><span><BsFillArrowRightSquareFill className='icon'/></span>For Agents</a></li>
                                <li><a href="#"><span><BsFillArrowRightSquareFill className='icon'/></span>Reviews</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* third col */}
                    <div className="footer-col">
                        <div className="col-content">
                            <h2>About Us</h2>
                            <ul className="footer-link">
                                <li><a href="#"><span><BsFillArrowRightSquareFill className='icon'/></span>Our Story</a></li>
                                <li><a href="#"><span><BsFillArrowRightSquareFill className='icon'/></span>Meet the Team</a></li>
                                <li><a href="#"><span><BsFillArrowRightSquareFill className='icon'/></span>Reviews</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* fourth col */}
                    <div className="footer-col">
                        <div className="col-content">
                            <h2>Company</h2>
                            <ul className="footer-link">
                                <li><a href="#"><span><BsFillArrowRightSquareFill className='icon'/></span>About Us</a></li>
                                <li><a href="#"><span><BsFillArrowRightSquareFill className='icon'/></span>Press</a></li>
                                <li><a href="#"><span><BsFillArrowRightSquareFill className='icon'/></span>Contact</a></li>
                                <li><a href="#"><span><BsFillArrowRightSquareFill className='icon'/></span>Careers</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* {fifth col} */}
                    <div className="footer-col">
                        <div className="col-content">
                            <h2>Have a question?</h2>
                            <ul>
                                <li>
                                    <span className="footer-icon"><HiLocationMarker className='icon'/></span>
                                    <span className='text'>Uellendahler Strasse,42107 Wuppertal</span>
                                </li>
                                <li>
                                    <span className="footer-icon"><FaPhoneSquare className='icon'/></span>
                                    <span className='text'>+49 - 1631859993</span>
                                </li>
                                <li>
                                    <span className="footer-icon"><MdMarkEmailUnread className='icon'/></span>
                                    <span className='text email'>profi.hadiszare@gmail.com</span>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copy">
                    <div className="foot-container">
                        <p>Copyright ©2022 All rights reserved ...</p>

                    </div>

                </div>
            </div>
        </section>
    </Fragment>
    
  )
}

export default Footer