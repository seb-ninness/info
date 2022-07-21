import React from 'react'
import { BottomNavigation } from '@material-ui/core';
import { BottomNavigationAction } from '@material-ui/core';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import { Link } from 'react-router-dom';

function Footer() {
  
  

  return (
    
    <BottomNavigation>
      <BottomNavigationAction onClick={ () =>  window.location.href='https://twitter.com/SebNinness'} label="Twitter" icon={<TwitterIcon />} />
      <BottomNavigationAction onClick={ () =>  window.location.href='https://github.com/seb-ninness?tab=repositories'}  label="Github" icon={< GitHubIcon  />} />
       <BottomNavigationAction label="Contact" icon={<Link to="/Contact">< PhoneEnabledIcon  /></Link>} /> 
    </BottomNavigation>
    
   )

}

export default Footer