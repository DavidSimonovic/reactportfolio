import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';



import Navbar from  './parts/navbar/Navbar';
import Footer from './parts/footer/Footer';
import Skills from './content/skills/Skills';
import Home from './content/home/Home';
import Project from './content/projects/Projects';
import Blog from './content/projects/blog/Blog';
import Pizza from './content/projects/pizza/Pizza';
import Contact from './content/contact/Contact';

import {
    BrowserRouter,
    Route
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    
     <Navbar />
      
       <BrowserRouter>
        <Route  path="/skills" component={Skills} />
        <Route  path="/home" component={Home} />
        <Route  path="/projects" component={Project} />
        <Route  path="/blog" component={Blog} />
        <Route  path="/pizza" component={Pizza} />
        <Route  path="/contact" component={Contact} />
   
        </BrowserRouter>
       
      
        <Footer />
        
       
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
