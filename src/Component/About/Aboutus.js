import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'

function Aboutus() {

  

  return (
    <div>
      <div>
        {/* ========== Loading Page ========== */}
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
            <header className="header-page over-hidden p-relative header-padding-top header-padding-bottom border-bottom dsn-header-animation">
              <div className="bg-circle-dotted" />
              <div className="dsn-container">
                <div className="content-hero p-relative d-flex flex-column h-100 dsn-hero-parallax-title">
                  <p className="subtitle p-relative line-shap  line-shap-after">
                    <span className="pl-10 pr-10 background-main dsn-load-animate">BZ Tech</span>
                  </p>
                  <h1 className="title mt-30 dsn-load-animate text-transform-upper">
                    Inovation Begins here
                  </h1>
                </div>
              </div>
            </header>
            {/* ========== End Header Normal ========== */}
            <div className="wrapper">
              <div className="image-head p-relative">
                <div className="before-z-index" data-dsn-grid="move-up" data-overlay={5}>
                  <img className="cover-bg-img has-bigger-scale" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-dsn-src="assets/img/about/5.jpg"  alt="" />
                </div>
              </div>
              {/* ========== About Section ========== */}
              <section className="about-section-2 p-relative section-margin" data-dsn-title="About">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <p className="sub-heading line-shap line-shap-before mb-15">
                        <span className="line-bg-right">
                          What We Do
                        </span>
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <div className="box-left">
                        <div className="section-title">
                          <h4>Design Strategy, Web and Mobile App Design,Front-end Development &amp; Back-end Development
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="box-right">
                        <p className="max-w570 dsn-up mb-15 ">BZ Tech offers comprehensive design, development,
                          and business strategy services while prioritizing social responsibility,
                          guiding businesses towards success in a competitive landscape.
                        </p>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="box-bottom pt-50 border-top mt-50">
                        <div className="d-grid d-grid-no-space grid-md-3 grid-sm-1">
                          <div className="item d-flex align-items-center">
                            <i className="fas fa-check theme-color" />
                            <h4 className="title-block ml-15">Crafting Code, Inspiring Futures</h4>
                          </div>
                          <div className="item d-flex align-items-center">
                            <i className="fas fa-check theme-color" />
                            <h4 className="title-block ml-15">Where Innovation Meets Functionality</h4>
                          </div>
                          <div className="item d-flex align-items-center">
                            <i className="fas fa-check theme-color" />
                            <h4 className="title-block ml-15">Empowering Tomorrow's Solutions, Today.</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* ========== End About Section ========== */}
              <div className="section-margin has-popup over-hidden p-relative">
                <div className="container">
                  <div className="d-grid grid-md-2  over-hidden">
                    <a href="assets/img/help-project.jpg" className="p-relative over-hidden d-flex h-v-60">
                      <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-dsn-src="assets/img/help-project.jpg" data-dsn-srcset="assets/img/about/2.jpg 1800w,assets/img/help-project-sm.jpg 768w" alt="" className="cover-bg-img" />
                    </a>
                    <a href="assets/img/plan-project.jpg" className="p-relative over-hidden d-flex h-v-60">
                      <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-dsn-src="assets/img/plan-project-sm.jpg" data-dsn-srcset="assets/img/about/3.jpg 1800w,assets/img/plan-project-sm.jpg 768w" alt="" className="cover-bg-img" />
                    </a>
                  </div>
                </div>
              </div>
              {/* ========== services Section ========== */}
              <div className="services-lest p-relative section-margin section-padding background-section" data-dsn-title="Services">
                <div className="container mb-70 d-flex flex-column">
                  <p className="sub-heading line-shap line-shap-before mb-15">
                    <span className="line-bg-right">
                      Our Services
                    </span>
                  </p>
                  <h2 className="section-title">Crafting exquisite digital solutions for
                    software, SaaS, and eCommerce needs.</h2>
                </div>
                <div className="container">
                  <div className="service-lest-item p-relative d-flex border-bottom">
                    <span className="block-number">01 /</span>
                    <div className="icon">
                      <svg enableBackground="new 0 0 300 300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <path d="m164.804 62.461c2.478-.344 4.207-2.632 3.863-5.11s-2.632-4.207-5.11-3.862c-2.478.344-4.207 2.632-3.862 5.11.344 2.477 2.632 4.206 5.109 3.862z" />
                          <path d="m86 44c2.209 0 4-1.789 4-4v-12c0-2.209-1.791-4-4-4s-4 1.791-4 4v12c0 2.211 1.791 4 4 4z" />
                          <path d="m86 52c-2.209 0-4 1.789-4 4v12c0 2.211 1.791 4 4 4s4-1.789 4-4v-12c0-2.211-1.791-4-4-4z" />
                          <path d="m66 52h12c2.209 0 4-1.789 4-4s-1.791-4-4-4h-12c-2.209 0-4 1.789-4 4s1.791 4 4 4z" />
                          <path d="m94 52h12c2.209 0 4-1.789 4-4s-1.791-4-4-4h-12c-2.209 0-4 1.789-4 4s1.791 4 4 4z" />
                          <path d="m270 268h-80.983l-5.714-20h64.177c12.418 0 22.52-10.102 22.52-22.52v-126.96c0-12.418-10.102-22.52-22.52-22.52h-186.96c-12.418 0-22.52 10.102-22.52 22.52v126.953c0 10.595 7.471 19.589 17.516 21.894l2.064 20.633h-27.58c-2.209 0-4 1.789-4 4s1.791 4 4 4h240c2.209 0 4-1.789 4-4s-1.791-4-4-4zm-89.302 0h-49.397l5.714-20h37.968zm-82.278 0 .8-8h4.696c5.561 0 10.084-4.523 10.084-10.086v-1.914h14.698l-5.715 20zm5.496-32c1.148 0 2.084.938 2.084 2.086v1.914h-4.78l.4-4zm-3.496 12h5.58v1.914c0 1.148-.936 2.086-2.084 2.086h-3.896zm-39.9-164h186.96c8.006 0 14.52 6.512 14.52 14.52v113.48h-216v-113.48c0-8.008 6.514-14.52 14.52-14.52zm-14.52 141.473v-5.473h216v5.48c0 8.008-6.514 14.52-14.52 14.52h-133.48v-1.914c0-5.562-4.523-10.086-10.084-10.086h-5.916-4-36c-1.131 0-2.207.477-2.965 1.316-.76.836-1.127 1.957-1.016 3.082l.632 6.318c-5.096-2.278-8.651-7.377-8.651-13.243zm19.619 42.527-3.199-32h31.16l-3.199 32z" />
                          <path d="m155.596 236.233c3.378 0 6.116-2.739 6.116-6.116 0-3.378-2.739-6.116-6.116-6.116-3.378 0-6.117 2.738-6.117 6.116 0 3.377 2.739 6.116 6.117 6.116z" />
                          <path d="m114 208c11.974 0 22.987-5.238 30.612-14.354 4.193 1.497 8.687 2.354 13.388 2.354 4.116 0 8.135-.622 12-1.84v7.645c0 1.711 1.09 3.234 2.713 3.785.422.145.857.215 1.287.215 1.217 0 2.398-.559 3.17-1.562l12.494-16.243h21.314c1.676 0 3.174-1.047 3.754-2.617.578-1.574.115-3.34-1.16-4.43l-17.034-14.51c.918-3.396 1.462-6.89 1.462-10.443 0-22.055-17.943-40-40-40-2.416 0-4.77.251-7.068.664-6.029-14.465-20.308-24.664-36.932-24.664-22.057 0-40 17.945-40 40 0 6.469 1.578 12.564 4.317 17.976-2.809 5.552-4.317 11.767-4.317 18.024 0 22.055 17.943 40 40 40zm0-8c-17.645 0-32-14.355-32-32 0-3.464.587-6.807 1.649-10.017 7.342 8.563 18.213 14.017 30.351 14.017 2.416 0 4.77-.251 7.068-.664 3.259 7.819 8.947 14.356 16.097 18.744-6.018 6.343-14.275 9.92-23.165 9.92zm73.695-20c-1.242 0-2.414.578-3.17 1.562l-6.525 8.48v-28.882l22.115 18.84zm-29.695-56c17.645 0 32 14.355 32 32 0 1.542-.124 3.071-.341 4.583l-13.065-11.129c-1.188-1.008-2.852-1.238-4.271-.586-1.416.656-2.322 2.074-2.322 3.633v33.139c-3.813 1.546-7.84 2.361-12 2.361-12.969 0-24.138-7.77-29.158-18.887 14.721-5.911 25.157-20.305 25.157-37.114 0-2.603-.269-5.142-.746-7.608 1.553-.233 3.129-.392 4.746-.392zm-32 32c0-13.211 8.049-24.575 19.5-29.454.307 1.776.5 3.591.5 5.454 0 13.211-8.049 24.575-19.5 29.454-.307-1.777-.5-3.591-.5-5.454zm-12-56c12.969 0 24.138 7.769 29.158 18.887-14.722 5.909-25.158 20.304-25.158 37.113 0 2.603.269 5.142.746 7.608-1.553.233-3.129.392-4.746.392-17.645 0-32-14.355-32-32s14.355-32 32-32z" />
                        </g>
                      </svg>
                    </div>
                    <div className="service-description">
                      <h4 className="title-block mb-15">Digital Marketing</h4>
                      <p className="max-w750">Digital marketing transformed business-customer connections through online platforms, engaging and
                        converting audiences in today's digital environment.</p>
                    </div>
                  </div>
                  <div className="service-lest-item p-relative d-flex border-bottom">
                    <span className="block-number">02 /</span>
                    <div className="icon">
                      <svg enableBackground="new 0 0 300 300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <path d="m260 197.907h-8.08c-1.714-42.685-30.743-79.928-71.92-91.959v-16.041c0-.06-.031-.109-.034-.168-.019-.442-.096-.88-.263-1.301-.014-.036-.018-.075-.033-.11-.004-.009-.004-.019-.008-.028l-11.711-26.684-12.354-25.455c-1.336-2.758-5.859-2.758-7.195 0l-12.418 25.594-11.646 26.545c-.004.009-.004.019-.008.028-.015.036-.019.075-.033.111-.167.421-.244.858-.262 1.3-.003.059-.034.109-.034.169v16.043c-41.182 12.034-70.209 49.261-71.92 91.957h-12.081c-2.209 0-4 1.791-4 4v48c0 2.209 1.791 4 4 4h84v2.514c0 5.23 4.256 9.486 9.486 9.486h37.027c5.23 0 9.486-4.256 9.486-9.486v-2.514h80c2.209 0 4-1.791 4-4v-48c.001-2.21-1.79-4.001-3.999-4.001zm-136 0h-23.848c1.24-16.309 10.075-30.892 23.848-39.711zm8-104h8.486v92c0 2.209 1.791 4 4 4s4-1.791 4-4v-92h8v77.455c0 2.209 1.791 4 4 4s4-1.791 4-4v-77.455h7.514v91.262c0 2.209 1.791 4 4 4s4-1.791 4-4v-26.97c13.77 8.82 22.608 23.404 23.848 39.708h-71.848zm20-46.84 5.969 12.295h-11.936zm-9.744 20.295h19.485l8.136 18.545h-35.754zm28.258 190.545h-37.027c-.82 0-1.486-.666-1.486-1.486v-2.514h40v2.514c-.001.82-.667 1.486-1.487 1.486zm85.486-12h-12v-12c0-2.209-1.791-4-4-4s-4 1.791-4 4v12h-8v-8c0-2.209-1.791-4-4-4s-4 1.791-4 4v8h-8v-12c0-2.209-1.791-4-4-4s-4 1.791-4 4v12h-8v-8c0-2.209-1.791-4-4-4s-4 1.791-4 4v8h-8v-12c0-2.209-1.791-4-4-4s-4 1.791-4 4v12h-8v-8c0-2.209-1.791-4-4-4s-4 1.791-4 4v8h-8v-12c0-2.209-1.791-4-4-4s-4 1.791-4 4v12h-8v-8c0-2.209-1.791-4-4-4s-4 1.791-4 4v8h-8v-12c0-2.209-1.791-4-4-4s-4 1.791-4 4v12h-8v-8c0-2.209-1.791-4-4-4s-4 1.791-4 4v8h-8v-12c0-2.209-1.791-4-4-4s-4 1.791-4 4v12h-8v-8c0-2.209-1.791-4-4-4s-4 1.791-4 4v8h-16v-40h12c2.209 0 4-1.791 4-4 0-40.01 26.151-75.437 64-87.56v34.529c-19.751 10.46-32 30.688-32 53.031 0 2.209 1.791 4 4 4h112c2.209 0 4-1.791 4-4 0-22.336-12.249-42.573-32-53.033v-34.53c37.847 12.125 64 47.559 64 87.563 0 2.209 1.791 4 4 4h8z" />
                          <circle cx={56} cy="217.907" r={4} />
                          <path d="m243.516 138.392c.781.781 1.805 1.172 2.828 1.172s2.047-.391 2.828-1.172l2.828-2.828 2.828 2.828c.781.781 1.805 1.172 2.828 1.172s2.047-.391 2.828-1.172c1.562-1.562 1.562-4.094 0-5.656l-2.828-2.828 2.828-2.828c1.562-1.562 1.562-4.094 0-5.656s-4.094-1.562-5.656 0l-2.828 2.827-2.828-2.828c-1.562-1.562-4.094-1.562-5.656 0s-1.562 4.094 0 5.656l2.828 2.828-2.828 2.828c-1.563 1.563-1.563 4.094 0 5.657z" />
                          <circle cx={232} cy="77.907" r={4} />
                          <path d="m66 105.907c7.719 0 14-6.281 14-14s-6.281-14-14-14-14 6.281-14 14 6.281 14 14 14zm0-20c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
                        </g>
                      </svg>
                    </div>
                    <div className="service-description">
                      <h4 className="title-block mb-15">Web Development</h4>
                      <p className="max-w750">We create advanced web solutions with latest tech for tailored,
                        user-friendly websites meeting unique business needs.</p>
                    </div>
                  </div>
                  <div className="service-lest-item p-relative d-flex border-bottom">
                    <span className="block-number">03 /</span>
                    <div className="icon">
                      <svg enableBackground="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <g>
                            <path d="m512 348.29c0-67.987-55.249-123.85-123.85-123.85-41.498 0-78.292 20.518-100.777 51.939h-156.178v-30.014c0-9.603-7.812-17.415-17.415-17.415h-35.474c-9.603 0-17.415 7.812-17.415 17.415v30.014h-8.534c-20.632 0-37.417-16.785-37.417-37.417v-55.847c0-20.632 16.786-37.417 37.417-37.417h354.298c20.632 0 37.418 16.785 37.418 37.417v33.807c0 4.126 3.344 7.47 7.47 7.47s7.47-3.344 7.47-7.47v-33.807c0-28.869-23.488-52.357-52.358-52.357h-77.534v-32.402c0-32.254-26.241-58.495-58.495-58.495h-82.239c-32.255 0-58.495 26.241-58.495 58.495v32.403h-77.535c-28.869-.001-52.357 23.487-52.357 52.356v221.529c0 28.87 23.488 52.358 52.357 52.358h238.752c4.126 0 7.47-3.344 7.47-7.47s-3.344-7.47-7.47-7.47h-238.752c-20.632 0-37.417-16.786-37.417-37.418v-129.11c9.512 9.73 22.768 15.785 37.417 15.785h8.534v7.593c0 19.382 15.769 35.151 35.152 35.151s35.152-15.769 35.152-35.151v-7.593h147.012c-8.879 17.065-13.906 36.441-13.906 56.971 0 68.004 55.266 123.85 123.85 123.85 68.525 0 123.849-55.796 123.849-123.85zm-227.866-217.532h-109.255v-32.402c0-7.449 6.06-13.508 13.508-13.508h82.239c7.449 0 13.508 6.06 13.508 13.508zm-139.302-32.402c0-24.017 19.539-43.555 43.555-43.555h82.239c24.017 0 43.555 19.539 43.555 43.555v32.403h-15.107v-32.403c0-15.686-12.762-28.448-28.448-28.448h-82.239c-15.686 0-28.448 12.762-28.448 28.448v32.403h-15.107zm-66.526 145.534h35.474c1.365 0 2.475 1.111 2.475 2.475v11.452h-40.424v-11.452c0-1.365 1.111-2.475 2.475-2.475zm37.949 55.022c0 11.145-9.067 20.211-20.212 20.211s-20.212-9.066-20.212-20.211v-26.156h40.423v26.156zm369.438 97.782c-9.525-2.698-21.429-4.923-34.986-6.592 4.985-26.767 4.994-56.809 0-83.625 13.557-1.669 25.461-3.894 34.986-6.592 7.27 14.59 11.368 31.026 11.368 48.404-.001 17.379-4.099 33.815-11.368 48.405zm-53.428-103.379c-11.506.941-23.875 1.518-36.645 1.681v-54.341c19.116 6.459 31.11 33.253 36.645 52.66zm-51.585-52.705v54.386c-12.764-.163-25.126-.739-36.628-1.679 7.875-27.707 21.384-47.699 36.628-52.707zm-36.654 162.656c11.509-.941 23.881-1.519 36.655-1.681v54.374c-15.234-4.986-28.774-24.87-36.655-52.693zm51.594 52.659v-54.341c12.77.163 25.139.74 36.645 1.681-5.533 19.4-17.526 46.2-36.645 52.66zm0-69.282v-76.705c14.1-.171 27.63-.824 40.143-1.906 4.972 25.698 5.012 54.613 0 80.517-12.513-1.082-26.043-1.736-40.143-1.906zm82.182-100.115c-8.454 2.12-18.789 3.903-30.409 5.28-4.934-18.386-12.239-34.01-21.213-45.572 21.053 7.871 39.036 22.079 51.622 40.292zm-127.779-40.255c-8.921 11.508-16.202 27.078-21.128 45.534-11.616-1.378-21.947-3.16-30.397-5.279 12.567-18.185 30.514-32.376 51.525-40.255zm-59.415 53.614c9.526 2.698 21.431 4.923 34.991 6.592-1.578 8.517-2.693 17.504-3.28 26.878-.258 4.117 2.871 7.665 6.988 7.922 4.109.254 7.664-2.87 7.923-6.989.573-9.144 1.708-17.947 3.322-26.257 12.509 1.081 26.034 1.734 40.128 1.905v76.705c-14.095.171-27.619.824-40.129 1.905-1.263-6.528-2.243-13.358-2.879-20.442-.369-4.109-4.001-7.152-8.108-6.773-4.109.369-7.141 3.999-6.773 8.107.634 7.06 1.594 13.969 2.851 20.657-13.578 1.669-25.499 3.896-35.035 6.598-7.27-14.59-11.368-31.026-11.368-48.404.002-17.379 4.1-33.815 11.369-48.404zm7.891 110.165c8.472-2.125 18.832-3.91 30.482-5.289 4.266 15.867 11.017 32.535 21.132 45.578-21.05-7.872-39.03-22.078-51.614-40.289zm127.681 40.292c8.974-11.562 16.279-27.186 21.213-45.572 11.62 1.378 21.955 3.16 30.409 5.28-12.586 18.213-30.569 32.421-51.622 40.292z" />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="service-description">
                      <h4 className="title-block mb-15">Mobile App Design</h4>
                      <p className="max-w750">We seamlessly blend design
                        aesthetics and intuitive interfaces to elevate brands.</p>
                    </div>
                  </div>
                  <div className="service-lest-item p-relative d-flex border-bottom">
                    <span className="block-number">04 /</span>
                    <div className="icon">
                      <svg enableBackground="new 0 0 300 300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <path d="m251.757 225.516c-1.562-1.562-4.094-1.562-5.656 0l-2.828 2.828-2.828-2.828c-1.562-1.562-4.094-1.562-5.656 0s-1.562 4.094 0 5.656l2.828 2.828-2.828 2.828c-1.562 1.562-1.562 4.094 0 5.656.781.781 1.805 1.172 2.828 1.172s2.047-.391 2.828-1.172l2.828-2.828 2.828 2.828c.781.781 1.805 1.172 2.828 1.172s2.047-.391 2.828-1.172c1.562-1.562 1.562-4.094 0-5.656l-2.828-2.828 2.828-2.828c1.562-1.563 1.562-4.094 0-5.656z" />
                          <circle cx="31.272" cy={190} r={4} />
                          <circle cx="219.272" cy={62} r={4} />
                          <path d="m215.272 186c-6.617 0-12 5.383-12 12s5.383 12 12 12 12-5.383 12-12-5.382-12-12-12zm0 16c-2.205 0-4-1.793-4-4s1.795-4 4-4 4 1.793 4 4-1.794 4-4 4z" />
                          <circle cx="121.272" cy={240} r={10} />
                          <path d="m123.272 94c2.209 0 4-1.789 4-4v-16c0-2.211-1.791-4-4-4s-4 1.789-4 4v16c0 2.211 1.791 4 4 4z" />
                          <path d="m135.272 98c1.023 0 2.047-.391 2.828-1.172l10-10c1.562-1.562 1.562-4.094 0-5.656s-4.094-1.562-5.656 0l-10 10c-1.562 1.562-1.562 4.094 0 5.656.782.781 1.805 1.172 2.828 1.172z" />
                          <path d="m108.444 96.828c.781.781 1.805 1.172 2.828 1.172s2.047-.391 2.828-1.172c1.562-1.562 1.562-4.094 0-5.656l-10-10c-1.562-1.562-4.094-1.562-5.656 0s-1.562 4.094 0 5.656z" />
                          <path d="m274.474 134.402-49.455-24c-.545-.266-1.141-.402-1.746-.402h-32v-55.508c0-9.094-7.398-16.492-16.49-16.492h-103.02c-9.092 0-16.49 7.398-16.49 16.492v55.508h-20.938c-6.1 0-11.062 4.961-11.062 11.062v33.875c0 6.102 4.963 11.062 11.062 11.062h20.938v79.508c0 9.094 7.398 16.492 16.49 16.492h103.02c9.092 0 16.49-7.398 16.49-16.492v-79.507h32c.605 0 1.201-.137 1.746-.402l49.455-24c1.379-.668 2.254-2.066 2.254-3.598s-.875-2.93-2.254-3.598zm-170.759 23.598c-5.201-5.087-8.442-12.169-8.442-20s3.241-14.913 8.442-20h115.558v8h-112c-2.209 0-4 1.789-4 4s1.791 4 4 4h112v8h-80c-2.209 0-4 1.789-4 4s1.791 4 4 4h80v8zm123.557-37.612 16 7.765v19.695l-16 7.765zm-196 34.55v-33.875c0-1.688 1.373-3.062 3.062-3.062h4.938v40h-4.938c-1.688-.001-3.062-1.376-3.062-3.063zm16 3.062v-40h8v40zm127.51 96h-103.019c-4.682 0-8.49-3.809-8.49-8.492v-19.508h120v19.508c-.001 4.683-3.809 8.492-8.491 8.492zm8.49-36h-120v-163.508c0-4.684 3.809-8.492 8.49-8.492h103.02c4.682 0 8.49 3.809 8.49 8.492v55.508h-37.418c-.037-.032-.053-.078-.092-.109-6.352-5.09-14.338-7.891-22.49-7.891-9.151 0-17.49 3.46-23.848 9.105-.046.043-.094.08-.138.125-7.354 6.596-12.014 16.137-12.014 26.77s4.661 20.174 12.014 26.77c.044.046.092.082.138.125 6.358 5.645 14.697 9.105 23.848 9.105 8.222 0 16.229-2.848 22.607-8h37.393zm68-74.034v-11.932l12.293 5.966z" />
                        </g>
                      </svg>
                    </div>
                    <div className="service-description">
                      <h4 className="title-block mb-15">Saas Product</h4>
                      <p className="max-w750">We offers innovative SaaS solutions for streamlined operations and cutting-edge
                        ecommerce platforms for seamless online retail experiences</p>
                    </div>
                  </div>
                  <div className="service-lest-item p-relative d-flex border-bottom">
                    <span className="block-number">05 /</span>
                    <div className="icon">
                      <svg enableBackground="new 0 0 300 300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <path d="m248.172 54.504c2.502.005 4.533-2.02 4.538-4.521s-2.02-4.533-4.521-4.537c-2.501-.005-4.533 2.02-4.538 4.521s2.02 4.532 4.521 4.537z" />
                          <path d="m54 44c2.211 0 4-1.789 4-4v-12c0-2.211-1.789-4-4-4s-4 1.789-4 4v12c0 2.211 1.789 4 4 4z" />
                          <path d="m54 52c-2.211 0-4 1.789-4 4v12c0 2.211 1.789 4 4 4s4-1.789 4-4v-12c0-2.211-1.789-4-4-4z" />
                          <path d="m34 52h12c2.211 0 4-1.789 4-4s-1.789-4-4-4h-12c-2.211 0-4 1.789-4 4s1.789 4 4 4z" />
                          <path d="m62 52h12c2.211 0 4-1.789 4-4s-1.789-4-4-4h-12c-2.211 0-4 1.789-4 4s1.789 4 4 4z" />
                          <path d="m270 268h-80.982l-5.715-20h64.178c12.418 0 22.52-10.102 22.52-22.52v-126.96c-.001-12.418-10.103-22.52-22.521-22.52h-19.824l-30.828-30.828c-.75-.75-1.766-1.172-2.828-1.172h-100c-6.617 0-12 5.383-12 12v20h-21.48c-12.418 0-22.52 10.102-22.52 22.52v126.953c0 12.422 10.105 22.527 22.527 22.527h68.17l-5.716 20h-92.981c-2.211 0-4 1.789-4 4s1.789 4 4 4h240c2.211 0 4-1.789 4-4s-1.789-4-4-4zm-95.02-20 5.715 20h-49.391l5.716-20zm87.02-149.48v113.48h-32v-128h17.48c8.008 0 14.52 6.512 14.52 14.52zm-64-40.864 18.344 18.344h-18.344zm-104-5.656h96v28c0 2.211 1.789 4 4 4h28v128h-132v-156c0-2.207 1.793-4 4-4zm-33.48 32h21.48v128h-36v-113.48c0-8.008 6.512-14.52 14.52-14.52zm-14.52 141.473v-5.473h216v5.48c0 8.008-6.512 14.52-14.52 14.52h-186.953c-8.011 0-14.527-6.516-14.527-14.527z" />
                          <path d="m155.596 224c-3.378 0-6.117 2.738-6.117 6.116s2.739 6.117 6.117 6.117 6.116-2.739 6.116-6.117-2.738-6.116-6.116-6.116z" />
                          <path d="m102 132h16c2.211 0 4-1.789 4-4v-4h16.712c-11.24 5.472-18.806 15.892-20.33 28h-4.382c-2.211 0-4 1.789-4 4v16c0 2.211 1.789 4 4 4h16c2.211 0 4-1.789 4-4v-16c0-2.211-1.789-4-4-4h-3.572c1.567-9.578 8.127-17.644 17.556-21.547 2.935 3.37 7.205 5.547 12.016 5.547 4.752 0 8.979-2.122 11.912-5.421 8.745 3.873 14.973 11.672 17.165 21.421h-3.077c-2.211 0-4 1.789-4 4v16c0 2.211 1.789 4 4 4h16c2.211 0 4-1.789 4-4v-16c0-2.211-1.789-4-4-4h-4.764c-2.248-12.466-9.748-22.629-20.537-28h17.301v4c0 2.211 1.789 4 4 4h16c2.211 0 4-1.789 4-4v-16c0-2.211-1.789-4-4-4h-16c-2.211 0-4 1.789-4 4v4h-18.568c-1.788-6.882-7.997-12-15.432-12s-13.644 5.118-15.432 12h-18.568v-4c0-2.211-1.789-4-4-4h-16c-2.211 0-4 1.789-4 4v16c0 2.211 1.789 4 4 4zm24 36h-8v-8h8zm68 0h-8v-8h8zm4-52h8v8h-8zm-42-4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8zm-50 4h8v8h-8z" />
                        </g>
                      </svg>
                    </div>
                    <div className="service-description">
                      <h4 className="title-block mb-15">Data Security & Management</h4>
                      <p className="max-w750">Safeguarding data, ensuring integrity,
                        and enabling accessibility for efficient management.</p>
                    </div>
                  </div>
                  <div className="service-lest-item p-relative d-flex border-bottom">
                    <span className="block-number">06 /</span>
                    <div className="icon">
                      <svg enableBackground="new 0 0 300 300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <path d="m474.5 71.5h-26.261c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h26.261c12.406 0 22.5 10.094 22.5 22.5v34.5h-482v-34.5c0-12.406 10.093-22.5 22.5-22.5h377.809c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-377.809c-20.678 0-37.5 16.822-37.5 37.5v82.681c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-33.181h482v193.366c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-242.866c0-20.678-16.822-37.5-37.5-37.5z" />
                          <path d="m504.5 375.994c-4.143 0-7.5 3.357-7.5 7.5v19.506c0 12.406-10.094 22.5-22.5 22.5h-437c-12.407 0-22.5-10.094-22.5-22.5v-179.133c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v179.133c0 20.678 16.822 37.5 37.5 37.5h437c20.678 0 37.5-16.822 37.5-37.5v-19.506c0-4.142-3.357-7.5-7.5-7.5z" />
                          <path d="m108.482 234.457c-2.929-2.928-7.678-2.928-10.606 0l-45.07 45.07c-1.407 1.407-2.197 3.314-2.197 5.304s.79 3.896 2.197 5.304l44.474 44.474c1.464 1.464 3.384 2.196 5.303 2.196s3.839-.732 5.303-2.196c2.929-2.93 2.929-7.678 0-10.607l-39.171-39.17 39.767-39.767c2.93-2.93 2.93-7.678 0-10.608z" />
                          <path d="m209.344 334.608c1.464 1.464 3.384 2.196 5.303 2.196s3.839-.732 5.303-2.196l44.475-44.474c1.406-1.407 2.196-3.314 2.196-5.304s-.79-3.896-2.196-5.304l-45.071-45.07c-2.929-2.928-7.678-2.928-10.606 0-2.929 2.93-2.929 7.678 0 10.607l39.768 39.767-39.171 39.17c-2.93 2.931-2.93 7.679-.001 10.608z" />
                          <path d="m131.99 362.234c3.025 0 5.876-1.844 7.013-4.841l53.294-140.398c1.47-3.873-.478-8.204-4.35-9.674-3.872-1.471-8.204.478-9.673 4.35l-53.294 140.4c-1.47 3.872.478 8.203 4.35 9.673.876.333 1.775.49 2.66.49z" />
                          <path d="m33.006 115.371c0 12.406 10.093 22.5 22.5 22.5s22.5-10.094 22.5-22.5-10.093-22.5-22.5-22.5-22.5 10.094-22.5 22.5zm30 0c0 4.136-3.364 7.5-7.5 7.5s-7.5-3.364-7.5-7.5 3.364-7.5 7.5-7.5 7.5 3.364 7.5 7.5z" />
                          <path d="m91.166 115.371c0 12.406 10.093 22.5 22.5 22.5s22.5-10.094 22.5-22.5-10.093-22.5-22.5-22.5-22.5 10.094-22.5 22.5zm30 0c0 4.136-3.364 7.5-7.5 7.5s-7.5-3.364-7.5-7.5 3.364-7.5 7.5-7.5 7.5 3.364 7.5 7.5z" />
                          <path d="m149.325 115.371c0 12.406 10.093 22.5 22.5 22.5s22.5-10.094 22.5-22.5-10.093-22.5-22.5-22.5-22.5 10.094-22.5 22.5zm30 0c0 4.136-3.364 7.5-7.5 7.5s-7.5-3.364-7.5-7.5 3.364-7.5 7.5-7.5 7.5 3.364 7.5 7.5z" />
                          <path d="m335.5 242.368h47c12.406 0 22.5-10.094 22.5-22.5s-10.094-22.5-22.5-22.5h-47c-12.406 0-22.5 10.094-22.5 22.5s10.094 22.5 22.5 22.5zm0-30h47c4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5h-47c-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5z" />
                          <path d="m335.5 302.368h124c12.406 0 22.5-10.094 22.5-22.5s-10.094-22.5-22.5-22.5h-124c-12.406 0-22.5 10.094-22.5 22.5s10.094 22.5 22.5 22.5zm0-30h124c4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5h-124c-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5z" />
                          <path d="m335.5 362.368h87.165c12.406 0 22.5-10.094 22.5-22.5s-10.094-22.5-22.5-22.5h-87.165c-12.406 0-22.5 10.094-22.5 22.5s10.094 22.5 22.5 22.5zm0-30h87.165c4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5h-87.165c-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5z" />
                        </g>
                      </svg>
                    </div>
                    <div className="service-description">
                      <h4 className="title-block mb-15">Application Audit & Debugging</h4>
                      <p className="max-w750">Rest assured with our meticulous 
                      debugging and auditing services for optimized performance.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* ========== End services Section ========== */}
              {/* ========== awards Section ========== */}
              <section>
                {/* <div className="awards-section p-relative section-margin" data-dsn-title="Awards">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="box-left">
                        <div className="container mb-30 d-flex flex-column align-items-start">
                          <p className="sub-heading line-shap line-shap-before mb-15">
                            <span className="line-bg-right">Awards &amp; Honors</span>
                          </p>
                          <h2 className="section-title">
                            The awards won<br /> by our project.
                          </h2>
                        </div>
                        <div className="awards-inner mt-30">
                          <div className="award-item">
                            <div className="award-number">4</div>
                            <div className="award-logo">
                              <img src="assets/img/awwwards.png" alt="" />
                            </div>
                            <h4 className="sm-title-block">WEBSITE OF THE DAY</h4>
                          </div>
                          <div className="award-item">
                            <div className="award-number">6</div>
                            <div className="award-logo">
                              <img src="assets/img/cssdesignawards.png" alt="" />
                            </div>
                            <h4 className="sm-title-block">UI Design Award</h4>
                          </div>
                          <div className="award-item">
                            <div className="award-number">7</div>
                            <div className="award-logo">
                              <img src="assets/img/awwwards.png" alt="" />
                            </div>
                            <h4 className="sm-title-block">STAR AWARD</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mt-sm">
                      <div className="box-right">
                        <div className="container-img">
                          <img className="cover-bg-img" src="assets/img/agency-1.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              </section>
              {/* ========== End awards Section ========== */}
              {/* ========== Team Section ========== */}
              <section className="team team-about section-margin p-relative" data-dsn-title="Team">
                {/* <div className="container mb-70 d-flex flex-column">
                  <p className="sub-heading line-shap line-shap-before mb-15">
                    <span className="line-bg-right"> our team</span>
                  </p>
                  <h2 className="section-title">The best team ever!</h2>
                </div>
                <div className="container">
                  <div className="d-grid grid-lg-2 grid-sm-2">
                    <div className="team-item dsn-up">
                      <div className="team-item-inner">
                        <div className="team-item-wapper background-section">
                          <div className="item-content d-flex a-item-center">
                            <div className="box-img">
                              <img className="cover-bg-img" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-dsn-src="assets/img/team/1.jpg" alt="" />
                            </div>
                            <div className="box-text">
                              <h4 className="sm-title-block mb-5">Responsive Design</h4>
                              <h5 className="theme-color">Co-Founder / Design</h5>
                              <ul className="box-social mt-20">
                                <li data-dsn="parallax"><a href="#">FB</a></li>
                                <li data-dsn="parallax"><a href="#">TW</a></li>
                                <li data-dsn="parallax"><a href="#">LN</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="team-item dsn-up">
                      <div className="team-item-inner">
                        <div className="team-item-wapper background-section">
                          <div className="item-content d-flex a-item-center">
                            <div className="box-img">
                              <img className="cover-bg-img" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-dsn-src="assets/img/team/2.jpg" alt="" />
                            </div>
                            <div className="box-text">
                              <h4 className="sm-title-block mb-5">HISHAM MEGAHED</h4>
                              <h5 className="theme-color">Co-Founder</h5>
                              <ul className="box-social mt-20">
                                <li data-dsn="parallax"><a href="#">FB</a></li>
                                <li data-dsn="parallax"><a href="#">TW</a></li>
                                <li data-dsn="parallax"><a href="#">LN</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="team-item dsn-up">
                      <div className="team-item-inner">
                        <div className="team-item-wapper background-section">
                          <div className="item-content d-flex a-item-center">
                            <div className="box-img">
                              <img className="cover-bg-img" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-dsn-src="assets/img/team/3.jpg" alt="" />
                            </div>
                            <div className="box-text">
                              <h4 className="sm-title-block mb-5">BILL GARDNER</h4>
                              <h5 className="theme-color">Web designer</h5>
                              <ul className="box-social mt-20">
                                <li data-dsn="parallax"><a href="#">FB</a></li>
                                <li data-dsn="parallax"><a href="#">TW</a></li>
                                <li data-dsn="parallax"><a href="#">LN</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="team-item dsn-up">
                      <div className="team-item-inner">
                        <div className="team-item-wapper background-section">
                          <div className="item-content d-flex a-item-center">
                            <div className="box-img">
                              <img className="cover-bg-img" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-dsn-src="assets/img/team/1.jpg" alt="" />
                            </div>
                            <div className="box-text">
                              <h4 className="sm-title-block mb-5">Jeremy Dupont</h4>
                              <h5 className="theme-color">Creative Director</h5>
                              <ul className="box-social mt-20">
                                <li data-dsn="parallax"><a href="#">FB</a></li>
                                <li data-dsn="parallax"><a href="#">TW</a></li>
                                <li data-dsn="parallax"><a href="#">LN</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </section>
              {/* ========== End Team Section ========== */}
              {/* ========== testimonial Section ========== */}
              <section className="testimonials testimonials-personal section-margin" data-dsn-title="testimonials">
                <div className="container mb-70 d-flex flex-column">
                  <p className="sub-heading line-shap line-shap-before mb-15">
                    <span className="line-bg-right">Feedback</span>
                  </p>
                  <h2 className="section-title">What Clients Say</h2>
                </div>
                <div className="container">
                  <div className="testimonials-box box-padding p-relative w-100">
                    <div className="corner corner-left-top" />
                    <div className="corner corner-left-bottom" />
                    <div className="corner corner-right-top" />
                    <div className="corner corner-right-bottom" />
                    <div className="testimonials-inner p-relative w-100 dsn-swiper" data-dsn-controller=".testimonial-content" data-dsn-option="{&quot;slidesPerView&quot;:3,&quot;spaceBetween&quot;:50 }">
                      <div className="testimonial-nav text-center">
                        <div className="testimonial-nav-inner">
                          <div className="swiper-container">
                            <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                <div className="box-img mb-15" data-swiper-parallax-scale="0.7">
                                  <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-dsn-src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1708784515/juwdokibmdbdgcza2f31.png" alt="" />
                                </div>
                                <div className="box-text" data-swiper-parallax="30%" data-swiper-parallax-opacity={0}>
                                  <h4 className="title-block mb-10">Sameer C.R</h4>
                                  <h5 className="sm-title-block">Care Connect</h5>
                                </div>
                              </div>
                              <div className="swiper-slide">
                                <div className="box-img mb-15" data-swiper-parallax-scale="0.7">
                                  <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-dsn-src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1708784608/pzwmmmf0xtru9sevw4ij.png" alt="" />
                                </div>
                                <div className="box-text" data-swiper-parallax="30%" data-swiper-parallax-opacity={0}>
                                  <h4 className="title-block mb-10">Takase Masanao</h4>
                                  <h5 className="sm-title-block">Zuno </h5>
                                </div>
                              </div>
                              <div className="swiper-slide">
                                <div className="box-img mb-15" data-swiper-parallax-scale="0.7">
                                  <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-dsn-src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1708784799/rh7l7gaxeamgzlfna6al.png" alt="" />
                                </div>
                                <div className="box-text" data-swiper-parallax="30%" data-swiper-parallax-opacity={0}>
                                  <h4 className="title-block mb-10">Rbl</h4>
                                  <h5 className="sm-title-block">Winjit Solutions</h5>
                                </div>
                              </div>
                              <div className="swiper-slide">
                                <div className="box-img mb-15" data-swiper-parallax-scale="0.7">
                                  <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-dsn-src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1688328396/LocoPA_1592313175874_1592313196211_fefslk.webp" alt="" />
                                </div>
                                <div className="box-text" data-swiper-parallax="30%" data-swiper-parallax-opacity={0}>
                                  <h4 className="title-block mb-10">Michael P. </h4>
                                  <h5 className="sm-title-block">Founder of GHI Technologies</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-content text-center">
                        <div className="swiper-container">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <p className="p-larg" data-swiper-parallax="90%" data-swiper-parallax-opacity={0}>"BZ TECH's expertise in software development is unmatched. 
                              Their team not only delivered a flawless product but also provided excellent support throughout the entire process. We're incredibly satisfied with the results and would highly recommend their services to anyone seeking top-notch software solutions"</p>
                            </div>
                            <div className="swiper-slide">
                              <p className="p-larg" data-swiper-parallax="90%" data-swiper-parallax-opacity={0}>"Working with BZ TECH was a game-changer for our business. Their innovative approach to software development streamlined our operations and significantly improved efficiency. Their team's professionalism and commitment to excellence are truly commendable. We look forward to collaborating with them on future projects."</p>
                            </div>
                            <div className="swiper-slide">
                              <p className="p-larg" data-swiper-parallax="90%" data-swiper-parallax-opacity={0}>"BZ TECH exceeded our expectations in every aspect. From conceptualization to execution, their team demonstrated unparalleled expertise and dedication. The software solution they developed for us not only met our requirements but also added tremendous value to our business. We're grateful for their outstanding work and would undoubtedly choose them again for future projects."</p>
                            </div>
                            <div className="swiper-slide">
                              <p className="p-larg" data-swiper-parallax="90%" data-swiper-parallax-opacity={0}>"BZ TECH is a reliable partner that consistently delivers exceptional results. Their ability to understand our unique needs and translate them into innovative software solutions is truly remarkable. Working with them was a seamless experience, and we're thrilled with the outcome. I wholeheartedly endorse BZ TECH to anyone looking for top-tier software development services"
                              </p>
                            </div>
                          </div>
                          <div className="dsn-pagination mt-30 dsn-container d-flex justify-content-between">
                            <div className="swiper-next">
                              <div className="next-container">
                                <div className="container-inner">
                                  <div className="triangle" />
                                  <svg className="circle" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                    <g className="circle-wrap" fill="none" strokeWidth={1} strokeLinejoin="round" strokeMiterlimit={10}>
                                      <circle cx={12} cy={12} r="10.5" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-pagination" />
                            <div className="swiper-prev">
                              <div className="prev-container">
                                <div className="container-inner">
                                  <div className="triangle" />
                                  <svg className="circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g className="circle-wrap" fill="none" strokeWidth={1} strokeLinejoin="round" strokeMiterlimit={10}>
                                      <circle cx={12} cy={12} r="10.5" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* ========== End testimonial Section ========== */}
              {/* ========== End brand-client Section ========== */}
              <section className="brand-client section-margin" data-dsn-animate="section" data-dsn-title="Client">
                <div className="container mb-70 d-flex flex-column">
                  <p className="sub-heading line-shap line-shap-before mb-15">
                    <span className="line-bg-right"> Our clients</span>
                  </p>
                  <h2 className="section-title">Your success,<br /> our
                    reputation</h2>
                </div>
                <div className="container">
                  <div className="wrapper-client">
                    <div className="logo-box dsn-up">
                      <div className="logo-box-inner">
                        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-dsn-src="assets/img/logo/1.png" alt="" />
                      </div>
                    </div>
                    <div className="logo-box dsn-up">
                      <div className="logo-box-inner">
                        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-dsn-src="assets/img/logo/2.png" alt="" />
                      </div>
                    </div>
                    <div className="logo-box dsn-up">
                      <div className="logo-box-inner">
                        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-dsn-src="assets/img/logo/3.png" alt="" />
                      </div>
                    </div>
                    <div className="logo-box dsn-up">
                      <div className="logo-box-inner">
                        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-dsn-src="assets/img/logo/4.png" alt="" />
                      </div>
                    </div>
                    <div className="logo-box dsn-up">
                      <div className="logo-box-inner">
                        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-dsn-src="assets/img/logo/5.png" alt="" />
                      </div>
                    </div>
                    <div className="logo-box dsn-up">
                      <div className="logo-box-inner">
                        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-dsn-src="assets/img/logo/6.png" alt="" />
                      </div>
                    </div>
                    <div className="logo-box dsn-up">
                      <div className="logo-box-inner">
                        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-dsn-src="assets/img/logo/7.png" alt="" />
                      </div>
                    </div>
                    <div className="logo-box dsn-up">
                      <div className="logo-box-inner">
                        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-dsn-src="assets/img/logo/8.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* ========== End brand-client Section ========== */}

            </div>
            <Footer />

          </div>
          {/* </div> */}

          {/* ========== End Contact Form Model ========== */}
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
        <div className="box-options c-hidden d-flex align-items-center">
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
        </div>
        {/* ========== End Style Option Page ========== */}
        {/* ========== social network ========== */}
        <div className="social-side social-network d-flex align-items-center ">
          <div className="icon" data-dsn="parallax">
            <i className="fa fa-share-alt" aria-hidden="true" />
          </div>
          <ul className="socials d-flex flex-column p-absolute ">
            <li>
              <a href target="_blank">
                <i className="fab fa-dribbble" />
                <span>Db</span>
              </a>
            </li>
            <li>
              <a href target="_blank">
                <i className="fab fa-twitter" />
                <span>Tw</span>
              </a>
            </li>
            <li>
              <a href target="_blank">
                <i className="fab fa-behance" />
                <span>Be</span>
              </a>
            </li>
            <li>
              <a href target="_blank">
                <i className="fab fa-facebook-f" />
                <span>Fb</span>
              </a>
            </li>
          </ul>
        </div>
        {/* ========== End social network ========== */}
        {/* ========== paginate-right-page ========== */}
        <div className="dsn-paginate-right-page" />
        {/* ========== Line left & right with creative page ========== */}
        <div className="line-border-style w-100 h-100" />
        {/* Optional JavaScript */}
      </div>
    </div>
  )
}

export default Aboutus
