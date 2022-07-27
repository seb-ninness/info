import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 425,
    backgroundColor: 'rgba(0,0,0,0.5)',
    margin: "20px",
    index: 1,
  },
  media: {
    height: 450,
  },
  title: {
    fontFamily: 'bebas neue',
    color: 'white',
    fontSize: '2rem', 
  },
}))

export default function MediaCard({ workData, checked }) {
  const classes = useStyles()

  return (
  
      
        <div className='transform-card'> 
          <Card onClick={ () =>  window.location.href=workData.link} className={classes.root} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="220"
              image={workData.imageURL}
              alt="green iguana"
            />
            <CardContent backgroundColor='transparent' fontFamily='Bebas-Neue'>
            <Typography className={classes.title}>
                {workData.title}
              </Typography>
              <Typography variant="body2" color="white">
                {workData.desc}
              </Typography>
            </CardContent>
          </Card>
        </div>
    
    
  );
}

  