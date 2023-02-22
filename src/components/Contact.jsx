import React from "react";
import { useState} from 'react';
import { FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";


function Contact() {
    return (
        <div className="contact-section section" id="contact">
            <div className="contact-wrraper max-width">

                <div className="center">
                    <div>
                        <h2>Let's Build Something Together</h2>
                        <h4>I’ll make it easy for you… I am available on your favorite channel – I hope to hear from you!
                        </h4>
                        <p> +212608-166845 | Medoumha [at] gmail.com | Or google Mo Oumha

                        </p>
                        <div className="socielmediagroup">


<div class="social-icons-wrapper grid" bis_skin_checked="1">
    <span class="grid-item">
        <a class="icon social-icon  animation-shrink repeater-item-599b985" href="https://www.linkedin.com/in/mooumha/" target="_blank" bis_skin_checked="1">

            <FaLinkedinIn />
        </a>
    </span>

    <span class="grid-item">
        <a class="icon social-icon  animation-shrink repeater-item-599b985" href="https://twitter.com/medoumha" target="_blank" bis_skin_checked="1">

        <FaTwitter />		
        </a>
    </span>

    <span class="grid-item">
        <a class="icon social-icon  animation-shrink repeater-item-599b985" href="https://www.youtube.com/@moremotedeveloper" target="_blank" bis_skin_checked="1">

        <FaYoutube />
        </a>
    </span>

    <span class="grid-item">
        <a class="icon social-icon  animation-shrink repeater-item-599b985" href="https://www.instagram.com/mo__oumha/" target="_blank" bis_skin_checked="1">

        <FaInstagram />	
        </a>
    </span>
    <span class="grid-item">
        <a class="icon social-icon  animation-shrink repeater-item-599b985" href="https://github.com/MOuhax" target="_blank" bis_skin_checked="1">

        <FaGithub />	
        </a>
    </span>






</div>
</div>
                    </div>
                    <div className="contactform" >
                    </div>

                </div>
            </div>
        </div>
       
    )
}

export default Contact;