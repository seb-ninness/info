import React from 'react'
import { BottomNavigation } from '@material-ui/core';
import { BottomNavigationAction } from '@material-ui/core';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import { Link } from 'react-router-dom';
import {  makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'black',
    "&:hover": {
      color: 'grey'
    }
    
  },
}))

function Footer() {
  const classes = useStyles()
  
  

  return (
    
    <BottomNavigation >
      <BottomNavigationAction className={classes.root} onClick={ () =>  window.location.href='https://twitter.com/SebNinness'} label="Twitter" icon={<TwitterIcon />} />
      <BottomNavigationAction className={classes.root} onClick={ () =>  window.location.href='https://github.com/seb-ninness?tab=repositories'}  label="Github" icon={< GitHubIcon  />} />
       <BottomNavigationAction className={classes.root} label="Contact" icon={<Link to="/Contact">< PhoneEnabledIcon className={classes.root}  /></Link>} /> 
    </BottomNavigation>
    
   )

}

export default Footer