import React from "react";
import labtop from "../Images/Mo-oumha-macBook.webp"

export default function About() {
    return (
        <div className="about-section  section" id="about">

            <div className="about-wrraper flex max-width">
                <div className="flex-30">
                    <img src={labtop} alt="ge" />
                </div>
                <div className="flex-70">
                    
                    <h2>About & services</h2>
                    <p>I’m a self-taught web developer, and Shopify expert who started learning to code back in 2018 after discovering the ‘Digital Nomad’ movement. For the last few years, I’ve worked part-time and full-time remotely (mostly for clients from the US, Canada, and Europe). So far, so good. A unique experience with lots of video calls, Slack messages, and nice clients. Besides machine langauges i can speak fluently Frensh, English, Arabic, and German. Here are some of my services:</p>
                    
                    <ul className="servicesul">

                        <li>
                            <div className="service-li" >
                                <h3>Web development</h3>
                                <p><strong>-</strong> Develop highly interactive UI/UX for your web and mobile apps </p>
                                <p><strong>-</strong> Progressive Web Applications ( PWA ) in normal and SPA Stacks</p>
                            </div>
                        </li>

                        <li>
                            <div className="service-li" >
                                <h3 >Shopify development</h3>
                                <p ><strong>-</strong> Solve and develop ecommerce solutions for Shopify ecosystem</p>
                                <p><strong>-</strong> Integration of third party services and solutions </p>
                            </div>
                        </li>


                       
                    </ul>
                </div>
            </div>
        </div>
    )
}