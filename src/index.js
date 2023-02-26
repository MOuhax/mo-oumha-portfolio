import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Nopage from './components/Nopage';
import Portfoliopage from "./components/Portfoliopage";
import Blogpage from './components/Blogpage';
import Nav from './components/Nav';
import Footer from './components/Footer';

import Blogpost from './postes/Blogpost';
import Post1 from './postes/post1';
import Post2 from './postes/post2';


import {createBrowserRouter,
RouterProvider} from 'react-router-dom';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    errorElement:<><Nav/><Nopage/><Footer/></> ,
  },
  {
    path: "/blog",
    element:<><Nav/> <Blogpage /> <Footer/></>,
  },
  {
    path: "/portfolio",
    element:<><Nav/> <Portfoliopage /> <Footer/></>,
  },
  {
    path: "/blog/How-i-learned-both-web-development-and-German-at-the-same-time",
    element:<><Nav/> <Blogpost /> <Footer/></>,
  },         
  {
    path: "/blog/How-to-be-a-Shopify-developer",
    element:<><Nav/> <Post1 /> <Footer/></>,
  },
  {
    path: "/blog/headless-ecommerce-with-Shopify",
    element:<><Nav/> <Post2 /> <Footer/></>,
  },
  
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <RouterProvider router={router}/>
    
    
  </React.StrictMode>
);
