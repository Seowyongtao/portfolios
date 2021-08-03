import React from "react";
import "./HeadContainer.css";

function HeadContainer (){
    return (
        <div className="head-container">
            <div className="icon-container">
                <a href="https://github.com/Seowyongtao"><i class="fab fa-github github fa-2x"></i></a>
                <a href="https://www.linkedin.com/in/seow-yong-tao-aa0049162/"><i class="fab fa-linkedin linkedin fa-2x"></i></a>
                <a href="https://www.instagram.com/seowtao/"><i class="fab fa-instagram insta fa-2x"></i></a>
            </div>
            <div className="container">
                <h1>Hi there, I'm Tao.</h1>
                <h1><span className="software">Software</span> Developer + <span className="marketing">Marketing</span> = ME,</h1>
                <h1>Nice to meet you.</h1>
            </div>
            <div className="img-frame"></div>
            <div className="introduction-container row">
                <div className="introduction-content col-lg-6">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor nec feugiat nisl pretium fusce id velit ut.
                    <br></br>  
                    <br></br> 
                    <br></br>                             
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor nec feugiat nisl pretium fusce id velit ut. </p>
                </div>
                <div className="introduction-content col-lg-6">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor nec feugiat nisl pretium fusce id velit ut.</p>
                </div>
                
            </div>
   
        </div>
    );
    
}

export default HeadContainer;