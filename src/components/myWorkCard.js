import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ProjectCard(props) {




    return (
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