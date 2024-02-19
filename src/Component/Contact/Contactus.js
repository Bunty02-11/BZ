import React from 'react'

function Contactus() {
  return (
    <div>
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

export default Contactus
