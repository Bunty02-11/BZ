import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate();

  const reloadHomePage = () => {
    navigate("/");
    window.scrollTo(0, 0);
    window.location.reload();
  }

  const reloadAboutPage = () => {
    navigate("/about");
    window.scrollTo(0, 0);
    window.location.reload();
  }

  const reloadServicePage = () => {
    navigate("/service");
    window.scrollTo(0, 0);
    window.location.reload();
  }

  const reloadContactPage = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
    window.location.reload();
  }
  return (
    <div>
      <div className="site-header dsn-container dsn-load-animate">
        <div className="extend-container d-flex w-100 align-items-baseline justify-content-between align-items-end">
          <div className="inner-header p-relative">
            <div className="main-logo">
              <a data-dsn="parallax">
                <img className="light-logo" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-dsn-src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1708779690/ixmcajxj6ezf7entnl04.png" alt="" onClick={reloadHomePage} style={{ cursor: 'pointer' }} />
                <img className="dark-logo" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-dsn-src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1708779690/ixmcajxj6ezf7entnl04.png" alt="" onClick={reloadHomePage} style={{ cursor: 'pointer' }} />
              </a>
            </div>
          </div>
          <div className="menu-icon d-flex align-items-baseline">
            <div className="text-menu p-relative  font-heading text-transform-upper">
              <div className="p-absolute text-button">Menu</div>
              <div className="p-absolute text-open">Open</div>
              <div className="p-absolute text-close">Close</div>
            </div>
            <div className="icon-m" data-dsn="parallax" data-dsn-move={10}>
              <span className="menu-icon-line p-relative d-inline-block icon-top" />
              <span className="menu-icon-line p-relative d-inline-block icon-center" />
              <span className="menu-icon-line p-relative d-block icon-bottom" />
            </div>
          </div>
          <nav className="accent-menu dsn-container main-navigation p-absolute  w-100  d-flex align-items-baseline ">
            <div className="menu-cover-title">Menu</div>
            <ul className="extend-container p-relative d-flex flex-column justify-content-center h-100">
              <li>
                <a onClick={reloadHomePage} style={{ cursor: 'pointer' }}>
                  <span className="dsn-title-menu">Home</span>
                  <span className="dsn-bg-arrow" />
                </a>
              </li>
              <li>
                <a onClick={reloadAboutPage} style={{ cursor: 'pointer' }}>
                  <span className="dsn-title-menu">About</span>
                  <span className="dsn-bg-arrow" />
                </a>
              </li>
              <li>
                <a onClick={reloadServicePage} style={{ cursor: 'pointer' }}>
                  <span className="dsn-title-menu">Services</span>
                  <span className="dsn-bg-arrow" />
                </a>
              </li>
              {/* <li >
                <a className="user-no-selection">
                  <span className="dsn-title-menu">Portfolio</span>
                  <span className="dsn-bg-arrow" />
                </a>
              </li> */}
              <li>
                <a onClick={reloadContactPage} style={{ cursor: 'pointer' }}>
                  <span className="dsn-title-menu">Contact</span>
                  <span className="dsn-bg-arrow" />
                </a>
              </li>
            </ul>
            <div className="container-content  p-absolute h-100 left-60 d-flex flex-column justify-content-center">
              <div className="nav__info">
                <div className="nav-content">
                  <p className="title-line">
                    Head Office</p>
                  <p>
                    PINNACLE BUSINESS PARK, Mahakali Caves Rd,<br/>
                    next to Ahura center, next to M.I.D.C, Gundavali<br/>,
                    Andheri East, Mumbai, Maharashtra 400093 East
                  </p>
                </div>
                <div className="nav-content">
                  <p className="title-line">
                    Contact</p>
                  <p className="links over-hidden">
                    <a href="#" data-hover-text="+91 9004276206" className="link-hover">+91 9004276206</a>
                  </p>
                  <p className="links  over-hidden">
                    <a href="#" data-hover-text="info@bztech.in" className="link-hover">info@bztech.in</a>
                  </p>
                </div>
              </div>
              <div className="nav-social nav-content">
                <div className="nav-social-inner p-relative">
                  <p className="title-line">
                    Follow us</p>
                  <ul>
                    
                    <li>
                      <a href="https://www.linkedin.com/company/bztechonologies" target="_blank" rel="nofollow">Linkedin.
                        <div className="icon-circle">
                        </div>
                      </a>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header
