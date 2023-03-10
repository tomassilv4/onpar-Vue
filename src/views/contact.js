import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - onpar</title>
        <meta property="og:title" content="Contact - onpar" />
      </Helmet>
      <header data-thq="thq-navbar" className="contact-navbar">
        <Link to="/" className="contact-navlink">
          <img
            alt="image"
            src="/playground_assets/untitled-1-200h.png"
            className="contact-image"
          />
        </Link>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="contact-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="contact-nav"
          >
            <Link to="/about" className="contact-navlink1">
              About
            </Link>
            <Link to="/archive" className="contact-navlink2">
              Archive
            </Link>
            <Link to="/contact" className="contact-navlink3">
              Contact
            </Link>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="contact-burger-menu">
          <svg viewBox="0 0 1024 1024" className="contact-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="contact-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="contact-nav1"
          >
            <div className="contact-container1">
              <div data-thq="thq-close-menu" className="contact-menu-close">
                <svg viewBox="0 0 1024 1024" className="contact-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
              <div className="contact-container2">
                <Link to="/about" className="contact-navlink4">
                  Text
                </Link>
                <Link to="/archive" className="contact-navlink5">
                  Text
                </Link>
                <Link to="/contact" className="contact-navlink6">
                  Text
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="contact-container3">
        <span>contactpagina</span>
      </div>
    </div>
  )
}

export default Contact
