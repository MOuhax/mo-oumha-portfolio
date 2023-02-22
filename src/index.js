import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Nopage from './components/Nopage';
import Portfoliodata from "./components/Portfoliodata";
import Blogpage from './components/Blogpage';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Blogpost from './components/Blogpost';



import {createBrowserRouter,
RouterProvider} from 'react-router-dom';
import Blog from './components/Blog';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    errorElement:<><Nav/><Nopage/><Footer/></> ,
  },
  {
    path: "/blog",
    element:<><Nav/> <Blogpage /> <Footer/></>,
    errorElement:<><Nav/><Nopage/><Footer/></> ,
  },
  {
    path: "/portfolio",
    element:<><Nav/> <Portfoliodata /> <Footer/></>,
    errorElement:<><Nav/><Nopage/><Footer/></> ,
  },
  {
    path: "/blog/How-i-learned-both-JavaScript-and-German-at-the-same-time",
    element:<><Nav/> <Blogpost /> <Footer/></>,
    errorElement:<><Nav/><Nopage/><Footer/></> ,
  },
  
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <RouterProvider router={router}/>
    
    
  </React.StrictMode>
);
