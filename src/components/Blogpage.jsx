import React from 'react'
import blog1 from "../Images/mypc.jpg";
import blog2 from "../Images/blog2.jpg";
import blog3 from "../Images/project6.jpg";


const Blogpage = () => {
  return (
    <div className="blog-section section " id="blog">
    <div className="blog-wrraper max-width">
    
    <div>
        <div className="title-wrraper">
            <h2>My blog
</h2>
            <p>I like to share my knowledge with others. Take a look at some of technical articles and behind the scene of my side project

</p>

        </div>             
        <div className="blog-wrraper flex">
            <div className="portfolio-33 flex-30">
                <div className="blog-list">
                    <img src={blog1} alt="" />
                    <p className="p-title">➜ How i learned both JavaScript and German at the same time?
</p> <p>I started learning both human and machine languages at the same time and here is how i did it and what i have learned
</p> <a href="/blog/How-i-learned-both-JavaScript-and-German-at-the-same-time">Read the article</a>
                </div>
            </div>

            <div className="portfolio-33 flex-30">
                <div className="blog-list">
                    <img src={blog2} alt="" />
                    <p className="p-title">➜ What is headless e-commerce and why you need to use it?

</p> <p> Headless commerce is a separation of the front end and back end of an ecommerce application. This architecture offers brands freedom of expression...
</p><a href="/blog/headless-ecommerce-with-Shopify">Read the article</a>
                </div>
            </div>

            <div className="portfolio-33  flex-30">
                <div className="blog-list">
                    <img src={blog3} alt="" />
                    <p className="p-title">➜ How to be a Shopify developer ?</p>
                    <p>If you want to become a Shopify developer here is how you can do it
</p>
<a href="/blog/How-to-be-a-Shopify-developer">Read the article</a>
                </div>
            </div>

        </div> 
        {/* <div className="center btn-container">
            <a href="/blog" className=" center secondary-button">More posts</a>
        </div> */}
    </div>

   
    </div>
</div>
)
}

export default Blogpage