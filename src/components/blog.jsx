import blog1 from "../Images/mypc.jpg";
import blog2 from "../Images/blog2.jpg";
import blog3 from "../Images/project6.jpg";


function Blog() {
    return (
        <div className="blog-section section " id="blog">
            <div className="blog-wrraper max-width">
            
            <div>
                <div className="title-wrraper">
                    <h2>My popular articles
</h2>
                    <p>I like to share my knowledge with others. Take a look at some of technical articles and behind the scene of my side project

</p>

                </div>             
                <div className="blog-wrraper flex">
                    <div className="portfolio-33 flex-30">
                        <div className="blog-list">
                            <img src={blog1} alt="" />
                            <p className="p-title">➜ How i learned both JavaScript and German at the same time?
</p> <p>Yesterday, I watch the webinar from Shopify Partners which explains how you can migrate your Woo-com...
</p>
                        </div>
                    </div>

                    <div className="portfolio-33 flex-30">
                        <div className="blog-list">
                            <img src={blog2} alt="" />
                            <p className="p-title">➜ What is headless e-commerce and why you need to use it?

</p> <p>I’ve been working on a freelance project to sync products and collections data betwen an Airtable an...
</p>
                        </div>
                    </div>

                    <div className="portfolio-33  flex-30">
                        <div className="blog-list">
                            <img src={blog3} alt="" />
                            <p className="p-title">➜ My setup as a remote Shopify & web developer</p>
                            <p>After launching the beta version of Habitscript and getting great feedback about the idea and I’m st...
</p>
                        </div>
                    </div>

                </div> 
            </div>

           
            </div>
        </div>
    )
}

export default Blog;