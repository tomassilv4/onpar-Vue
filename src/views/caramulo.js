import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './caramulo.css'

const Caramulo = (props) => {
  return (
    <div className="caramulo-container">
      <Helmet>
        <title>Caramulo - onpar</title>
        <meta property="og:title" content="Caramulo - onpar" />
      </Helmet>
      <header data-thq="thq-navbar" className="caramulo-navbar">
        <Link to="/" className="caramulo-navlink">
          <img
            alt="image"
            src="/playground_assets/untitled-1-200h.png"
            className="caramulo-image"
          />
        </Link>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="caramulo-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="caramulo-nav"
          >
            <Link to="/about" className="caramulo-navlink1">
              About
            </Link>
            <Link to="/archive" className="caramulo-navlink2">
              Archive
            </Link>
            <Link to="/contact" className="caramulo-navlink3">
              Contact
            </Link>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="caramulo-burger-menu">
          <svg viewBox="0 0 1024 1024" className="caramulo-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="caramulo-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="caramulo-nav1"
          >
            <div className="caramulo-container1">
              <div data-thq="thq-close-menu" className="caramulo-menu-close">
                <svg viewBox="0 0 1024 1024" className="caramulo-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
              <div className="caramulo-container2">
                <Link to="/about" className="caramulo-navlink4">
                  Text
                </Link>
                <Link to="/archive" className="caramulo-navlink5">
                  Text
                </Link>
                <Link to="/contact" className="caramulo-navlink6">
                  Text
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="caramulo-container3">
        <span>caramulopagina</span>
      </div>
    </div>
  )
}

export default Caramulo
