import React, { Component } from 'react'
import './Pizza.css'
import Pizzamain from '../img/pizza/main.png'
import Cart from '../img/pizza/cart.png'
import Order from '../img/pizza/order.png'
import Make1 from '../img/pizza/make1.png'
import Make2 from '../img/pizza/make2.png'
import Make4 from '../img/pizza/make4.png'

export class Pizza extends Component {
    render() {
        return (
            <div id="pizza" className="container">
                <div className="row">
               
                <div className="col-sm-6" >
                    <img src={ Pizzamain } class="img-fluid" alt="Pizza Home Page"></img>
                </div>

               
                <div className="col-sm-6" >
                    <img src={ Order } class="img-fluid" alt="Pizza Home Page"></img>
                </div>
                    
                </div> 
                
                 <div className="row">
                 <div className="col-sm-6" >
                    <img src={ Make1 } class="img-fluid" alt="Pizza Home Page"></img>
                </div>
                    
                
                
                
                 <div className="col-sm-6" >
                    <img src={ Make2 } class="img-fluid" alt="Pizza Home Page"></img>
                </div>
                
                </div> 

                 <div className="row">
                 <div className="col-sm-6" >
                    <img src={ Make4 } class="img-fluid" alt="Pizza Home Page"></img>
                </div>
                
                    
                
                
                 <div className="col-sm-6" >
                    <img src={ Cart } class="img-fluid" alt="Pizza Home Page"></img>
                </div>
                
                
                </div>
               <div id="description"className="row text-center">
                   <div className="col-sm-12">
                       <h4>This project is a small online pizza shop.</h4>
                       <ul>
                           <li>React front-end</li>
                           <li>Laravel back-end</li>
                           
                           <li>Hosted on <a href="https://dashboard.heroku.com">Heroku</a></li>
                           <li>Database hosting on <a href="https://www.db4free.net/">db4free</a></li>
                           <li>Link to the app <a href="https://theyummipizzadavid.herokuapp.com/">This site</a></li>
                           <li>Github link for this project <a href="https://github.com/DavidSimonovic/theyummipizza">Link</a></li>
                       </ul>
                       <p>* the hosted site is really slow because of the Database hosting, it takes some time to load and may need refreshing of the page.</p>
                   </div>
               </div>
                
            </div>
        )
    }
}

export default Pizza
