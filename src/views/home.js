import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>onpar</title>
        <meta property="og:title" content="onpar" />
      </Helmet>
      <header data-thq="thq-navbar" className="home-navbar">
        <Link to="/" className="home-navlink">
          <img
            alt="image"
            src="/playground_assets/untitled-1-200h.png"
            className="home-image"
          />
        </Link>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="home-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="home-nav"
          >
            <Link to="/about" className="home-navlink01">
              About
            </Link>
            <Link to="/archive" className="home-navlink02">
              Archive
            </Link>
            <Link to="/contact" className="home-navlink03">
              Contact
            </Link>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="home-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="home-nav1"
          >
            <div className="home-container1">
              <div data-thq="thq-close-menu" className="home-menu-close">
                <svg viewBox="0 0 1024 1024" className="home-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
              <div className="home-container2">
                <Link to="/about" className="home-navlink04">
                  Text
                </Link>
                <Link to="/archive" className="home-navlink05">
                  Text
                </Link>
                <Link to="/contact" className="home-navlink06">
                  Text
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="home-container3">
        <span>indexpagina</span>
      </div>
      <div className="home-ecra-grande">
        <section className="home-archive-row1">
          <Link to="/caramulo" className="home-navlink07">
            <div className="home-caramulo">
              <img
                alt="image"
                src="/playground_assets/main%20foto%20caramulho-1500w.png"
                className="home-caramulo-background"
              />
              <img
                alt="image"
                src="/playground_assets/cm_logo2022-800w.png"
                className="home-caramulo-clicker"
              />
            </div>
          </Link>
          <Link to="/rally-spirit" className="home-navlink08">
            <div className="home-rally-spirit">
              <img
                alt="image"
                src="/playground_assets/cnv000029-1500w.png"
                className="home-rally-spirit-background"
              />
              <img
                alt="image"
                src="/playground_assets/rallyspirit-800w.png"
                className="home-rally-spirit-clicker"
              />
            </div>
          </Link>
        </section>
        <section className="home-archive-row11">
          <div className="home-caramulo1">
            <Link to="/caramulo" className="home-navlink09">
              <img
                alt="image"
                src="/playground_assets/cnv000029-1500w.png"
                className="home-caramulo-background1"
              />
            </Link>
            <Link to="/caramulo" className="home-navlink10">
              <img
                alt="image"
                src="/playground_assets/cm_logo2022-800w.png"
                className="home-caramulo-clicker1"
              />
            </Link>
          </div>
          <div className="home-caramulo2">
            <Link to="/caramulo" className="home-navlink11">
              <img
                alt="image"
                src="/playground_assets/cnv000029-1500w.png"
                className="home-caramulo-background2"
              />
            </Link>
            <Link to="/caramulo" className="home-navlink12">
              <img
                alt="image"
                src="/playground_assets/cm_logo2022-800w.png"
                className="home-caramulo-clicker2"
              />
            </Link>
          </div>
        </section>
      </div>
      <div className="home-ecra-pequeno">
        <section className="home-archive-row12">
          <div className="home-caramulo3">
            <Link to="/caramulo" className="home-navlink13">
              <img
                alt="image"
                src="/playground_assets/main%20foto%20caramulho-1500w.png"
                className="home-caramulo-background3"
              />
            </Link>
            <Link to="/caramulo" className="home-navlink14">
              <img
                alt="image"
                src="/playground_assets/cm_logo2022-800w.png"
                className="home-caramulo-clicker3"
              />
            </Link>
          </div>
        </section>
        <section className="home-archive-row13">
          <div className="home-caramulo4">
            <Link to="/caramulo" className="home-navlink15">
              <img
                alt="image"
                src="/playground_assets/cnv000029-1500w.png"
                className="home-caramulo-background4"
              />
            </Link>
            <Link to="/caramulo" className="home-navlink16">
              <img
                alt="image"
                src="/playground_assets/rallyspirit-800w.png"
                className="home-caramulo-clicker4"
              />
            </Link>
          </div>
        </section>
        <section className="home-archive-row14">
          <div className="home-caramulo5">
            <Link to="/caramulo" className="home-navlink17">
              <img
                alt="image"
                src="/playground_assets/cnv000029-1500w.png"
                className="home-caramulo-background5"
              />
            </Link>
            <Link to="/caramulo" className="home-navlink18">
              <img
                alt="image"
                src="/playground_assets/cm_logo2022-800w.png"
                className="home-caramulo-clicker5"
              />
            </Link>
          </div>
        </section>
        <section className="home-archive-row15">
          <div className="home-caramulo6">
            <Link to="/caramulo" className="home-navlink19">
              <img
                alt="image"
                src="/playground_assets/cnv000029-1500w.png"
                className="home-caramulo-background6"
              />
            </Link>
            <Link to="/caramulo" className="home-navlink20">
              <img
                alt="image"
                src="/playground_assets/cm_logo2022-800w.png"
                className="home-caramulo-clicker6"
              />
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
