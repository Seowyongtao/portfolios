import React from "react";
import "./SectionTitle.css"

function SectionTitle(props){
    return (
        <div className="row section-title">
            <div className="content col-lg-8">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
            </div>
        </div>
    );
}

export default SectionTitle;