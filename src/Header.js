import React from 'react';
import logos from './images/logo.png';

export default function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid nav_pad">
                <a className="navbar-brand" href="#/">
                    <img className="logos" src={logos} alt="Lantern Studios"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#/">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#/">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#/">Packages</a>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn get_in">GET IN TOUCH</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
