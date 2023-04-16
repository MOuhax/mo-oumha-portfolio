import React from "react";

import mypc from "../Images/mypc.jpg";
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
                                <img src={mypc} alt="" />
                                <p className="p-title">➜ Mo - Dev++ (Development youtube channel)
                                </p>
                                <p>I do share dev content including Shopify developemnt, react, Js , features, performance, and more...</p>
                                <a href="https://www.youtube.com/@moremotedeveloper">Visite my channel</a>
                            </div>
                        </div>

                        <div className="portfolio-33  flex-30">
                            <div className="sideprojects-list">
                                <img src={youtube} alt="" />
                                <p className="p-title">➜ Shopify app for onlines stores 
                                </p>
                                <p>Community forms solution for shopify stores and communities</p>
                                <a href="#">Visite the project</a>
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