import React from "react";
import { projData } from "../constants/projects"
import ProjectCard from "./myWorkCard";

function MyWork(props) {
    return (
        <section className="myWorkSection">
            <div className="projectDiv">
                {
                    projData.map((project, index) =>
                        <ProjectCard key={index} {...project} />
                    )
                }
            </div>
        </section>
    )
}

export default MyWork;