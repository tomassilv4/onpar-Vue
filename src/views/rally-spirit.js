import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './rally-spirit.css'

const RallySpirit = (props) => {
  return (
    <div className="rally-spirit-container">
      <Helmet>
        <title>RallySpirit - onpar</title>
        <meta property="og:title" content="RallySpirit - onpar" />
      </Helmet>
      <header data-thq="thq-navbar" className="rally-spirit-navbar">
        <Link to="/" className="rally-spirit-navlink">
          <img
            alt="image"
            src="/playground_assets/untitled-1-200h.png"
            className="rally-spirit-image"
          />
        </Link>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="rally-spirit-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="rally-spirit-nav"
          >
            <Link to="/about" className="rally-spirit-navlink1">
              About
            </Link>
            <Link to="/archive" className="rally-spirit-navlink2">
              Archive
            </Link>
            <Link to="/contact" className="rally-spirit-navlink3">
              Contact
            </Link>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="rally-spirit-burger-menu">
          <svg viewBox="0 0 1024 1024" className="rally-spirit-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="rally-spirit-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="rally-spirit-nav1"
          >
            <div className="rally-spirit-container1">
              <div
                data-thq="thq-close-menu"
                className="rally-spirit-menu-close"
              >
                <svg viewBox="0 0 1024 1024" className="rally-spirit-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
              <div className="rally-spirit-container2">
                <Link to="/about" className="rally-spirit-navlink4">
                  Text
                </Link>
                <Link to="/archive" className="rally-spirit-navlink5">
                  Text
                </Link>
                <Link to="/contact" className="rally-spirit-navlink6">
                  Text
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="rally-spirit-container3">
        <span>rallyspiritpagina</span>
      </div>
    </div>
  )
}

export default RallySpirit
