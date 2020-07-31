import React, { Component } from 'react'
import './Contact.css'

export class Contact extends Component {
    render() {
        return (
            <div className="container">
            
                <div id="description" className="row text-center">
                   <div className="col-sm-12">
                       <h4>Full stack web development</h4>
                       <ul>
                           <li>Online shops</li>
                           <li>Refactoring old websites</li>
                           <li>Personal blogs</li>
                           <li>Business websites</li>
                       </ul>
                       <p>Happy to help you and answer you'r questions</p>
                   </div>
                   
               </div>
              
            <br></br>
               <div className="row">
                <table class="table table-bordered">
          
            <tbody>
            
            <tr>
            <th>
                  Name:
            </th>
            <td>David Simonovic</td>
            </tr>
            <tr>
            <th>Email:</th>
            <td>davidsimonovicdev@gmail.com</td>
            </tr>
            </tbody>
            </table>
                
            </div>
            </div>
        )
    }
}

export default Contact
