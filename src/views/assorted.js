import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './assorted.css'

const Assorted = (props) => {
  return (
    <div className="assorted-container">
      <Helmet>
        <title>Assorted - onpar</title>
        <meta property="og:title" content="Assorted - onpar" />
      </Helmet>
      <header data-thq="thq-navbar" className="assorted-navbar">
        <Link to="/" className="assorted-navlink">
          <img
            alt="image"
            src="/playground_assets/untitled-1-200h.png"
            className="assorted-image"
          />
        </Link>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="assorted-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="assorted-nav"
          >
            <Link to="/about" className="assorted-navlink1">
              About
            </Link>
            <Link to="/archive" className="assorted-navlink2">
              Archive
            </Link>
            <Link to="/contact" className="assorted-navlink3">
              Contact
            </Link>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="assorted-burger-menu">
          <svg viewBox="0 0 1024 1024" className="assorted-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="assorted-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="assorted-nav1"
          >
            <div className="assorted-container1">
              <div data-thq="thq-close-menu" className="assorted-menu-close">
                <svg viewBox="0 0 1024 1024" className="assorted-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
              <div className="assorted-container2">
                <Link to="/about" className="assorted-navlink4">
                  Text
                </Link>
                <Link to="/archive" className="assorted-navlink5">
                  Text
                </Link>
                <Link to="/contact" className="assorted-navlink6">
                  Text
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Assorted
