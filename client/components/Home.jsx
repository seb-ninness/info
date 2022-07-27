import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Collapse, CssBaseline, IconButton } from '@material-ui/core';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { useEffect, useState } from 'react'
import HomeContent from './HomeContent';
import { Link as Scroll } from 'react-scroll'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${'Images/welly.jpg'})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  goDown: {
    color: 'black',
    fontSize: '4vw'
  }
}))

 // turn into a global state
function Home() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false)

  useEffect( () => {
    setChecked(true);
  },[])

  

  return(
  <div className={classes.root} id='header'>
    <CssBaseline />
    <Collapse orientation='horizontal' in={checked}
    { ... (checked ? { timeout: 1000 } : {})}>
      <div className='Home'>
        <h1>Full Stack Web Development</h1>
        <Scroll to="work" smooth={true}>
          <IconButton>
              <KeyboardDoubleArrowDownIcon className={classes.goDown} />
          </IconButton>
        </Scroll>
      </div>
     </Collapse>
     <HomeContent />
  </div>
  )
}

export default Home
  