import React from "react";
import "./Footer.css";


function Footer(){
    return(
            <footer className="footer-container mt-auto">     
                <h1 style={{display:"inline-block"}}>TAO.</h1>
                <div className="icon-container">
                    <a href="https://github.com/Seowyongtao"><i class="fab fa-github github fa-2x"></i></a>
                    <a href="https://www.linkedin.com/in/seow-yong-tao-aa0049162/"><i class="fab fa-linkedin linkedin fa-2x"></i></a>
                    <a href="https://www.instagram.com/seowtao/"><i class="fab fa-instagram insta fa-2x"></i></a>
                </div>
            </footer>
        
    );
};

export default Footer;