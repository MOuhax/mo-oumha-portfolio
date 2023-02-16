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
                    <p>A small gallery of recent projects chosen by me. I’ve done them all together with amazing people from companies around the globe. It’s only a drop in the ocean compared to the entire list. Take a look at some of the my work</p>

                </div>

                <div className="sideprojects-wrraper flex">
                    <div className="portfolio-33 flex-30">
                        <div className="sideprojects-list">
                            <img src={remotef} alt="" />
                            <p className="p-title">➜ Remote Folks, a community of Digital nomads
</p> <p>Co-live, Co-work, and Co-travel the world with a group of like minded remoters </p>
                        </div>
                    </div>

                   

                    <div className="portfolio-33  flex-30">
                        <div className="sideprojects-list">
                            <img src={youtube} alt="" />
                            <p className="p-title">➜ Mo - The shopify developer youtube channel
</p>
<p>Build your brand and increase sales with a premium ecommerce experience.</p>
                        </div>
                    </div>

                    <div className="portfolio-33  flex-30">
                        <div className="sideprojects-list">
                            <img src={js30} alt="" />
                            <p className="p-title">➜ 30 days JavaScript challenge
</p> <p>30 Day Vanilla JS Coding Challenge, Build 30 things in 30 days with 30 tutorials.</p>
                        </div>
                    </div>

                </div>  

                
            </div> 

            
            </div>
        </div>
    )
}

export default Sideprojects;