import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - onpar</title>
        <meta property="og:title" content="About - onpar" />
      </Helmet>
      <header data-thq="thq-navbar" className="about-navbar">
        <Link to="/" className="about-navlink">
          <img
            alt="image"
            src="/playground_assets/untitled-1-200h.png"
            className="about-image"
          />
        </Link>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="about-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="about-nav"
          >
            <Link to="/about" className="about-navlink1">
              About
            </Link>
            <Link to="/archive" className="about-navlink2">
              Archive
            </Link>
            <Link to="/contact" className="about-navlink3">
              Contact
            </Link>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="about-burger-menu">
          <svg viewBox="0 0 1024 1024" className="about-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="about-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="about-nav1"
          >
            <div className="about-container1">
              <div data-thq="thq-close-menu" className="about-menu-close">
                <svg viewBox="0 0 1024 1024" className="about-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
              <div className="about-container2">
                <Link to="/about" className="about-navlink4">
                  Text
                </Link>
                <Link to="/archive" className="about-navlink5">
                  Text
                </Link>
                <Link to="/contact" className="about-navlink6">
                  Text
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="about-container3">
        <span>aboutpagina</span>
      </div>
    </div>
  )
}

export default About
