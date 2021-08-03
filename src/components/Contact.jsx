import React from "react";
import "./Contact.css";
import SectionTitle from "./SectionTitle";

function Contact(){
    return(
        <div className="contact-container">
            <SectionTitle 
                title="Let's Build Something Together" 
                content="Here are the projects that I've dedicated my time to. After building my first projects, I've been addicted to it ! It feels like a collection habit, don't you feel the same ?"
            />
            <a href="https://www.w3schools.com"><h6>say hello <span>&#62;</span> </h6></a>
        </div>
    )
}

export default Contact;