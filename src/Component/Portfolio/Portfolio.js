import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'

function Portfolio() {
    return (
        <div>
            <Header />
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
            <div>
                {/* First Project section */}
                <section className="about-section p-relative section-margin " data-dsn-title="How We Are" data-dsn-animate-multi data-dsn-animate="section">
                    <div className="container">
                        <div className="row fill-right-container">
                            <div className="col-lg-6">
                                <div className="box-info pt-60 pb-60">
                                    <div className="title-move z-index-1 " data-dsn-grid="move-section" data-dsn-move={-70} data-dsn-duration="100%" data-dsn-opacity="1.2" data-dsn-responsive="tablet">
                                        <h6 className="section-title mb-30 dsn-text-shadow text-transform-upper">
                                            Hello We are , <br /> BZ TECH
                                        </h6>
                                    </div>
                                    <h6 className="mt-80 pb-30 mb-30 border-bottom title-block">At BZ Tech, we are more than just a company -
                                        we are a force that ignites growth and fuels success.
                                    </h6>
                                    <p className="max-w570 dsn-up mb-10 ">
                                        Founded in 2022, BZ Tech has become one of the best providers of software development, digital marketing, crafting bespoke websites,
                                        developing custom SaaS products, creating customized e-commerce platforms,
                                        and harnessing the power of tailored software solutions to elevate your business with our expert development team.
                                    </p>
                                    <p className="max-w570 dsn-up mb-30 ">
                                        As a forward-thinking organization, we understand the importance of
                                        staying ahead in today's rapidly evolving business landscape. That's why we specialize in providing
                                        cutting-edge solutions that empower businesses to soar to new heights.
                                    </p>
                                    <div className="box-awards d-grid grid-md-2  mt-30">
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="background-mask p-20 p-absolute h-100 w-100">
                                    <div className="line line-top" />
                                    <div className="line line-bottom" />
                                    <div className="line line-left" />
                                    <div className="line line-right" />
                                    <div className="img-box h-100">
                                        <div className="img-container h-100 before-z-index" data-dsn-grid="move-up" data-overlay={3}>
                                            <img className="cover-bg-img " src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-dsn-src="assets/img/project/Real/11.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* First Project section End*/}
            </div>
            {/* second Project Section Start  */}
            <section>
                <div>
                    <div className="box-gallery-vertical box-gallery-content section-margin " data-dsn-animate="section" data-dsn-duration="100%">
                        <div className="container">
                            <div className="row dsn-z-index-2">
                                <div className="col-lg-6  dsn-z-index-2 pr-0 mb-lg-section">
                                    <div className="box-im h-100 p-absolute">
                                        <div className="img-container h-100 before-z-index" data-dsn-grid="move-up" data-overlay={3}>
                                            <img className="cover-bg-img " src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-dsn-src="assets/img/project/Real/16.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 pl-0 mt-lg-section">
                                    <div className="box-info h-100 box-padding background-section ">
                                        <div className="box-info-inner">
                                            <div className="title-cover" data-dsn-grid="move-section" data-dsn-opacity="0.1" data-dsn-duration="170%" data-dsn-move="0%">
                                                Eremia
                                            </div>
                                            <div className="mb-50 d-flex text-left flex-column align-items-start">
                                                <p className="sub-heading line-shap line-shap-after mb-15">
                                                    <span className="line-bg-right">OUR VISION</span>
                                                </p>
                                                <h2 className="section-title text-transform-upper">We Plan Your Project</h2>
                                            </div>
                                            <p className="mb-10">
                                                <h4>Empowering Success</h4>
                                                Empowering businesses with innovative solutions, expert guidance, enabling growth, and thriving in dynamic markets.
                                            </p>
                                            <p className="mb-10">
                                                <h4>Fostering Collaboration</h4>
                                                Fostering effective collaboration: teamwork, trust, communication flourish, drawing on diverse expertise for outstanding outcomes.
                                            </p>
                                            <p className="mb-10">
                                                <h4>Igniting Innovation</h4>
                                                Core: innovation drives continuous improvement, disrupts, inspires change, forward-thinking approach, igniting innovation in clients' organizations.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* second Project Section End  */}

             {/* Third Project Section Start  */}
            <section>
                <div className="box-gallery-vertical box-gallery-content section-margin over-hidden" data-dsn-animate="section" data-dsn-duration="100%" data-dsn="color">
                    <div className="container">
                        <div className="row dsn-z-index-2">
                            <div className="col-lg-6 pr-0 box-order">
                                <div className="box-info h-100 d-flex align-items-center pr-30 pt-50 pb-50">
                                    <div className="box-info-inner">
                                        <div className="title-cover" data-dsn-grid="move-section" data-dsn-opacity="0.1" data-dsn-duration="170%" data-dsn-move="0%">
                                            Diesel
                                        </div>
                                        <div className="d-flex text-left flex-column align-items-start ">
                                            <div className="mb-30">
                                                <p className="sub-heading line-bg-left mb-15">
                                                    Some Feature
                                                </p>
                                                <h2 className="section-title  title-cap">BUSINESS CONSULTING</h2>
                                            </div>
                                        </div>
                                        <p className="max-w570  mb-10 border-top pt-30">
                                            Founded in 2000, Dsn Grid has become one of the best Digital Agency in
                                            ThemeForest Blue money going forward.
                                        </p>
                                        <p className="max-w570  border-bottom pb-30">
                                            but deploy to production. C-suite. First-order optimal
                                            strategies build on a culture of contribution and inclusion so those
                                            options
                                        </p>
                                        <a target="_blank" href="#" className="visit-site mt-30">
                                            <span className="inner-visit d-flex align-items-center">
                                                <span className="text text-uppercase">Visit Website</span>
                                                <span className="icon">
                                                    <svg viewBox="0 0 40 40">
                                                        <polyline className="path" points="14.6 17.45 20 22.85 25.4 17.45">
                                                        </polyline>
                                                    </svg>
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6  dsn-z-index-2 pl-0">
                                <div className="box-im h-100 ">
                                    <div className="img-container h-100" data-dsn-grid="move-up">
                                        <img className="cover-bg-img " data-dsn-speed={4} src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-dsn-src="assets/img/help-project.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             {/* third Project Section End  */}



              {/* Fourth Project Section Start */}
              
               {/* Fourth Project Section End  */}

        </div>
    )
}

export default Portfolio
