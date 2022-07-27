
import React from 'react'
import { makeStyles } from '@material-ui/core';
import MediaCard from './ImageCardHome';
import workData from '../staticData/workData';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]:{
      flexDirection: 'column',
    }
    
  },
 
}),{index: 1})

function HomeContent() {
 const classes = useStyles();
 
  return(
    <div className={classes.root} id="work">
      <MediaCard workData={workData[0]} />
      <MediaCard workData={workData[1]} />
    </div>
  )
}

export default HomeContent
  