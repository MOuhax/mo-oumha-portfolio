import React from "react";
import labtop from "../Images/Mo-oumha-macBook.webp"

export default function About() {
    return (
        <div className="about-section bg-white section">

            <div className="about-wrraper flex max-width">
                <div className="flex-30">
                    <img src={labtop} alt="ge" />
                </div>
                <div className="flex-70">
                    
                    <h2>A location independent freelancer</h2>
                    <p>I’m a self-taught web developer, WordPress, and Shopify expert who started learning to code back in 2018 after discovering the ‘Digital Nomad’ movement. For the last few years, I’ve worked full-time remotely (mostly for clients from the US, Germany, and the UK). So far, so good. A unique experience with lots of video calls, Slack messages, and nice clients. Here are some of my servics:</p>
                    <ul className="servicesul">

                        <li>
                            <div className="service-li" >
                                <h3>Web developer</h3>
                                <p>- Develop highly interactive Front end / User Interfaces for your web and mobile applications </p>
                                <p>- Progressive Web Applications ( PWA ) in normal and SPA Stacks</p>
                            </div>
                        </li>

                        <li>
                            <div className="service-li" >
                                <h3 >Shopify expert</h3>
                                <p >- Solve and develop ecommerce solutions for Shopify ecosystem</p>
                                <p>- Integration of third party services such as Firebase/ AWS / Digital Ocean</p>
                            </div>
                        </li>


                       
                    </ul>
                </div>
            </div>
        </div>
    )
}