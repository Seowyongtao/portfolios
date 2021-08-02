import React from "react";
import "./HeadContainer.css";

function HeadContainer (){
    return (
        <div className="head-container">
            <div>
                <a href="https://www.w3schools.com"><i class="fab fa-github github fa-2x"></i></a>
                <a href="https://www.w3schools.com"><i class="fab fa-linkedin linkedin fa-2x"></i></a>
                <a href="https://www.w3schools.com"><i class="fab fa-instagram insta fa-2x"></i></a>
            </div>
            <div className="container">
                <h1>Hi there, I'm Tao.</h1>
                <h1><span>Software</span> Developer + <span>Marketing</span> = ME,</h1>
                <h1>Nice to meet you.</h1>
            </div>
            <div className="img-frame"></div>
   
        </div>
    );
    
}

export default HeadContainer;