import React from 'react'


import theme from "../Images/theme.jpg";
import customTheme from "../Images/shopify-theme.jpg";
import landingPages from "../Images/landingpages.jpg";
import ecommerceApp from "../Images/ecommerceApp.jpg";
import gatsby from "../Images/gatsby2.jpg";
import gatsby1 from "../Images/gatsby1.jpg";

function Portfoliopage() {
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
                        <p className="p-title">➜ Modern 3D product page
                        </p>
                        <div className="used-skill">
                            <span>HTML & SCSS</span>
                            <span>GSAP</span>
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
                            <span>Firebase</span>
                            <span>Shopify APIs</span>
                            <span>Hydrogen</span>

                        </div>
                        
                        
                    </div>
                </div>
            </div>
            {/* <div className="center btn-container">
            <a href="/portfolio" className=" center secondary-button">More work</a>
        </div> */}




        </div>



    </div>
</div>
  )
}

export default Portfoliopage