import React from "react";

import logo from "../Images/logo.png";


function Nav() {
    return (
        <div className="navsection  ">
            <div className="nav-wrraper max-width flex">
                <div className="logowrraper">
                    <img src={logo} alt="" className="logo-header" />
                </div>

                <div className="menuwrraper">
                    <ul className="navul">
                        <li><a href="#about">About</a></li>
                        <li><a href="#about">Skills</a></li>
                        <li><a href="#about">Portfolio</a></li>
                        <li><a href="#about">Reviews</a></li>
                        <li><a href="#about">Contact</a></li>
                    </ul>
                </div>

                <div className="buttonswrraper">
                    <div class="buttonsgroupe flex" bis_skin_checked="1">
                        <button class="button">Hire me </button></div>
                </div>

            </div>
        </div>
    )
}

export default Nav;