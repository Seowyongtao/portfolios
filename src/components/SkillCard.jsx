import React from "react";
import "./SkillCard.css";

function SkillCard(){
    return(
        <div className="row skill-card-container">
            <div className="skill-col col-lg-6">
                <div className="skill-card software">
                    <h1>Software Development</h1>
                    <p><span>○</span> Javascript</p>
                    <p><span>○</span> React</p>
                    <p><span>○</span> Nodejs </p>
                    <p><span>○</span> Sql</p>
                    <p><span>○</span> MongoDB</p>
                </div>
                
            </div>
            <div className="skill-col col-lg-6">
                <div className="skill-card marketing">
                    <h1>Marketing</h1>
                    <p><span>○</span> Facebook marketing</p>
                    <p><span>○</span> Facebook ads</p>
                    <p><span>○</span> Chinese copywriting for landing page</p>
                </div>
                
            </div>
        </div>
    );

};

export default SkillCard;