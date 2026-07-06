import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './Home.css';

const Home = () => {
    return (
        <>
            <section className="Building-Section">
                <div className="container hero-container">
                    <div className="Building-Content">
                        <h1 className='big'>Building Better</h1>
                        <div className="product-editing-area">
                            <div className="selection-box">
                                <h2 className="Product-big">Products</h2>
                                <span className="node top-left"></span>
                                <span className="node top-right"></span>
                                <span className="node bottom-left"></span>
                                <span className="node bottom-right"></span>
                            </div>
                            <div className="cursor-img">
                                <img src="https://demo.7iquid.com/lighter/wp-content/uploads/2026/01/cursor.png" alt="Cursor" />
                            </div>
                            <div className="creative">
                                <img src="https://demo.7iquid.com/lighter/wp-content/uploads/2026/01/button.png" alt="Creative" />
                            </div>
                        </div>
                        <div className="background-img">
                            <img src="https://demo.7iquid.com/lighter/wp-content/uploads/2025/11/glass-logo.png" alt="Background" />
                            <div className="background-overlay-one float-icon-1">
                                <img src="https://demo.7iquid.com/lighter/wp-content/uploads/2025/11/404Image02.png" alt="Overlay 1" />
                            </div>
                            <div className="background-overlay-two float-icon-2">
                                <img src="https://demo.7iquid.com/lighter/wp-content/uploads/2025/12/1.png" alt="Overlay 2" />
                            </div>
                        </div>
                    </div>
                    <div className="hero-right-content">
                        <div className="building-rating">
                            <div className="rating-img">
                                <img src="https://demo.7iquid.com/lighter/wp-content/uploads/2025/12/Frame-29.png" alt="Rating" />
                            </div>
                            <div className="rating-start">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                            <div className='review'>
                                BASED ON <span>230 REVIEWS</span>
                            </div>
                            <p className="hero-description">
                                We craft bold, strategy-driven designs that help businesses stand out and connect with their audiences.
                            </p>
                        </div>
                        <div className="video-wrapper" style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
                            <video
                                src="https://api.7iquid.com/video/lighter/lighterVideo04.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </section>

            <section className="Mission-Section">
                <div className="mission-container">
                    <div className="mission-one">
                        <div className="mission-button text-start">
                            <button className="mission-btn">Our Services</button>
                        </div>
                        <div className="mission-heading text-start">
                            <h2>Our mission is to shape meaningful <br />brands and experiences</h2>
                            <div className="heading-inline">
                                <div className="small-img">
                                    <img src="https://demo.7iquid.com/lighter/wp-content/uploads/2025/12/Group-110.png" alt="Small" />
                                </div>
                                <h2>that</h2>
                            </div>
                            <h2>make an impact.</h2>
                        </div>
                        <div className="header-btn">
                            <button>Start a Project</button>
                        </div>
                    </div>
                    <div className="mission-two">
                        <div className="mission-card">
                            <div className="mission-uppar">
                                <div className="mission-icon">
                                    <i className="fa-solid fa-paintbrush"></i>
                                </div>
                                <div className="mission-text">
                                    Define. Design.<br />
                                    Distinguish.
                                </div>
                            </div>
                            <div className="main-text">
                                <h1>Branding & <br />
                                    Strategy</h1>
                            </div>
                            <div className="big-number">
                                <h1>01.</h1>
                            </div>
                        </div>
                        <div className="mission-card">
                            <div className="mission-uppar">
                                <div className="mission-icon">
                                    <i className="fa-solid fa-desktop"></i>
                                </div>
                                <div className="mission-text">
                                    Intuitive. Engaging.<br />
                                    Seamless.
                                </div>
                            </div>
                            <div className="main-text">
                                <h1>UI/UX <br />
                                    Design</h1>
                            </div>
                            <div className="big-number">
                                <h1>02.</h1>
                            </div>
                        </div>
                        <div className="mission-card">
                            <div className="mission-uppar">
                                <div className="mission-icon">
                                    <i className="fa-regular fa-lightbulb"></i>
                                </div>
                                <div className="mission-text">
                                    Vision. Style.<br />
                                    Impact.
                                </div>
                            </div>
                            <div className="main-text">
                                <h1>Creative <br />
                                    Direction</h1>
                            </div>
                            <div className="big-number">
                                <h1>03.</h1>
                            </div>
                        </div>
                        <div className="mission-card">
                            <div className="mission-uppar">
                                <div className="mission-icon">
                                    <i className="fa-solid fa-earth-asia"></i>
                                </div>
                                <div className="mission-text">
                                    Beautiful. Functional.<br />
                                    Fast.
                                </div>
                            </div>
                            <div className="main-text">
                                <h1>Web<br />
                                    Development</h1>
                            </div>
                            <div className="big-number">
                                <h1>04.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="portfolio-section">
                <div className="portfolio-container">
                    <div className="section-btn-wrapper">
                        <button className="section-btn">
                            <span className="dot"></span> Our Works
                        </button>
                    </div>
                    <Swiper
                        modules={[Navigation]}
                        navigation={true}
                        effect="fade"
                        speed={800}
                        loop={true}
                        className="portfolio-swiper"
                    >
                        <SwiperSlide>
                            <div className="swiper-card">
                                <div className="swiper-img-wrapper">
                                    <img src="https://demo.7iquid.com/lighter/wp-content/uploads/elementor/thumbs/Horizon-Finance-Rebrand-rlepr0g0cj26atggcx484i6v5a5q8uchkoxoy4kisg.avif" alt="Horizon Finance Rebrand" />
                                </div>
                                <div className="swiper-info-panel">
                                    <div className="info-col heading-col">
                                        <h3>Horizon Finance<br />Rebrand</h3>
                                    </div>
                                    <div className="info-col">
                                        <span className="label">Published Date</span>
                                        <p>December 2025</p>
                                    </div>
                                    <div className="info-col">
                                        <span className="label">Industry</span>
                                        <p>Fintech</p>
                                    </div>
                                    <div className="info-col services-col">
                                        <span className="label">Services</span>
                                        <p>Brand Identity, Creative Direction</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-card">
                                <div className="swiper-img-wrapper">
                                    <img src="https://demo.7iquid.com/lighter/wp-content/uploads/elementor/thumbs/Luma-Health-App-2-rlepr0g0cj26atggcx484i6v5a5q8uchkoxoy4kisg.avif" alt="Luma Health App" />
                                </div>
                                <div className="swiper-info-panel">
                                    <div className="info-col heading-col">
                                        <h3>Luma Health App</h3>
                                    </div>
                                    <div className="info-col">
                                        <span className="label">Published Date</span>
                                        <p>November 2025</p>
                                    </div>
                                    <div className="info-col">
                                        <span className="label">Industry</span>
                                        <p>Creative Agency</p>
                                    </div>
                                    <div className="info-col services-col">
                                        <span className="label">Services</span>
                                        <p>Web Design & Development</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-card">
                                <div className="swiper-img-wrapper">
                                    <img src="https://demo.7iquid.com/lighter/wp-content/uploads/elementor/thumbs/Northland-Studio-Website-rlepr0g0cj26atggcx484i6v5a5q8uchkoxoy4kisg.avif" alt="Northland Studio Website" />
                                </div>
                                <div className="swiper-info-panel">
                                    <div className="info-col heading-col">
                                        <h3>Northland Studio<br />Website</h3>
                                    </div>
                                    <div className="info-col">
                                        <span className="label">Published Date</span>
                                        <p>December 2025</p>
                                    </div>
                                    <div className="info-col">
                                        <span className="label">Industry</span>
                                        <p>Creative Agency</p>
                                    </div>
                                    <div className="info-col services-col">
                                        <span className="label">Services</span>
                                        <p>Web Design & Development</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section className="design-excellence-section">
                <div className="container">
                    <div className="section-btn-wrapper">
                        <button className="section-btn">
                            <span className="dot"></span> Awards
                        </button>
                    </div>
                    <div className="design-heading">
                        <h2>Recognized for Design<br />Excellence</h2>
                    </div>
                    <div className="design-content">
                        <div className="award-row">
                            <div className="award-name">
                                <p>The Webby Awards</p>
                            </div>
                            <div className="award-detail">
                                <p>Honoree — Best Visual Design</p>
                            </div>
                            <div className="award-date">
                                <p>May 2025</p>
                            </div>
                        </div>
                        <div className="award-row">
                            <div className="award-name">
                                <p>Awwwards</p>
                            </div>
                            <div className="award-detail">
                                <p>Site of the Day — Northland Studio Website</p>
                            </div>
                            <div className="award-date">
                                <p>February 2025</p>
                            </div>
                        </div>
                        <div className="award-row">
                            <div className="award-name">
                                <p>Communication Arts</p>
                            </div>
                            <div className="award-detail">
                                <p>Selected for the 2025 Design Annual</p>
                            </div>
                            <div className="award-date">
                                <p>January 2025</p>
                            </div>
                        </div>
                        <div className="award-row">
                            <div className="award-name">
                                <p>CSS Design Awards</p>
                            </div>
                            <div className="award-detail">
                                <p>Website of the Day — Luma Health App</p>
                            </div>
                            <div className="award-date">
                                <p>November 2024</p>
                            </div>
                        </div>
                        <div className="award-row">
                            <div className="award-name">
                                <p>Behance</p>
                            </div>
                            <div className="award-detail">
                                <p>Featured Project — Luma Health App UI/UX</p>
                            </div>
                            <div className="award-date">
                                <p>August 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="diagonal-gallery-section">
                <div className="gallery-tilt-wrapper">
                    <div className="gallery-column scroll-up">

                        <div className="gallery-item tall"><img src="https://demo.7iquid.com/lighter/wp-content/uploads/elementor/thumbs/Horizon-Finance-Rebrand-rlepr0fvbeppkmrv8coh3zgkf5aj6h5g1l6owhc1oo.avif" alt="App" /></div>
                        <div className="gallery-item"><img src="https://demo.7iquid.com/lighter/wp-content/uploads/elementor/thumbs/showcaseImage02-rlepr0fvbeppkmrv8coh3zgkf5aj6h5g1l6owhc1oo.avif" alt="Mockup" /></div>
                        <div className="gallery-item tall"><img src="https://demo.7iquid.com/lighter/wp-content/uploads/elementor/thumbs/showcaseIamge-rlepr0fvbeppkmrv8coh3zgkf5aj6h5g1l6owhc1oo.avif" alt="Design" /></div>

                        <div className="gallery-item tall"><img src="https://demo.7iquid.com/lighter/wp-content/uploads/elementor/thumbs/Beyond-the-Grid-Creative-Layouts-That-Still-Convert-rlepr0fvbeppkmrv8coh3zgkf5aj6h5g1l6owhc1oo.avif" alt="App" /></div>
                        <div className="gallery-item"><img src="https://demo.7iquid.com/lighter/wp-content/uploads/elementor/thumbs/Northland-Studio-Website-rlepr0fvbeppkmrv8coh3zgkf5aj6h5g1l6owhc1oo.avif" alt="Mockup" /></div>
                        <div className="gallery-item tall"><img src="https://demo.7iquid.com/lighter/wp-content/uploads/elementor/thumbs/Luma-Health-App-2-rlepr0fvbeppkmrv8coh3zgkf5aj6h5g1l6owhc1oo.avif" alt="Design" /></div>
                    </div>
                    <div className="gallery-column scroll-down">

                        <div className="gallery-item"><img src="https://demo.7iquid.com/lighter/wp-content/uploads/elementor/thumbs/showcaseImage02-rlepr0fvbeppkmrv8coh3zgkf5aj6h5g1l6owhc1oo.avif" alt="Phone" /></div>
                        <div className="gallery-item tall"><img src="https://demo.7iquid.com/lighter/wp-content/uploads/elementor/thumbs/showcaseIamge-rlepr0fvbeppkmrv8coh3zgkf5aj6h5g1l6owhc1oo.avif" alt="Horizon" /></div>
                        <div className="gallery-item"><img src="https://demo.7iquid.com/lighter/wp-content/uploads/elementor/thumbs/Northland-Studio-Website-rlepr0fvbeppkmrv8coh3zgkf5aj6h5g1l6owhc1oo.avif" alt="UI" /></div>

                        <div className="gallery-item"><img src="https://demo.7iquid.com/lighter/wp-content/uploads/elementor/thumbs/Horizon-Finance-Rebrand-rlepr0fvbeppkmrv8coh3zgkf5aj6h5g1l6owhc1oo.avif" alt="Phone" /></div>
                        <div className="gallery-item tall"><img src="https://demo.7iquid.com/lighter/wp-content/uploads/elementor/thumbs/Beyond-the-Grid-Creative-Layouts-That-Still-Convert-rlepr0fvbeppkmrv8coh3zgkf5aj6h5g1l6owhc1oo.avif" alt="Horizon" /></div>
                        <div className="gallery-item"><img src="https://demo.7iquid.com/lighter/wp-content/uploads/elementor/thumbs/Luma-Health-App-2-rlepr0fvbeppkmrv8coh3zgkf5aj6h5g1l6owhc1oo.avif" alt="UI" /></div>
                    </div>
                    <div className="gallery-column scroll-up">

                        <div className="gallery-item tall"><img src="https://demo.7iquid.com/lighter/wp-content/uploads/elementor/thumbs/Luma-Health-App-2-rlepr0fvbeppkmrv8coh3zgkf5aj6h5g1l6owhc1oo.avif" alt="Northland" /></div>
                        <div className="gallery-item"><img src="https://demo.7iquid.com/lighter/wp-content/uploads/elementor/thumbs/Northland-Studio-Website-rlepr0fvbeppkmrv8coh3zgkf5aj6h5g1l6owhc1oo.avif" alt="Creative" /></div>
                        <div className="gallery-item tall"><img src="https://demo.7iquid.com/lighter/wp-content/uploads/elementor/thumbs/Beyond-the-Grid-Creative-Layouts-That-Still-Convert-rlepr0fvbeppkmrv8coh3zgkf5aj6h5g1l6owhc1oo.avif" alt="Device" /></div>

                        <div className="gallery-item tall"><img src="https://demo.7iquid.com/lighter/wp-content/uploads/elementor/thumbs/Horizon-Finance-Rebrand-rlepr0fvbeppkmrv8coh3zgkf5aj6h5g1l6owhc1oo.avif" alt="Northland" /></div>
                        <div className="gallery-item"><img src="https://demo.7iquid.com/lighter/wp-content/uploads/elementor/thumbs/showcaseImage02-rlepr0fvbeppkmrv8coh3zgkf5aj6h5g1l6owhc1oo.avif" alt="Creative" /></div>
                        <div className="gallery-item tall"><img src="https://demo.7iquid.com/lighter/wp-content/uploads/elementor/thumbs/showcaseIamge-rlepr0fvbeppkmrv8coh3zgkf5aj6h5g1l6owhc1oo.avif" alt="Device" /></div>
                    </div>
                </div>
            </section>

            <section className="Team-members-section">
                <div className="member-container">
                    <div className="section-btn-wrapper">
                        <button className="section-btn text-start">
                            <span className="dot"></span> Team Members
                        </button>

                        <div className="sec-card">
                            <Swiper
                                modules={[Navigation, EffectFade]}
                                effect="fade"
                                speed={800}
                                loop={true}
                                className="Number-swiper text-center"
                            >
                                <SwiperSlide>
                                    <div className="Number-card">
                                        <div className="Big-number">
                                            <h1>120+</h1>
                                        </div>
                                        <div className="Number-text">
                                            <p>Brands transformed through strategy and design</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="Number-card">
                                        <div className="Big-number">
                                            <h1>100+</h1>
                                        </div>
                                        <div className="Number-text">
                                            <p>Brands elevated through strategic thinking and creative design</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="Number-card">
                                        <div className="Big-number">
                                            <h1>20+</h1>
                                        </div>
                                        <div className="Number-text">
                                            <p>Successful brand transformations through strategy & creativity</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div className="card-img text-end">
                                <img src="https://demo.7iquid.com/lighter/wp-content/uploads/2025/12/Social-proof.png" alt="Team" />
                            </div>
                        </div>
                    </div>
                    <div className="member-card-section">
                        <div className="mem-card">
                            <h5 className="mem-heading">CREATIVE</h5>
                            <div className="mem-img">
                                <img src="https://demo.7iquid.com/lighter/wp-content/uploads/elementor/thumbs/teamMember-rlepr0frtjlv8fkw9opua2adqd8hqtc4uv73mijtzc.png" alt="Creative" />
                            </div>
                            <div className="mem-name">
                                <h4>Ava Mitchell</h4>
                            </div>
                            <h5 className="mem-pro">Creative Director</h5>
                            <h6 className="mem-use">@avamt</h6>
                        </div>
                        <div className="mem-card">
                            <h5 className="mem-heading">DESIGN</h5>
                            <div className="mem-img">
                                <img src="https://demo.7iquid.com/lighter/wp-content/uploads/elementor/thumbs/teamMember02-rlepr0frtjlv8fkw9opua2adqd8hqtc4uv73mijtzc.png" alt="Design" />
                            </div>
                            <div className="mem-name">
                                <h4>Daniel Reyes</h4>
                            </div>
                            <h5 className="mem-pro">UI/UX Designer</h5>
                            <h6 className="mem-use">@dreyes</h6>
                        </div>
                        <div className="mem-card">
                            <h5 className="mem-heading">STRATEGY</h5>
                            <div className="mem-img">
                                <img src="https://demo.7iquid.com/lighter/wp-content/uploads/elementor/thumbs/teamMember03-rlepr0frtjlv8fkw9opua2adqd8hqtc4uv73mijtzc.png" alt="Strategy" />
                            </div>
                            <div className="mem-name">
                                <h4>Mia Chen</h4>
                            </div>
                            <h5 className="mem-pro">Brand Strategist</h5>
                            <h6 className="mem-use">@miamia</h6>
                        </div>
                        <div className="mem-card">
                            <h5 className="mem-heading">DEVELOPMENT</h5>
                            <div className="mem-img">
                                <img src="https://demo.7iquid.com/lighter/wp-content/uploads/elementor/thumbs/teammember05-rlepr0frtjlv8fkw9opua2adqd8hqtc4uv73mijtzc.png" alt="Development" />
                            </div>
                            <div className="mem-name">
                                <h4>Lucas Nguyen</h4>
                            </div>
                            <h5 className="mem-pro">Front-End Developer</h5>
                            <h6 className="mem-use">@lucasng</h6>
                        </div>
                        <div className="mem-card">
                            <h5 className="mem-heading">MANAGER</h5>
                            <div className="mem-img">
                                <img src="https://demo.7iquid.com/lighter/wp-content/uploads/elementor/thumbs/teamMember06-rlepr0frtjlv8fkw9opua2adqd8hqtc4uv73mijtzc.png" alt="Manager" />
                            </div>
                            <div className="mem-name">
                                <h4>Sofia Ramirez</h4>
                            </div>
                            <h5 className="mem-pro">Operations Manager</h5>
                            <h6 className="mem-use">@rsofi</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="process-section">
                <div className="process-container">
                    <div className="process-header">
                        <div className="section-btn-wrapper">
                            <button className="section-btn">
                                <span className="dot"></span> Process
                            </button>
                        </div>
                        <div className="process-heading">
                            <h2>For Your <br />Next Projects</h2>
                        </div>
                    </div>
                    <div className="process-grid">
                        <div className="process-card">
                            <div className="card-content-top">
                                <div className="card-icon">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                                <div className="card-title">
                                    <h3>Discover <br /><span>& Define</span></h3>
                                </div>
                            </div>

                            <div className="card-desc">
                                <p>We start by understanding your goals, audience, and market landscape to build a solid strategic foundation.</p>
                            </div>

                            <div className="card-bg-number">
                                <h1>01.</h1>
                            </div>
                        </div>
                        <div className="process-card">
                            <div className="card-content-top">
                                <div className="card-icon">
                                    <i className="fa-solid fa-pen"></i>
                                </div>
                                <div className="card-title">
                                    <h3>Design <br /><span>& Develop</span></h3>
                                </div>
                            </div>

                            <div className="card-desc">
                                <p>We create intuitive, engaging designs and build robust, scalable solutions tailored to your specific needs.</p>
                            </div>

                            <div className="card-bg-number">
                                <h1>02.</h1>
                            </div>
                        </div>
                        <div className="process-card">
                            <div className="card-content-top">
                                <div className="card-icon">
                                    <i className="fa-solid fa-desktop"></i>
                                </div>
                                <div className="card-title">
                                    <h3>Deliver <br /><span>& Elevate</span></h3>
                                </div>
                            </div>

                            <div className="card-desc">
                                <p>We bring your vision to life across all touchpoints. After launch, we refine and optimize to ensure your brand continues to grow and shine.</p>
                            </div>

                            <div className="card-bg-number">
                                <h1>03.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="working-section">
                <div className="working-container">
                    <button className="section-btn text-center">
                        <span className="dot"></span>Testimonials
                    </button>
                    <div className="thr-card">
                        <Swiper
                            modules={[Navigation, EffectFade]}
                            effect="fade"
                            speed={800}
                            loop={true}
                            className="Working-swiper text-center"
                        >
                            <SwiperSlide>
                                <div className="Working-card">
                                    <div className="working-upper">
                                        <div className="work-text">
                                            <h3>"Working with Lighter completely transformed<br />
                                                our brand presence. Their team understood<br />
                                                our vision and turned it into something<br />
                                                powerful."</h3>
                                        </div>
                                    </div>
                                    <div className="work-icon">
                                        <i class="fa-solid fa-quote-right"></i>
                                    </div>
                                </div>
                                <div className="work-bottom">
                                    <div className="work-info">
                                        <div className="work-img-one">
                                            <img src="https://demo.7iquid.com/lighter/wp-content/uploads/elementor/thumbs/reviewerAvatar01-rlepr0forwms7f6k8ejwzv6h50pf3fau5dq690crwk.avif" alt="Ava Mitchell" />
                                        </div>
                                        <div className="work-name">
                                            <p>Olivia Hart</p>
                                        </div>
                                        <div className="work-pro">
                                            <p>Verde Coffee Co.</p>
                                        </div>
                                    </div>
                                    <div className="work-img-two">
                                        <img src="https://demo.7iquid.com/lighter/wp-content/uploads/elementor/thumbs/Frame-4-rlepr0fnt9d5yen7kmt6dx0njyuus2ydon0veuok34.png" alt="Daniel Reyes" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="Working-card">
                                    <div className="working-upper">
                                        <div className="work-text">
                                            <h3>"He instantly understood our product vision<br />
                                                and turned it into a clean, functional design<br />
                                                that truly speaks to our users"</h3>
                                        </div>
                                    </div>
                                    <div className="work-icon">
                                        <i class="fa-solid fa-quote-right"></i>
                                    </div>
                                </div>
                                <div className="work-bottom">
                                    <div className="work-info">
                                        <div className="work-img-one">
                                            <img src="https://demo.7iquid.com/lighter/wp-content/uploads/elementor/thumbs/testimonialImage01-rlepr0forwms7f6k8ejwzv6h50pf3fau5dq690crwk.avif" alt="Ava Mitchell" />
                                        </div>
                                        <div className="work-name">
                                            <p>Michael Brooks</p>
                                        </div>
                                        <div className="work-pro">
                                            <p>Founder, Horizon Studio</p>
                                        </div>
                                    </div>
                                    <div className="work-img-two">
                                        <img src="https://demo.7iquid.com/lighter/wp-content/uploads/elementor/thumbs/Frame-4-rlepr0fnt9d5yen7kmt6dx0njyuus2ydon0veuok34.png" alt="Daniel Reyes" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="Working-card">
                                    <div className="working-upper">
                                        <div className="work-text">
                                            <h3>"From concept to final design, David was<br />
                                                thoughtful, fast, and precise. His work elevated<br />
                                                our online presence and set a new standard for<br />
                                                our marketing team."</h3>
                                        </div>
                                    </div>
                                    <div className="work-icon">
                                        <i class="fa-solid fa-quote-right"></i>
                                    </div>
                                </div>
                                <div className="work-bottom">
                                    <div className="work-info">
                                        <div className="work-img-one">
                                            <img src="https://demo.7iquid.com/lighter/wp-content/uploads/elementor/thumbs/testimonialImage02-rlepr0forwms7f6k8ejwzv6h50pf3fau5dq690crwk.avif" alt="Ava Mitchell" />
                                        </div>
                                        <div className="work-name">
                                            <p>Lena Park</p>
                                        </div>
                                        <div className="work-pro">
                                            <p>Marketing Director, NovaWear</p>
                                        </div>
                                    </div>
                                    <div className="work-img-two">
                                        <img src="https://demo.7iquid.com/lighter/wp-content/uploads/elementor/thumbs/Frame-4-rlepr0fnt9d5yen7kmt6dx0njyuus2ydon0veuok34.png" alt="Daniel Reyes" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section >
        </>
    );
};

export default Home;