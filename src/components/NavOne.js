import React, { useState } from "react";
import logo from "../assets/images/logo-dark.png";
import {Link} from 'react-router-dom';
import {AiOutlineTwitter, AiFillFacebook, AiOutlineInstagram, AiOutlineSearch} from 'react-icons/ai';
import {FaBars, FaPinterestP, FaTimes, FaPlus} from 'react-icons/fa';

const NavOne = () => {
  const  [click, setClick] = useState(false);
  const handleClick = () =>{
    setClick(!click);
  }
  const [subMenu, setSubMenu] = useState(false);
  const addSubMenu = () =>{
    setSubMenu(!subMenu);
  }

  const [subMenu2, setSubMenu2] = useState(false);
  const addSubMenu2 = () =>{
    setSubMenu2(!subMenu2);
  }
  const [subMenu3, setSubMenu3] = useState(false);
  const addSubMenu3 = () =>{
    setSubMenu3(!subMenu2);
  }
  const [subMenu4, setSubMenu4] = useState(false);
  const addSubMenu4 = () =>{
    setSubMenu4(!subMenu4);
  }
  const [subMenu5, setSubMenu5] = useState(false);
  const addSubMenu5 = () =>{
    setSubMenu5(!subMenu5);
  }
  const [subMenu6, setSubMenu6] = useState(false);
  const addSubMenu6 = () =>{
    setSubMenu6(!subMenu6);
  }

  return (
    <header className="site-header site-header__header-one ">
        <nav
          className={`navbar navbar-expand-md navbar-light header-navigation stricky}`}
        >
          <div className="container clearfixContent">
            <div className="logo-box clearfix">
              <Link to="/" className="navbar-brand">
                <img
                  src={logo}
                  className="main-logo"
                  width="128"
                  alt="Awesome alter text"
                />
              </Link>
              <div className="header__social">
                <a href="#none">
                  <AiOutlineTwitter />
                </a>
                <a href="#none">
                  <AiFillFacebook />
                </a>
                <a href="#none">
                  <FaPinterestP />
                </a>
                <a href="#none">
                  <AiOutlineInstagram />
                </a>
              </div>
            </div>
            <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
            </div>
            <div className={click ? 'd-none' : 'main-navigation'}>
              <ul className=" navigation-box ">
                <li className="current">
                  <Link to="/">Home</Link>
                  
                  <ul className="sub-menu">
                    <li>
                      <Link to="/">Home 01</Link>
                    </li>
                    <li>
                      <Link to="/index-2">Home 02</Link>
                    </li>
                    <li>
                      <Link to="/index-3">Home 03</Link>
                    </li>
                    <li>
                      <a href="#none">Header Versions</a>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/">Header 01</Link>
                        </li>
                        <li>
                          <Link to="/index-2">Header 02</Link>
                        </li>
                        <li>
                          <Link to="/index-3">Header 03</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#none">Pages</a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/about">About Page</Link>
                    </li>
                    <li>
                      <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                      <Link to="/pricing">Pricing Plans</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ'S</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/courses">Courses</a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/courses">Courses</Link>
                    </li>
                    <li>
                      <Link to="/coursedetalis">Courses Details</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/teachers">Teachers</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/teachers">Teachers</Link>
                    </li>
                    <li>
                      <Link to="/teachersdetalis">Teachers Details</Link>
                    </li>
                    <li>
                      <Link to="/becometeacher">Become Teacher</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/news">News</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/news">News Page</Link>
                    </li>
                    <li>
                      <Link to="/news-details">News Details</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
              <div className="right-side-box">
              <a
                className="header__search-btn search-popup__toggler search-toggle"
                href="#none"
              >
                <AiOutlineSearch/>
              </a>
            </div>
            <div className="site-header__decor">
          <div className="site-header__decor-row">
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-1"></div>
            </div>
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-2"></div>
            </div>
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-3"></div>
            </div>
          </div>
        </div>
            </div>
            
            <div className={click ? 'stricked-menu' : 'd-none'}>
              <ul className=" navigation-box">
                <li className="current" onClick={addSubMenu}>
                    <h6>Home</h6>
                  <span> <FaPlus /></span>
                  <ul className={subMenu ? 'd-none' : 'sub-menu'}>
                  <li>
                  <Link to="/">Home</Link>
                  </li>
                    <li>
                      <Link to="/">Home 01</Link>
                    </li>
                    <li>
                      <Link to="/index-2">Home 02</Link>
                    </li>
                    <li>
                      <Link to="/index-3">Home 03</Link>
                    </li>
                  </ul>
                </li>
                <li onClick={addSubMenu2}>
                  <h6>Pages</h6>
                  <span> <FaPlus /></span>
                  <ul className={subMenu2 ? 'd-none' : 'sub-menu'}>
                  
                    <li>
                      <Link to="/about">About Page</Link>
                    </li>
                    <li>
                      <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                      <Link to="/pricing">Pricing Plans</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ'S</Link>
                    </li>
                  </ul>
                </li>
                <li onClick={addSubMenu3}>
                  <h6>Courses</h6>
                  <span> <FaPlus /></span>
                  <ul className={subMenu3 ? 'd-none' : 'sub-menu'}>
                  <li>
                    <Link to="courses">Courses</Link>
                  </li>
                    <li>
                      <Link to="/course-details">Courses Details</Link>
                    </li>
                  </ul>
                </li>
                <li onClick={addSubMenu5}>
                  <h6>Teachers</h6>
                  <span> <FaPlus /></span>
                  <ul className={subMenu5 ? 'd-none' : 'sub-menu'}>
                    <li>
                    <Link to="/teachers">Teachers</Link>
                    </li>
                    <li>
                      <Link to="/teacher-details">Teachers Details</Link>
                    </li>
                    <li>
                      <Link to="/become-teacher">Become Teacher</Link>
                    </li>
                  </ul>
                </li>
                <li onClick={addSubMenu6}>
                  <h6>News</h6>
                  <span> <FaPlus /></span>
                  
                  <ul className={subMenu ? 'd-none' : 'sub-menu'}>
                  <li>
                  <Link to="/news">News</Link>
                  </li>
                    <li>
                      <Link to="/news">News Page</Link>
                    </li>
                    <li>
                      <Link to="/news-details">News Details</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
              <div className="right-side-box">
              <a
                className="header__search-btn search-popup__toggler search-toggle"
                href="#none"
              >
                <AiOutlineSearch/>
              </a>
            </div>
            <div className="site-header__decor">
          <div className="site-header__decor-row">
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-1"></div>
            </div>
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-2"></div>
            </div>
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-3"></div>
            </div>
          </div>
        </div>
            </div>
          
          </div>
        </nav>
      
      </header>
  );
};

export default NavOne;
