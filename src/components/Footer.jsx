import React from "react";
import logo from "../Images/logo.png"

function Footer() {
    return (
        <div className="footer-section section">
            <div className="footer-wrraper max-width">
                <div className="title-wrraper center">
                    <img src={logo} alt="mo oumha logo" />
                    <p> Copyright © 2023 Mo Oumha | Made with ❤️ in Morocco 🇲🇦</p>
                   
                   </div>
               

            </div>
        </div>
    )
}

export default Footer;