import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <section className="next-page p-relative section-padding border-top background-section">
                    <div className="bg-circle-dotted" />
                    <div className="bg-circle-dotted bg-circle-dotted-right" />
                    <div className="container">
                      <div className="c-wapp d-flex justify-content-between">
                        <div className="d-flex flex-column">
                          <p className="sub-heading line-shap line-shap-after ">
                            <span className="line-bg-left">
                              Don't be weird.
                            </span>
                          </p>
                          <h2 className="section-title max-w750 mt-15">
                            Would you like more information or
                            do you have a question?
                          </h2>
                        </div>
                        <div className="button-box d-flex justify-content-end align-items-center">
                          <div>
                            <li>
                            <a href="" className="mt-30 effect-ajax dsn-button p-relative">
                              <span className="dsn-border-rdu " />Contact Us
                            </a>
                            </li>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
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
                      {/* <div className="column-right">
                        <h5>2021 © Made with <span className="love">♥</span>by
                          <a className="link-hover" data-hover-text="Design Grid." target="_blank" rel="nofollow" href="https://themeforest.net/user/design_grid/portfolio/">Design
                            Grid.</a>
                        </h5>
                      </div> */}
                    </div>
                  </div>
                </div>
              </footer>
              <div className="contact-btn">
            <div className="contact-btn-txt"><Link to={"/contact"}>Contact</Link></div>
          </div>
          <div className="contact-modal background-section">
            <div className="contact-container h-100 w-100  border-right">
              <div className="box-contact-inner section-padding ">
                <div className="row align-items-center">
                  <div className="col-lg-7">
                    <div className="form-box">
                      <div className="line line-top" />
                      <div className="line line-bottom" />
                      <div className="line line-left" />
                      <div className="line line-right" />
                      <div className="mb-30 d-flex text-left flex-column align-items-start">
                        <p className="sub-heading line-shap line-shap-before mb-15">
                          <span className="line-bg-right">Stay connected</span>
                        </p>
                        <h2 className="section-title  title-cap">
                          Get in Touch
                        </h2>
                      </div>
                      <form id="contact-form" className="form" method="post" action="contact.php" data-toggle="validator">
                        <div className="messages" />
                        <div className="input__wrap controls">
                          <div className="form-group">
                            <div className="entry-box">
                              <label>Your name *</label>
                              <input id="form_name" type="text" name="name" placeholder="Type your name" required="required" data-error="name is required." />
                            </div>
                            <div className="help-block with-errors" />
                          </div>
                          <div className="form-group">
                            <div className="entry-box">
                              <label>Your E-Mail *</label>
                              <input id="form_email" type="email" name="email" placeholder="Type your Email Address" required="required" data-error="Valid email is required." />
                            </div>
                            <div className="help-block with-errors" />
                          </div>
                          <div className="form-group">
                            <div className="entry-box">
                              <label>What's up?</label>
                              <textarea id="form_message" className="form-control" name="message" placeholder="Tell us about you and the world" required="required" data-error="Please,leave us a message." defaultValue={""} />
                            </div>
                            <div className="help-block with-errors" />
                          </div>
                          <div className="text-right">
                            <div className="image-zoom w-auto d-inline-block" data-dsn="parallax">
                              <input type="submit" defaultValue="Send Message" className="dsn-button background-main border-radius" />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="box-info-contact">
                      <ul>
                        <li>
                          <h5 className="title-block mb-15">Contact</h5>
                          <p className="text-p">+1 (800) 990 8877</p>
                          <div className="over-hidden mt-5">
                            <a className="link-hover" data-hover-text="info@example.com" href="#">info@example.com</a>
                          </div>
                        </li>
                        <li>
                          <h5 className="title-block mb-15">Address</h5>
                          <p className="text-p">United Kingdom <br /> 33—35 Southernhay
                            East</p>
                        </li>
                        <li>
                          <h5 className="title-block mb-15">Follow</h5>
                          <div className="social-item over-hidden">
                            <a className="link-hover" data-hover-text="Instagram." href="#" target="_blank" rel="nofollow">Instagram.</a>
                          </div>
                          <div className="social-item over-hidden">
                            <a className="link-hover" data-hover-text="Facebook." href="#" target="_blank" rel="nofollow">Facebook.</a>
                          </div>
                          <div className="social-item over-hidden">
                            <a className="link-hover" data-hover-text="YouTube." href="#" target="_blank" rel="nofollow">YouTube.</a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Footer
