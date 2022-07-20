import React from 'react'
import { BottomNavigation } from '@material-ui/core';
import { BottomNavigationAction } from '@material-ui/core';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

function Footer() {

  

  return (
    <BottomNavigation  >
      <BottomNavigationAction label="Twitter" icon={<TwitterIcon />} />
      <BottomNavigationAction label="Github" icon={< GitHubIcon  />} />
      <BottomNavigationAction label="Contact" icon={< PhoneEnabledIcon  />} />
    </BottomNavigation>
            )

}

export default Footer