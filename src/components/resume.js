import React from "react";
import resumes from "../constants/resume.json"
import ResumeCard from "./resumeCard";

function ResumePage(props) {
    return (
        <section className="resumeSection">
            <div className="skills col-lg-3 col-xs-12">
                <h3 className="resumeTitle">My Proficiencies</h3>
                <ul className="list-group">
                    <li className="list-group-item">JavaScript</li>
                    <li className="list-group-item">HTML5</li>
                    <li className="list-group-item">node.js</li>
                    <li className="list-group-item">CSS3</li>
                    <li className="list-group-item">MySQL</li>
                    <li className="list-group-item">MongoDB</li>
                    <li className="list-group-item">React</li>
                </ul>
            </div>
            <div className="resumeDiv col-lg-8 col-xs-12">
                {
                    resumes.map((resume, index) =>
                        <ResumeCard key={index} {...resume} />
                    )
                }
            </div>
        </section>
    )
}

export default ResumePage;