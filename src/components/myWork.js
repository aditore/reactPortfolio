import React, { useState } from "react";
import { projData } from "../constants/projects";
import { projDataI } from "../constants/inProgress";
import ProjectCard from "./myWorkCard";

function MyWork(props) {
    const [inProgress, setInProgress] = useState(false);

    const handleSwitch = () => {
        if (inProgress === false) {
            setInProgress(true);
        } else {
            setInProgress(false);
        }
    };

    console.log(inProgress);
    return (
        <section className="myWorkSection">
            

            {inProgress === false ? (
                <>
                    <h1>Completed Projects</h1>
                    <div className="projectDiv"> 
                        {
                            projData.map((project, index) =>
                            <ProjectCard key={index} {...project} />
                            )
                        }
                    </div>
                    <button className="resumeBtn btn btn-danger" onClick={handleSwitch}>Click for In Progress Work</button>
                </>
            ) : (
                <>
                    <h1>In Progress</h1>
                    <div className="projectDiv">
                        {
                            projDataI.map((project, index) =>
                            <ProjectCard key={index} {...project} />
                            )
                        }
                    </div>
                    <button className="resumeBtn btn btn-danger" onClick={handleSwitch}>Click for Completed Work</button>
                </>
            )}
        </section>
    )
}

export default MyWork;