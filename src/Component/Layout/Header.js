import React from 'react'

function Header() {
  return (
    <div>
      <div className="site-header dsn-container dsn-load-animate">
          <div className="extend-container d-flex w-100 align-items-baseline justify-content-between align-items-end">
            <div className="inner-header p-relative">
              <div className="main-logo">
                <a href="index.html" data-dsn="parallax">
                  <img className="light-logo" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-dsn-src="assets/img/logo.png" alt="" />
                  <img className="dark-logo" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-dsn-src="assets/img/logo-dark.png" alt="" />
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
                <li className="dsn-active dsn-drop-down">
                  <a href="#" className="user-no-selection">
                    <span className="dsn-title-menu">Demos</span>
                    <span className="dsn-meta-menu">01</span>
                    <span className="dsn-bg-arrow" />
                  </a>
                  <ul>
                    <li className="dsn-back-menu">
                      <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-dsn-src="assets/img/left-chevron.svg" alt="" />
                      <span className="dsn-title-menu">Demos</span>
                    </li>
                    <li>
                      <a href="index.html">
                        <span className="dsn-title-menu">Main Demos</span>
                        <span className="dsn-meta-menu">01</span>
                      </a>
                    </li>
                    <li>
                      <a href="demo-2.html">
                        <span className="dsn-title-menu">Demo 2</span>
                        <span className="dsn-meta-menu">02</span>
                      </a>
                    </li>
                    <li>
                      <a href="demo-3.html">
                        <span className="dsn-title-menu">Demo 3</span>
                        <span className="dsn-meta-menu">03</span>
                      </a>
                    </li>
                    <li>
                      <a href="corprate.html">
                        <span className="dsn-title-menu">corprate</span>
                        <span className="dsn-meta-menu">04</span>
                      </a>
                    </li>
                    <li>
                      <a href="corprate-2.html">
                        <span className="dsn-title-menu">corprate 2</span>
                        <span className="dsn-meta-menu">05</span>
                      </a>
                    </li>
                    <li>
                      <a href="personal.html">
                        <span className="dsn-title-menu">personal</span>
                        <span className="dsn-meta-menu">06</span>
                      </a>
                    </li>
                    <li>
                      <a href="personal-2.html">
                        <span className="dsn-title-menu">personal 2</span>
                        <span className="dsn-meta-menu">07</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dsn-drop-down">
                  <a href="#" className="user-no-selection">
                    <span className="dsn-title-menu">Sliders parallax</span>
                    <span className="dsn-meta-menu">02</span>
                    <span className="dsn-bg-arrow" />
                  </a>
                  <ul>
                    <li className="dsn-back-menu">
                      <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-dsn-src="assets/img/left-chevron.svg" alt="" />
                      <span className="dsn-title-menu">Sliders</span>
                    </li>
                    <li>
                      <a href="slider-parallax-horizontal.html">
                        <span className="dsn-title-menu">slider parallax horizontal</span>
                        <span className="dsn-meta-menu">01</span>
                      </a>
                    </li>
                    <li>
                      <a href="slider-parallax-horizontal-2.html">
                        <span className="dsn-title-menu">slider parallax horizontal 2</span>
                        <span className="dsn-meta-menu">02</span>
                      </a>
                    </li>
                    <li>
                      <a href="slider-parallax-horizontal-3.html">
                        <span className="dsn-title-menu">slider parallax horizontal 3</span>
                        <span className="dsn-meta-menu">03</span>
                      </a>
                    </li>
                    <li>
                      <a href="slider-parallax-vertical.html">
                        <span className="dsn-title-menu">slider parallax vertical</span>
                        <span className="dsn-meta-menu">04</span>
                      </a>
                    </li>
                    <li>
                      <a href="slider-parallax-vertical-2.html">
                        <span className="dsn-title-menu">slider parallax vertical 2</span>
                        <span className="dsn-meta-menu">05</span>
                      </a>
                    </li>
                    <li>
                      <a href="slider-parallax-vertical-3.html">
                        <span className="dsn-title-menu">slider parallax vertical 3</span>
                        <span className="dsn-meta-menu">06</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dsn-drop-down">
                  <a href="#" className="user-no-selection">
                    <span className="dsn-title-menu">Sliders webgel</span>
                    <span className="dsn-meta-menu">03</span>
                    <span className="dsn-bg-arrow" />
                  </a>
                  <ul>
                    <li className="dsn-back-menu">
                      <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-dsn-src="assets/img/left-chevron.svg" alt="" />
                      <span className="dsn-title-menu">Sliders webgel</span>
                    </li>
                    <li>
                      <a href="slider-webgel-horizontal.html">
                        <span className="dsn-title-menu">slider webgel horizontal</span>
                        <span className="dsn-meta-menu">01</span>
                      </a>
                    </li>
                    <li>
                      <a href="slider-webgel-horizontal-2.html">
                        <span className="dsn-title-menu">slider webgel horizontal 2</span>
                        <span className="dsn-meta-menu">02</span>
                      </a>
                    </li>
                    <li>
                      <a href="slider-webgel-horizontal-3.html">
                        <span className="dsn-title-menu">slider webgel horizontal 3</span>
                        <span className="dsn-meta-menu">03</span>
                      </a>
                    </li>
                    <li>
                      <a href="slider-webgel-vertical.html">
                        <span className="dsn-title-menu">slider webgel vertical</span>
                        <span className="dsn-meta-menu">04</span>
                      </a>
                    </li>
                    <li>
                      <a href="slider-webgel-vertical-2.html">
                        <span className="dsn-title-menu">slider webgel vertical 2</span>
                        <span className="dsn-meta-menu">05</span>
                      </a>
                    </li>
                    <li>
                      <a href="slider-webgel-vertical-3.html">
                        <span className="dsn-title-menu">slider webgel vertical 3</span>
                        <span className="dsn-meta-menu">06</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="about.html">
                    <span className="dsn-title-menu">About</span>
                    <span className="dsn-meta-menu">04</span>
                    <span className="dsn-bg-arrow" />
                  </a>
                </li>
                <li>
                  <a href="services.html">
                    <span className="dsn-title-menu">services</span>
                    <span className="dsn-meta-menu">05</span>
                    <span className="dsn-bg-arrow" />
                  </a>
                </li>
                <li className="dsn-drop-down">
                  <a href="#" className="user-no-selection">
                    <span className="dsn-title-menu">Portfolio</span>
                    <span className="dsn-meta-menu">06</span>
                    <span className="dsn-bg-arrow" />
                  </a>
                  <ul>
                    <li className="dsn-back-menu">
                      <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-dsn-src="assets/img/left-chevron.svg" alt="" />
                      <span className="dsn-title-menu">Portfolio</span>
                    </li>
                    <li>
                      <a href="work.html">
                        <span className="dsn-title-menu">Work Hover</span>
                        <span className="dsn-meta-menu">01</span>
                      </a>
                    </li>
                    <li>
                      <a href="work-2.html">
                        <span className="dsn-title-menu">Work 2 Colum</span>
                        <span className="dsn-meta-menu">02</span>
                      </a>
                    </li>
                    <li>
                      <a href="work-3.html">
                        <span className="dsn-title-menu">Work 3 Colum</span>
                        <span className="dsn-meta-menu">03</span>
                      </a>
                    </li>
                    <li>
                      <a href="work-grid.html">
                        <span className="dsn-title-menu">Work grid</span>
                        <span className="dsn-meta-menu">04</span>
                      </a>
                    </li>
                    <li>
                      <a href="work-masonry.html">
                        <span className="dsn-title-menu">Work masonry</span>
                        <span className="dsn-meta-menu">05</span>
                      </a>
                    </li>
                    <li>
                      <a href="work-masonry-2.html">
                        <span className="dsn-title-menu">Work masonry 2</span>
                        <span className="dsn-meta-menu">06</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dsn-drop-down">
                  <a href="#" className="user-no-selection">
                    <span className="dsn-title-menu">Blog</span>
                    <span className="dsn-meta-menu">07</span>
                    <span className="dsn-bg-arrow" />
                  </a>
                  <ul>
                    <li className="dsn-back-menu">
                      <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-dsn-src="assets/img/left-chevron.svg" alt="" />
                      <span className="dsn-title-menu">Blog</span>
                    </li>
                    <li>
                      <a href="blog.html">
                        <span className="dsn-title-menu">Blog </span>
                        <span className="dsn-meta-menu">01</span>
                      </a>
                    </li>
                    <li>
                      <a href="blog-2.html">
                        <span className="dsn-title-menu">Blog Style 2</span>
                        <span className="dsn-meta-menu">02</span>
                      </a>
                    </li>
                    <li>
                      <a href="blog-3.html">
                        <span className="dsn-title-menu">Blog Style 3</span>
                        <span className="dsn-meta-menu">03</span>
                      </a>
                    </li>
                    <li>
                      <a href="post.html">
                        <span className="dsn-title-menu">Single Post</span>
                        <span className="dsn-meta-menu">04</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html" className="user-no-selection">
                    <span className="dsn-title-menu">Contact</span>
                    <span className="dsn-meta-menu">08</span>
                    <span className="dsn-bg-arrow" />
                  </a>
                </li>
              </ul>
              <div className="container-content  p-absolute h-100 left-60 d-flex flex-column justify-content-center">
                <div className="nav__info">
                  <div className="nav-content">
                    <p className="title-line">
                      Studio</p>
                    <p>
                      26-30 New Damietta<br />
                      El-Mahalla El-Kubra, SK1 66LM</p>
                  </div>
                  <div className="nav-content">
                    <p className="title-line">
                      Contact</p>
                    <p className="links over-hidden">
                      <a href="#" data-hover-text="+00 (2)012 3321" className="link-hover">+00 (2)012 3321</a>
                    </p>
                    <p className="links  over-hidden">
                      <a href="#" data-hover-text="info@dsngrid.com" className="link-hover">info@dsngrid.com</a>
                    </p>
                  </div>
                </div>
                <div className="nav-social nav-content">
                  <div className="nav-social-inner p-relative">
                    <p className="title-line">
                      Follow us</p>
                    <ul>
                      <li>
                        <a href="#" target="_blank" rel="nofollow">Dribbble.
                          <div className="icon-circle" />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" rel="nofollow">Behance.
                          <div className="icon-circle" />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" rel="nofollow">Linkedin.
                          <div className="icon-circle">
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" rel="nofollow">Twitter.
                          <div className="icon-circle" />
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
