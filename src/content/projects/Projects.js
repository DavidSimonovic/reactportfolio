import React, { Component } from 'react'
import './Projects.css';
import Blog from './img/blog/main.png'
import Pizza from './img/pizza/main.png'
import Iso from './img/iso.png'

export class Projects extends Component {
    render() {
        return (
            
            <div  className="container text-center">
   
            <div className="row">
             <div className="col-sm-6">
                 <a href="/blog">
               <div className="card">
                   <img src={ Blog } className="img-thumbnail"  alt="PHP"></img>
                <div className="card-body">
                   <h5>CMS Blog</h5>
                </div>
               </div>
               </a>
             </div>
       
       
       
             <div className="col-sm-6">
             <a href="/pizza">
             <div className="card">
             <img src={ Pizza }  className="img-thumbnail" alt="JS"></img>
       
             <div className="card-body">
                   <h5>Online pizza shop with cart</h5>
       
             </div>
             </div>
             </a>
             </div>
             
             
          
             </div>
             <div className="row" id="cert">
             <div className="col-sm-12">
            <h1> Advanced PHP certification <img src={ Iso }  alt="ISO"></img></h1>
             </div>
             </div>
             </div>
        )
    }
}

export default Projects
