import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './archive.css'

const Archive = (props) => {
  return (
    <div className="archive-container">
      <Helmet>
        <title>Archive - onpar</title>
        <meta property="og:title" content="Archive - onpar" />
      </Helmet>
      <header data-thq="thq-navbar" className="archive-navbar">
        <Link to="/" className="archive-navlink">
          <img
            alt="image"
            src="/playground_assets/untitled-1-200h.png"
            className="archive-image"
          />
        </Link>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="archive-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="archive-nav"
          >
            <Link to="/about" className="archive-navlink01">
              About
            </Link>
            <Link to="/archive" className="archive-navlink02">
              Archive
            </Link>
            <Link to="/contact" className="archive-navlink03">
              Contact
            </Link>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="archive-burger-menu">
          <svg viewBox="0 0 1024 1024" className="archive-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="archive-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="archive-nav1"
          >
            <div className="archive-container1">
              <div data-thq="thq-close-menu" className="archive-menu-close">
                <svg viewBox="0 0 1024 1024" className="archive-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
              <div className="archive-container2">
                <Link to="/about" className="archive-navlink04">
                  Text
                </Link>
                <Link to="/archive" className="archive-navlink05">
                  Text
                </Link>
                <Link to="/contact" className="archive-navlink06">
                  Text
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="archive-ecra-grande">
        <section className="archive-archive-row1">
          <Link to="/caramulo" className="archive-navlink07">
            <div className="archive-caramulo">
              <img
                alt="image"
                src="/playground_assets/main%20foto%20caramulho-1500w.png"
                className="archive-caramulo-background"
              />
              <img
                alt="image"
                src="/playground_assets/cm_logo2022-800w.png"
                className="archive-caramulo-clicker"
              />
            </div>
          </Link>
          <Link to="/rally-spirit" className="archive-navlink08">
            <div className="archive-rally-spirit">
              <img
                alt="image"
                src="/playground_assets/cnv000029-1500w.png"
                className="archive-rally-spirit-background"
              />
              <img
                alt="image"
                src="/playground_assets/rallyspirit-800w.png"
                className="archive-rally-spirit-clicker"
              />
            </div>
          </Link>
        </section>
        <section className="archive-archive-row11">
          <Link to="/assorted" className="archive-navlink09">
            <div className="archive-assorted">
              <img
                alt="image"
                src="/playground_assets/main%20foto%20assorted-1500w.jpg"
                className="archive-assorted-background"
              />
              <img
                alt="image"
                src="/playground_assets/assorted-800w.png"
                className="archive-assorted-clicker"
              />
            </div>
          </Link>
          <div className="archive-unnamed">
            <Link to="/caramulo" className="archive-navlink10">
              <img
                alt="image"
                src="/playground_assets/404-1500w.png"
                className="archive-unnamed-background"
              />
            </Link>
            <img
              alt="image"
              src="/playground_assets/404-1500w.png"
              className="archive-unnamed-clicker"
            />
          </div>
        </section>
      </div>
      <div className="archive-ecra-pequeno">
        <Link to="/caramulo">
          <div className="archive-caramulo1">
            <img
              alt="image"
              src="/playground_assets/main%20foto%20caramulho-1500w.png"
              className="archive-caramulo-background1"
            />
            <img
              alt="image"
              src="/playground_assets/cm_logo2022-800w.png"
              className="archive-caramulo-clicker1"
            />
          </div>
        </Link>
        <Link to="/rally-spirit">
          <div className="archive-rally-spirit1">
            <img
              alt="image"
              src="/playground_assets/cnv000029-1500w.png"
              className="archive-rally-spirit-background1"
            />
            <img
              alt="image"
              src="/playground_assets/rallyspirit-800w.png"
              className="archive-rally-spirit-clicker1"
            />
          </div>
        </Link>
        <Link to="/assorted">
          <div className="archive-assorted1">
            <img
              alt="image"
              src="/playground_assets/main%20foto%20assorted-1500w.jpg"
              className="archive-assorted-background1"
            />
            <img
              alt="image"
              src="/playground_assets/assorted-800w.png"
              className="archive-assorted-clicker1"
            />
          </div>
        </Link>
        <div className="archive-unnamed1">
          <img
            alt="image"
            src="/playground_assets/404-1500w.png"
            className="archive-unnamed-background1"
          />
          <img
            alt="image"
            src="/playground_assets/404-1500w.png"
            className="archive-unnamed-clicker1"
          />
        </div>
      </div>
    </div>
  )
}

export default Archive
