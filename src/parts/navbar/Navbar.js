import React from 'react';
import ReactDOM from 'react-dom';
import './Navbar.css';

function Navbar() {

    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <h2 className="navbar-brand">David Simonovic</h2>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item">
              <a className="nav-link" href="/home" activeClassName="nav-link-active" to="/home">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/skills">Skills</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/projects">Projects</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
    </nav>
    );
}

export default Navbar;

if (document.getElementById('navbar')) {
    ReactDOM.render(<Navbar />, document.getElementById('navbar'));
}
