import React from "react";
import client1 from "../clients/client1.JPG";
import client2 from "../clients/client2.JPG";
import client3 from "../clients/client3.JPG";


function Reviews() {
    return (
        <div className="Reviews-section section" id="reviews">
            <div className="reviews-wrraper max-width">
                <div className="title-wrraper">
                    <h2> Client Reviews
                    </h2>
                    <p>I’ve had the chance to work with some really great people, here’s some of the super nice things they’ve said about me and my work.
                    </p>

                </div>
                <div className="Reviews-wrraper flex">
                    <div className="Reviews-col1 flex-30">
                        <div className="Reviews-list">
                            <div className="review33">
                                <p>"Mo was incredible to work with. His work was thorough, diligent, and done to the exact standards I wanted. I would be more than happy to work with him again"</p>
                                <div bis_skin_checked="1">
                                    <span>
                                        <img src={ client1} alt="" />
                                        
                                    </span>
                                    <span> 
                                        <strong>Chris</strong> Agency CEO
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="Reviews-col1 flex-30">
                        <div className="Reviews-list">
                            <div className="review33">
                                <p>"Amazing development work and Shopify experience. Would highly recommend. Enjoyed working together, communication was great & we had a good working relationship"</p>
                                <div bis_skin_checked="1">
                                    <span>
                                        <img src={ client2} alt="" />
                                        
                                    </span>
                                    <span> 
                                        <strong>Samuel</strong> Agency owner
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="Reviews-col1 flex-30">
                        <div className="Reviews-list">
                            <div className="review33">
                                <p>"ou'll have a tough time finding someone with both skill and communication like Mo. We are super please with what Mo did for us and will be definitely use him for web design needs in the future."</p>
                                <div bis_skin_checked="1">
                                    <span>
                                        <img src={ client3} alt="" />
                                        
                                    </span>
                                    <span> 
                                        <strong>Junes</strong> Ecom manager
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Reviews;