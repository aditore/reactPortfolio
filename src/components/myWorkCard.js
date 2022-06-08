import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ProjectCard(props) {

    return (
        // <div className="projectCardDiv col-lg-9 col-xs-12">
        //     <div className="projectCard">
        //         <h5 className="card-title">{props.title}</h5>
        //         <p className="card-text">{props.description}</p>
        //         <br></br>
        //         <img src={process.env.PUBLIC_URL + props.image} alt={props.alt} className="cardImage col-xs-10 card-image" />
        //         <div className="linkContainer">
        //             <a className="btn btn-success" href={props.deployed} target="_blank" rel="noreferrer">Deployed Site</a>
        //             <a className="btn btn-warning" href={props.repo} target="_blank" rel="noreferrer">Link to Github Repository</a>
        //         </div>
        //     </div>
        // </div>
    
            <Card className="workCardMui" sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                className="workCardMuiImage"
                style={{ objectFit: "unset" }}
                alt={props.alt}
                image={process.env.PUBLIC_URL + props.image}
              />
              <CardContent className="workCardMuiText">
                <Typography gutterBottom variant="h5" component="div">
                  {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {props.description}
                </Typography>
              </CardContent>
              <CardActions className="workCardMuiButtons">
                <Button href={props.deployed} size="small">Deployed</Button>
                <Button href={props.repo} size="small">Repository</Button>
              </CardActions>
            </Card>
          );

}

export default ProjectCard;