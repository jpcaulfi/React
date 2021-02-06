import React from "react";
import {Link} from "react-router-dom";
import "./App.css";

function Canopy() {
    return (
        <body>
            <link rel="stylesheet" href="./App.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"/>
            <header>
                <div className="quick-box-left">
                    <a href="/">
                        <p>Home</p>
                    </a>
                    <a href="/"><i class="fas fa-home"></i></a>
                    <a href="Resume_JosephCaulfield.pdf" target="_blank">
                        <p>Resume</p>
                    </a>
                    <a href="Resume_JosephCaulfield.pdf" target="_blank">
                        <i class="far fa-file-alt"></i>
                    </a>
                </div>
                <div className="nameplate">
                    <h3><strong>Portfolio of Works:</strong> Software Engineering</h3>
                    <h2>Mr. Joseph P. Caulfield</h2>
                    <img alt="" className="joe-img" src="headshot.jpg"></img>
                </div>
                <div className="quick-box-right">
                    <div className="linkedin">
                        <a class="social-list__link" href="https://www.linkedin.com/in/joecaulf/">
                            <p>LinkedIn</p>
                        </a>
                        <a class="social-list__link" href="https://www.linkedin.com/in/joecaulf/"><i class="fab fa-linkedin"></i></a>
                    </div>
                    <div className="github">
                        <a class="social-list__link" href="https://www.github.com/jpcaulfi">
                            <p>GitHub</p>
                        </a>
                        <a class="social-list__link" href="https://www.github.com/jpcaulfi"><i class="fab fa-github"></i></a>
                    </div>
                </div>            
            </header>
            <section className="portfolio-nav">
                <div className="projects">
                    <div className="project">
                        <Link to="/page2" className="project-link-clicked">
                            <img alt="" className="project-img-clicked" src="amazon.jpg"></img>
                        </Link>
                        <p className="project-label">Canopy</p>
                    </div>
                    <div className="project">
                        <Link to="/page3" className="project-link">
                            <img alt="" className="project-img" src="nyse.jpg"></img>
                        </Link>
                        <p className="project-label">Seaborn</p>
                    </div>
                    <div className="project">
                        <Link to="/page4" className="project-link">
                            <img alt="" className="project-img" src="coffee.png"></img>
                        </Link>
                        <p className="project-label">Herald</p>
                    </div>
                    <div className="project">
                        <Link to="/page5" className="project-link">
                            <img alt="" className="project-img" src="candles.jpg"></img>
                        </Link>
                        <p className="project-label">Aglorithm Trading</p>
                    </div>
                    <div className="project">
                        <Link to="/page6" className="project-link">
                            <img alt="" className="project-img" src="jupiter.png"></img>
                        </Link>
                        <p className="project-label">Jupiter</p>
                    </div>
                </div>
            </section>
            <section className="slide">
                <div className="slide-container">
                    <div className="placeholder-box">
                        <h3>Content goes here</h3>
                    </div>
                </div>
            </section>
            <section className="howitsmade">
                <h2 className="tools-title">Canopy <strong>built using the following:</strong></h2>
                <div className="tools">
                    <div className="tool">
                        <img alt="" className="tool-img" src="logo512.png"></img>
                        <p className="tool-title">React</p>
                    </div>                    
                    <div className="tool">
                        <img alt="" className="tool-img" src="java.png"></img>
                        <p className="tool-title">Java</p>
                    </div>
                    <div className="tool">
                        <img alt="" className="tool-img" src="aws.png"></img>
                        <p className="tool-title">Amazon</p>
                        <p className="tool-title">Web Services</p>
                    </div>
                    <div className="tool">
                        <img alt="" className="tool-img" src="chime.png"></img>
                        <p className="tool-title">Amazon</p>
                        <p className="tool-title">Chime</p>
                    </div>
                </div>
            </section>
        </body>
    )
}

export default Canopy;