import React from "react";
import avatar from "../Images/Mo-oumha-web-developer.png";
import { FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";

function Herobanner() {
	return (
		<div className="herBanner-section section " >
			<div className="herobanner-wrraper max-width  flex">
				<div className=" flex-50">
					<p> Hi <span>👋</span> I am Mo Oumha</p>

					<h2>Building eCommerce Dreams - Shopify Expert & Full-Stack Developer</h2>
					<p>I'm an experienced and self-taught software engineer with more than 3 years of experience in front-end dev. I've been working with the most popular front-end frameworks React, and NodeJs on the backend.


					</p>
					<div className="buttonsgroupe flex">
						<a className="button" href="#mywork">Mywork </a>
						
							<a className="button" href="https://docs.google.com/document/d/1vjDQ0fVUXm3MQYbS62zOqsNZFcONe5pKjDwll0cyrIg/edit?usp=sharing">Resum </a>
							
					</div>
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
								<a class="icon social-icon  animation-shrink repeater-item-599b985" href="https://www.youtube.com/@moremotedeveloper	" target="_blank" bis_skin_checked="1">

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
				<div className=" flex-50">

					<div className="imagegrupehero center">
						<img src={avatar} alt="Mo Oumha shopify" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Herobanner;
