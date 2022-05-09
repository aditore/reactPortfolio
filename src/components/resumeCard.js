import React from "react";

function ResumeCard(props) {
    return(
        <div className="resumeCardDiv col-4">
            <div className="resumeCard">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <br></br>
                <img src={props.image} alt={props.alt} className="cardImage card-image" />
                <div className="resumeLink">
                    <a className="btn btn-danger" href={props.pdf} target="_blank" rel="noreferrer">{props.title}</a>
                </div>
            </div>
        </div>
    )
}

export default ResumeCard;