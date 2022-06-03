import React from 'react';
import { projData } from '../constants/projects';

function ProjectCard(props) {

    return (
        <div className="projectCardDiv col-lg-9 col-xs-12">
            <div className="projectCard">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <br></br>
                <img src={process.env.PUBLIC_URL + props.image} alt={props.alt} className="cardImage col-xs-10 card-image" />
                <div className="linkContainer">
                    <a className="btn btn-success" href={props.deployed} target="_blank" rel="noreferrer">Deployed Site</a>
                    <a className="btn btn-warning" href={props.repo} target="_blank" rel="noreferrer">Link to Github Repository</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;