import React, { Component } from 'react'
import Main from "../img/blog/main.png"
import Cate from "../img/blog/category.png"
import Comme from "../img/blog/comments.png"
import Dash from "../img/blog/dash.png"

export class Blog extends Component {
    render() {
        return (
            <div id="pizza" className="container">
            <div className="row">
           
            <div className="col-sm-6" >
                <img src={ Main } class="img-fluid" alt="Pizza Home Page"></img>
            </div>

           
            <div className="col-sm-6" >
                <img src={ Dash } class="img-fluid" alt="Pizza Home Page"></img>
            </div>
                
            </div> 
            
             <div className="row">
             <div className="col-sm-6" >
                <img src={ Cate } class="img-fluid" alt="Pizza Home Page"></img>
            </div>
                
            
            
            
             <div className="col-sm-6" >
                <img src={ Comme } class="img-fluid" alt="Pizza Home Page"></img>
            </div>
            
            </div> 

           <div id="description"className="row text-center">
               <div className="col-sm-12">
                   <h4>CMS Blog with admin and users</h4>
                   <ul>
                       <li>Html</li>
                       <li>JavaScript</li> 
                       <li>PHP</li>
                       <li>This site is made without any freamwork</li>
                       <li>Github link for this project <a href="https://github.com/DavidSimonovic/cmspdo">Link</a></li>
                   </ul>
                   <p>This project was focused on PHP and the majority of the page is in vanila PHP</p>
               </div>
           </div>
            
        </div>
        )
    }
}

export default Blog
