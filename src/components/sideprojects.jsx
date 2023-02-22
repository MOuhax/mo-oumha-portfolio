import React from "react";
import work1 from "../Images/Mo-oumha-work1.jpg";
import work2 from "../Images/Mo-oumha-work2.jpg";
import theme from "../Images/shopify-theme.jpg";
import project1 from "../Images/project1.jpg";
import project2 from "../Images/project2.jpg";
import project3 from "../Images/project3.jpg";

import project4 from "../Images/project4.jpg";
import project6 from "../Images/project6.jpg";
import remotef from "../Images/remotef.jpg";

import youtube from "../Images/project5.jpg";
import remotem from "../Images/remotem.jpg";
import js30 from "../Images/js30.jpg";

function Sideprojects() {
    return (
        <div className="sideprojects-section section " id="projects">
            <div className="sideprojects-wrraper max-width">

                <div >
                    <div className="title-wrraper">
                        <h2>Side projects</h2>
                        <p>I like to build my own ideas and contribute to the world wide web with. Take a look at some of the my side projects.</p>

                    </div>

                    <div className="sideprojects-wrraper flex">
                        <div className="portfolio-33 flex-30">
                            <div className="sideprojects-list">
                                <img src={remotef} alt="" />
                                <p className="p-title">➜ Remote Folks, a community of Digital nomads
                                </p> <p>Co-live, Co-work, and Co-travel the world with a group of like minded remoters </p>
                                <a href="https://remotefolks.co/">Visite the project</a>
                            </div>
                        </div>



                        <div className="portfolio-33  flex-30">
                            <div className="sideprojects-list">
                                <img src={youtube} alt="" />
                                <p className="p-title">➜ Mo - Shopify expert youtube channel
                                </p>
                                <p>I do share Shopify content including custom Shopify and app developemnt , features, performance, and more...</p>
                                <a href="https://www.youtube.com/@moshopifyexpert">Visite my channel</a>
                            </div>
                        </div>

                        {/* <div className="portfolio-33  flex-30">
                            <div className="sideprojects-list">
                                <img src={remotem} alt="" />
                                <p className="p-title">➜ Code camp b'Darija
                                </p> 
                                <p>Learning web platform, an online community forum, chat rooms, online publications and content that intend to make learning web development accessible to anyone in Morocco. </p>
                                <a href="#">Visite the project</a>
                            </div>
                        </div> */}

                    </div>


                </div>


            </div>
        </div>
    )
}

export default Sideprojects;