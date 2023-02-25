import React from "react";

import theme from "../Images/theme.jpg";
import customTheme from "../Images/shopify-theme.jpg";
import inventory from "../Images/inventory.jpg";

import forum from "../Images/forum.jpg";
import landingPages from "../Images/landingpages.jpg";
import ecommerceApp from "../Images/ecommerceApp.jpg";

import tiktok from "../Images/tiktok.jpg";

import instagram from "../Images/instagram.jpg";
import reddit from "../Images/reddit.jpg";
import monday from "../Images/monday.jpg";

import productivity from "../Images/productivity.jpg";
import airbnb from "../Images/airbnb.jpg";

import crm from "../Images/crm.jpg";
import dashboard from "../Images/dashboard.jpg";

import storybook from "../Images/storybook.jpg";
import gatsby from "../Images/gatsby2.jpg";
import gatsby1 from "../Images/gatsby1.jpg";
import starbucks from "../Images/starbucks.jpg";

import netflix from "../Images/netflix.jpg";
import coworkcafe from "../Images/coworkcafe.jpg";
import facebook from "../Images/facebook.jpg";
import travelAgency from "../Images/project1.jpg";



import project2 from "../Images/project2.jpg";



import project1 from "../Images/remotef.jpg";

import tifinagh from "../Images/tifinagh1.jpg";
import remotem from "../Images/remotem.jpg";
import js30 from "../Images/js30.jpg";

function Portfolio() {
    return (
        <div className="portfolio-section section " id="mywork">
            <div className="portfolio-wrraper max-width">
                <div>
                    <div className="title-wrraper">
                        <h2>My work</h2>
                        <p>A small gallery of recent projects chosen by me. I’ve done them all together with amazing people from companies around the globe. It’s only a drop in the ocean compared to the entire list. Take a look at some of the my work</p>

                    </div>
                    <div className="portfolio-wrraper flex">
                        <div className="portfolio-33 flex-30">
                            <div className="portfolio-list">
                                <img src={gatsby1} alt="" />
                                <p className="p-title">➜ Shopify headless e-commerce with Next.js
                                </p>
                                <div className="used-skill">
                                    <span>Shopify</span>
                                    <span>React</span>
                                    <span>Next.js</span>
                                    <span>Tailwind CSS</span>

                                </div>
                                
                                
                            </div>
                        </div>

                        <div className="portfolio-33 flex-30">
                            <div className="portfolio-list">
                                <img src={customTheme} alt="" />
                                <p className="p-title">➜ Custom Shopify theme
                                </p>
                                <div className="used-skill">
                                    <span>Shopify</span>
                                    <span>Liquid</span>
                                    <span>Javascript</span>
                                    <span>Tailwind</span>


                                </div>
                             
                            </div>
                        </div>

                        <div className="portfolio-33  flex-30">
                            <div className="portfolio-list">
                                <img src={ecommerceApp} alt="" />
                                <p className="p-title">➜ Custom product search function</p>
                                <div className="used-skill">
                                    <span>Vanilla Js</span>
                                    <span>HTML & CSS</span>
                                    <span>Shopify APIs</span>
                                    <span>Liquid</span>
                                    

                                </div>
                                
                               
                            </div>
                        </div>

                        <div className="portfolio-33 flex-30">
                            <div className="portfolio-list">
                                <img src={gatsby} alt="" />
                                <p className="p-title">➜ Headless ecommerce with Gatsby
                                </p>
                                <div className="used-skill">
                                    <span>Gatsby</span>
                                    <span>React</span>
                                    <span>Shopify</span>
                                    <span>CSS</span>
                                   

                                </div>
                               
                            </div>
                        </div>

                        <div className="portfolio-33 flex-30">
                            <div className="portfolio-list">
                                <img src={landingPages} alt="" />
                                <p className="p-title">➜ Ecommerce heigh converting sales pages
                                </p>
                                <div className="used-skill">
                                    <span>HTML & SCSS</span>
                                    <span>WP</span>
                                    <span>Javascript</span>
                                    <span>Shopify</span>

                                 </div>
                                
                                
                            </div>
                        </div>

                        <div className="portfolio-33  flex-30">
                            <div className="portfolio-list">
                                <img src={theme} alt="" />
                                <p className="p-title">➜ Shopify storefront with Hydrogen</p>
                                <div className="used-skill">
                                    <span>React</span>
                                    <span>Node.js</span>
                                    <span>Shopify APIs</span>
                                    <span>Hydrogen</span>

                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                    <div className="center btn-container">
                    <a href="/portfolio" className=" center secondary-button">More work</a>
                </div>




                </div>



            </div>
        </div>
    )
}

export default Portfolio;



