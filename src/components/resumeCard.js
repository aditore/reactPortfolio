import React from "react";
import generalPdf from '../constants/pdf/generalResume.pdf';
import technicalPdf from '../constants/pdf/technicalResume.pdf';

function ResumeCard(props) {
    return(
        <div className="resumeCardDiv col-lg-4 col-xs-12">
            <div className="resumeCard">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <br></br>
                <img src={process.env.PUBLIC_URL + props.image} alt={props.alt} className="cardImage card-image" />
                <div className="resumeLink">
                    {props.title === "General Resume" ? (
                        <a className="btn btn-danger" rel="noreferrer" href={generalPdf} target="_blank">{props.title}</a>
                    ) : (
                        <a className="btn btn-danger" rel="noreferrer" href={technicalPdf} target="_blank">{props.title}</a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ResumeCard;