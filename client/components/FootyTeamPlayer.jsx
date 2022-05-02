import React from 'react'


function FootyTeamPlayer(props) {
   const name = props.player.name
   const position = props.player.position
  return(
      <div className='player'>
        <h3>{name}</h3>
        <h4>{position}</h4>
      </div>
  )
}

export default FootyTeamPlayer