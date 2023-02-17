import React from "react";

import logo from "../Images/logo.png";

import { Link, Outlet} from 'react-router-dom'
function Nav() {
    return (
        <div className="navsection  ">
            <div className="nav-wrraper max-width flex">
                <div className="logowrraper">
                    <a href="/"> <img src={logo} alt="" className="logo-header" /></a>
                   
                </div>

                <div className="menuwrraper">
                    <ul className="navul">
                        <li><a href="/#about">About</a></li>
                        <li><a href="/#skills">Skills</a></li>
                        <li><a href="/#mywork">Portfolio</a></li>
                        <li><a href="/#projects">Projects</a></li>
                        <li>
                        <a href="/#blog">Blog</a>
                        {/* <Link to="/blog">Blog</Link> */}
                        </li>
                        <li><a href="/#reviews">Reviews</a></li>
                      
                        <li><a href="/#contact">Contact</a></li>
                    </ul>
                </div>

                {/* <div className="buttonswrraper">
                    <div class="buttonsgroupe flex" bis_skin_checked="1">
                        <button class="button">Hire me </button></div>
                </div> */}

            </div>
        </div>
    )
}

export default Nav;