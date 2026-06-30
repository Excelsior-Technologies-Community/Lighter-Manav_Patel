import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <>
            <header className="header-one">
                <div className="header-content">
                    <div className="one-icon">
                        <i class="fa-solid fa-circle"></i>
                    </div>
                    <div className="one-text">
                        <h3>We Are Available For New Project</h3>
                    </div>
                </div>
            </header>
            <header className="header-two container">
                <div className="header-two-content">
                    <div className="header-img">
                        <img src="https://demo.7iquid.com/lighter/wp-content/uploads/2025/11/MainLogo.png" alt="Logo" />
                    </div>
                    <div className="mega-menu">
                        <div className="dropdown">
                            <div className="dropdown-label">Home</div>
                            <ul className="dropdown-content">
                                <li>Creative Agency</li>
                                <li>Personal Portfolio</li>
                                <li>Marketing Agency</li>
                                <li>AI Creative Agency</li>
                            </ul>
                        </div>
                        <div className="dropdown-label">About</div>
                        <div className="dropdown-label">Services</div>
                        <div className="dropdown">
                            <div className="dropdown-label">Works</div>
                            <ul className="dropdown-content">
                                <li>Default</li>
                                <li>Portfolio Grid</li>
                            </ul>
                        </div>
                        <div className="dropdown-label">Pricing</div>
                        <div className="dropdown-label">Blog</div>
                    </div>
                    <div className="header-btn">
                        <button>Start a Project</button>
                    </div>
                </div>
            </header>
        </>

    );
};

export default Header;