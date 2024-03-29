import React, { useState } from 'react';
import Header from '../Layout/Header'

function Contactus() {

  return (
    <div>
      <div>
        {/* <div className="preloader">
          <span className="percent ">0</span>
          <span className="loading-text text-uppercase">Loading ...</span>
          <div className="preloader-bar">
            <div className="preloader-progress" />
          </div>
          <h1 className="title v-middle">
            <span className="text-strok">Eremia</span>
            <span className="text-fill">Eremia</span>
          </h1>
        </div> */}
        {/* ========== End Loading Page ========== */}
        {/* ========== Menu ========== */}
        <Header />
        {/* ========== End Menu ========== */}
        <main className="main-root">
          {/* <div id="dsn-scrollbar"> */}
          <div className="main-content">
            {/* ========== Header Normal ========== */}
            <header className="header-page over-hidden p-relative header-padding-top header-padding-bottom dsn-header-animation">
              <div className="bg-circle-dotted" />
              <div className="dsn-container">
                <div className="content-hero p-relative d-flex align-items-center text-center flex-column h-100 dsn-hero-parallax-title">
                  <p className="subtitle p-relative line-shap  ">
                    <span className="pl-10 pr-10 background-section dsn-load-animate">Let's Talk</span>
                  </p>
                  <h1 className="title mt-20 dsn-load-animate">Contact Us</h1>
                </div>
              </div>
            </header>
            {/* ========== End Header Normal ========== */}
            <div className="wrapper">
              <div className="container root-contact">
                <div className="full-width">
                  <div className="map-custom p-absolute w-100 h-100">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7211223463773!2d72.86145047452128!3d19.119886450594745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c825662c7fc5%3A0xad3d66ac3ede302c!2sPinnacle%20Business%20Park!5e0!3m2!1sen!2sin!4v1708610095321!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      referrerPolicy="no-referrer">
                    </iframe>
                  </div>
                </div>
                <div className="box-contact-inner section-margin">
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
                        <p className="mb-30">
                          It’s all about the humans behind a brand and those experiencing it,
                          we’re right there. In the middle.
                        </p>
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
                                <button type="submit" className="dsn-button ">
                                  <span className="dsn-border border-color-default" />
                                  <span className="text-button">Send Message</span>
                                </button>
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
                            <p className="text-p ">+91 9004276206</p>
                            <div className="over-hidden mt-5">
                              <a className="link-hover" data-hover-text="info@bztech.in" href="#">info@bztech.in</a>
                            </div>
                          </li>
                          <li>
                            <h5 className="title-block mb-15">Address</h5>
                            <p className="text-p"> PINNACLE BUSINESS PARK, Mahakali Caves Rd,<br /> next to Ahura center, next to M.I.D.C, Gundavali, <br /> Andheri East, Mumbai, Maharashtra 400093
                              East</p>
                          </li>
                          <li>
                            <h5 className="title-block mb-15">Follow Us</h5>
                            <div className="social-item over-hidden">
                              <a className="link-hover" data-hover-text="Instagram." href="https://www.linkedin.com/company/101879800/admin/feed/posts/" target="_blank" rel="nofollow">Linkedin.</a>
                            </div>
                            <div className="social-item over-hidden">
                              {/* <a className="link-hover" data-hover-text="Facebook." href="#" target="_blank" rel="nofollow">Facebook.</a> */}
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ==========  next page  ========== */}
              {/* <section className="next-page p-relative section-padding border-top background-section">
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
                        <a href="work.html" className="mt-30 effect-ajax dsn-button p-relative">
                          <span className="dsn-border-rdu " />Owr Work
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section> */}
              {/* ========== End next page ========== */}
            </div>
            <footer className="footer p-relative background-section">
              <div className="container">
                <div className="footer-container">
                  <div className="d-flex align-items-center h-100">
                    <div className="column-left">
                      <div className="footer-social p-relative">
                        <ul>

                          <li className="over-hidden">
                            <a href="https://www.linkedin.com/company/bztechonologies" data-dsn="parallax" target="_blank" rel="nofollow">Linkedin.</a>
                          </li>

                        </ul>
                      </div>
                    </div>
                    <div className="scroll-top animation-rotate" data-dsn="parallax">
                      <img src="assets/img/scroll_top.svg" alt="" />
                      <i className="fa fa-angle-up" />
                    </div>
                    <div className="column-right">
                      <h5>2024 © Made with <span className="love">♥</span>
                        <a className="link-hover" data-hover-text="Design Grid." target="_blank" rel="nofollow" href=""></a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
          {/* </div> */}
        </main>
        {/* ========== Scroll Right Page To Top Page ========== */}
        <div className="scroll-to-top">
          <img src="assets/img/scroll_top.svg" alt="" />
          <div className="box-numper">
            <span>10%</span>
          </div>
        </div>
        {/* ========== End Scroll Right Page To Top Page ========== */}
        {/* ========== Cursor Page ========== */}
        <div className="cursor">
          <div className="cursor-helper">
            <span className="cursor-drag">Drag</span>
            <span className="cursor-view">View</span>
            <span className="cursor-open"><i className="fas fa-plus" /></span>
            <span className="cursor-close">Close</span>
            <span className="cursor-play">play</span>
            <span className="cursor-next"><i className="fas fa-chevron-right" /></span>
            <span className="cursor-prev"><i className="fas fa-chevron-left" /></span>
          </div>
        </div>
        {/* ========== End Cursor Page ========== */}
        {/* ========== Style Option Page ========== */}
        {/* <div className="box-options c-hidden d-flex align-items-center">
          <div className="box-icon d-flex align-items-center justify-content-center text-center">
            <svg className="fa-spin" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="m272.066 512h-32.133c-25.989 0-47.134-21.144-47.134-47.133v-10.871c-11.049-3.53-21.784-7.986-32.097-13.323l-7.704 7.704c-18.659 18.682-48.548 18.134-66.665-.007l-22.711-22.71c-18.149-18.129-18.671-48.008.006-66.665l7.698-7.698c-5.337-10.313-9.792-21.046-13.323-32.097h-10.87c-25.988 0-47.133-21.144-47.133-47.133v-32.134c0-25.989 21.145-47.133 47.134-47.133h10.87c3.531-11.05 7.986-21.784 13.323-32.097l-7.704-7.703c-18.666-18.646-18.151-48.528.006-66.665l22.713-22.712c18.159-18.184 48.041-18.638 66.664.006l7.697 7.697c10.313-5.336 21.048-9.792 32.097-13.323v-10.87c0-25.989 21.144-47.133 47.134-47.133h32.133c25.989 0 47.133 21.144 47.133 47.133v10.871c11.049 3.53 21.784 7.986 32.097 13.323l7.704-7.704c18.659-18.682 48.548-18.134 66.665.007l22.711 22.71c18.149 18.129 18.671 48.008-.006 66.665l-7.698 7.698c5.337 10.313 9.792 21.046 13.323 32.097h10.87c25.989 0 47.134 21.144 47.134 47.133v32.134c0 25.989-21.145 47.133-47.134 47.133h-10.87c-3.531 11.05-7.986 21.784-13.323 32.097l7.704 7.704c18.666 18.646 18.151 48.528-.006 66.665l-22.713 22.712c-18.159 18.184-48.041 18.638-66.664-.006l-7.697-7.697c-10.313 5.336-21.048 9.792-32.097 13.323v10.871c0 25.987-21.144 47.131-47.134 47.131zm-106.349-102.83c14.327 8.473 29.747 14.874 45.831 19.025 6.624 1.709 11.252 7.683 11.252 14.524v22.148c0 9.447 7.687 17.133 17.134 17.133h32.133c9.447 0 17.134-7.686 17.134-17.133v-22.148c0-6.841 4.628-12.815 11.252-14.524 16.084-4.151 31.504-10.552 45.831-19.025 5.895-3.486 13.4-2.538 18.243 2.305l15.688 15.689c6.764 6.772 17.626 6.615 24.224.007l22.727-22.726c6.582-6.574 6.802-17.438.006-24.225l-15.695-15.695c-4.842-4.842-5.79-12.348-2.305-18.242 8.473-14.326 14.873-29.746 19.024-45.831 1.71-6.624 7.684-11.251 14.524-11.251h22.147c9.447 0 17.134-7.686 17.134-17.133v-32.134c0-9.447-7.687-17.133-17.134-17.133h-22.147c-6.841 0-12.814-4.628-14.524-11.251-4.151-16.085-10.552-31.505-19.024-45.831-3.485-5.894-2.537-13.4 2.305-18.242l15.689-15.689c6.782-6.774 6.605-17.634.006-24.225l-22.725-22.725c-6.587-6.596-17.451-6.789-24.225-.006l-15.694 15.695c-4.842 4.843-12.35 5.791-18.243 2.305-14.327-8.473-29.747-14.874-45.831-19.025-6.624-1.709-11.252-7.683-11.252-14.524v-22.15c0-9.447-7.687-17.133-17.134-17.133h-32.133c-9.447 0-17.134 7.686-17.134 17.133v22.148c0 6.841-4.628 12.815-11.252 14.524-16.084 4.151-31.504 10.552-45.831 19.025-5.896 3.485-13.401 2.537-18.243-2.305l-15.688-15.689c-6.764-6.772-17.627-6.615-24.224-.007l-22.727 22.726c-6.582 6.574-6.802 17.437-.006 24.225l15.695 15.695c4.842 4.842 5.79 12.348 2.305 18.242-8.473 14.326-14.873 29.746-19.024 45.831-1.71 6.624-7.684 11.251-14.524 11.251h-22.148c-9.447.001-17.134 7.687-17.134 17.134v32.134c0 9.447 7.687 17.133 17.134 17.133h22.147c6.841 0 12.814 4.628 14.524 11.251 4.151 16.085 10.552 31.505 19.024 45.831 3.485 5.894 2.537 13.4-2.305 18.242l-15.689 15.689c-6.782 6.774-6.605 17.634-.006 24.225l22.725 22.725c6.587 6.596 17.451 6.789 24.225.006l15.694-15.695c3.568-3.567 10.991-6.594 18.244-2.304z" />
              <path d="m256 367.4c-61.427 0-111.4-49.974-111.4-111.4s49.973-111.4 111.4-111.4 111.4 49.974 111.4 111.4-49.973 111.4-111.4 111.4zm0-192.8c-44.885 0-81.4 36.516-81.4 81.4s36.516 81.4 81.4 81.4 81.4-36.516 81.4-81.4-36.515-81.4-81.4-81.4z" />
            </svg>
          </div>
          <div className="box-inner-option p-absolute">
            <div className="day-night ">
              <span className="title-mode text-center">Style Color</span>
              <div className="night active" data-dsn-theme="dark">
                <svg width={48} height={48} viewBox="0 0 48 48">
                  <rect x="12.3" y="23.5" width="2.6" height={1} />
                  <rect x="16.1" y="15.3" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -6.8871 16.5732)" width={1} height="2.6" />
                  <rect x="23.5" y="12.3" width={1} height="2.6" />
                  <rect x="30.1" y="16.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.5145 27.0538)" width="2.6" height={1} />
                  <rect x="33.1" y="23.5" width="2.6" height={1} />
                  <rect x="30.9" y="30.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -12.9952 31.4264)" width={1} height="2.6" />
                  <rect x="23.5" y="33.1" width={1} height="2.6" />
                  <rect x="15.3" y="30.9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -17.3677 20.9457)" width="2.6" height={1} />
                  <path d="M24,18.7c-2.9,0-5.3,2.4-5.3,5.3s2.4,5.3,5.3,5.3s5.3-2.4,5.3-5.3S26.9,18.7,24,18.7z M24,28.3c-2.4,0-4.3-1.9-4.3-4.3s1.9-4.3,4.3-4.3s4.3,1.9,4.3,4.3S26.4,28.3,24,28.3z">
                  </path>
                </svg>
              </div>
              <div className="moon" data-dsn-theme="night">
                <svg width={48} height={48} viewBox="0 0 48 48">
                  <path d="M24,33.9c-5.4,0-9.9-4.4-9.9-9.9c0-4.3,2.7-8,6.8-9.4l0.8-0.3l-0.1,0.9c-0.2,0.6-0.2,1.3-0.2,1.9c0,5.2,4.3,9.5,9.5,9.5c0.6,0,1.3-0.1,1.9-0.2l0.8-0.2L33.3,27C32,31.1,28.3,33.9,24,33.9z M20.4,15.9c-3.2,1.4-5.3,4.5-5.3,8.1c0,4.9,4,8.9,8.9,8.9c3.6,0,6.7-2.1,8.1-5.3c-0.4,0-0.8,0.1-1.3,0.1c-5.8,0-10.5-4.7-10.5-10.5C20.4,16.7,20.4,16.3,20.4,15.9z">
                  </path>
                </svg>
              </div>
            </div>
            <div className="mode-layout">
              <span className="title-mode text-center">Style Layout</span>
              <div className="icon d-flex align-items-center justify-content-center">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 35 35" xmlSpace="preserve">
                  <g>
                    <g>
                      <path d="M0,25.366h35V9.546H0V25.366z M2.121,11.667h30.758v11.578H2.121V11.667z" />
                      <rect y="28.283" width={35} height="6.717" />
                      <rect width={35} height="6.717" />
                    </g>
                  </g>
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                </svg>
              </div>
            </div>
          </div>
        </div> */}
        {/* ========== End Style Option Page ========== */}
        {/* ========== social network ========== */}
        <div className="social-side social-network d-flex align-items-center ">
          <div className="icon" data-dsn="parallax">
            <i className="fa fa-share-alt" aria-hidden="true" />
          </div>
          <ul className="socials d-flex flex-column p-absolute ">
            
            <li>
              <a href target="https://www.linkedin.com/company/bztechonologies">
              <i className="fab fa-linkedin-in"></i>
                <span>LK</span>
              </a>
            </li>
          </ul>
        </div>
        {/* ========== End social network ========== */}
        {/* ========== paginate-right-page ========== */}
        <div className="dsn-paginate-right-page" />
        {/* ========== Line left & right with creative page ========== */}
        <div className="line-border-style w-100 h-100" />
      </div>
    </div>
  )
}

export default Contactus
