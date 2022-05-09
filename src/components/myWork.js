import React from "react";
import projects from "../constants/projects.json"
import ProjectCard from "./myWorkCard";

function MyWork(props) {
    return (
        <section className="myWorkSection">
            <div className="projectDiv">
                {
                    projects.map((project, index) =>
                        <ProjectCard key={index} {...project} />
                    )
                }
            </div>
        </section>
    )
}

export default MyWork;