import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Nopage from './components/Nopage';
import Portfoliodata from "./components/Portfoliodata";
import Blogpage from './components/Blogpage';
import Nav from './components/Nav';
import Footer from './components/Footer';


import {createBrowserRouter,
RouterProvider} from 'react-router-dom';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    errorElement: <Nopage/>,
  },
  // {
  //   path: "/blog",
  //   element: <><Nav/><Portfoliodata /><Footer/></>,
  //   children: [
  //     {
  //       path: "post1",
  //       element: <Blogpage />,
  //     },
  //     {
  //       path: "post2",
  //       element: <Blogpage />,
  //     },
  //   ],
  //  }
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
     <RouterProvider router={router}/>
    
    
  </React.StrictMode>
);
