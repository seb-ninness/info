
import React from 'react'
import { makeStyles } from '@material-ui/core';
import MediaCard from './ImageCardHome';
import workData from '../staticData/workData';
import useWindowPosition from '../hook/useWindowPosition';

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

}))

function HomeContent() {
 const classes = useStyles();
 const checked = useWindowPosition('header');
  return(
    <div className={classes.root} id="work">
      <MediaCard workData={workData[0]} checked={checked}/>
      <MediaCard workData={workData[1]} checked={checked}/>
    </div>
  )
}

export default HomeContent
  