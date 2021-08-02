import React from "react";
import "./PortfolioCard.css";

function PortfolioCard(){
    return(
        <div className="row portfolio-card-container">
            <div className="portfolio-card col-lg-6">
                <div className="img-frame"></div>
                <h1>Project title</h1>
                <p>Here are the projects that I've dedicated my time to. After building my first projects, I've been addicted to it ! It feels like a collection habit, don't you feel the same ?</p>
                <a href="https://www.w3schools.com"><h6>view project <span>&#62;</span> </h6> </a>
            </div>     
            <div className="portfolio-card col-lg-6">
                <div className="img-frame"></div>
                <h1>Project title</h1>
                <p>Here are the projects that I've dedicated my time to. After building my first projects, I've been addicted to it ! It feels like a collection habit, don't you feel the same ?</p>
                <a href="https://www.w3schools.com"><h6>view project <span>&#62;</span> </h6></a>
            </div>   
        </div>
    );
}

export default PortfolioCard;