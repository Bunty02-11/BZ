import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="footer p-relative background-section">
                <div className="container">
                  <div className="footer-container">
                    <div className="d-flex align-items-center h-100">
                      <div className="column-left">
                        <div className="footer-social p-relative">
                          <ul>
                            <li className="over-hidden">
                              <a href="#" data-dsn="parallax" target="_blank" rel="nofollow">Dribbble.</a>
                            </li>
                            <li className="over-hidden">
                              <a href="#" data-dsn="parallax" target="_blank" rel="nofollow">Behance.</a>
                            </li>
                            <li className="over-hidden">
                              <a href="#" data-dsn="parallax" target="_blank" rel="nofollow">Linkedin.</a>
                            </li>
                            <li className="over-hidden">
                              <a href="#" data-dsn="parallax" target="_blank" rel="nofollow">Twitter.</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="scroll-top animation-rotate" data-dsn="parallax">
                        <img src="assets/img/scroll_top.svg" alt="" />
                        <i className="fa fa-angle-up" />
                      </div>
                      <div className="column-right">
                        <h5>2021 © Made with <span className="love">♥</span>by
                          <a className="link-hover" data-hover-text="Design Grid." target="_blank" rel="nofollow" href="https://themeforest.net/user/design_grid/portfolio/">Design
                            Grid.</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
              <div className="contact-btn">
            <div className="contact-btn-txt">Contact</div>
          </div>
    </div>
  )
}

export default Footer
