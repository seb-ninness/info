import React from 'react'


function FootyTeamPlayer(props) {
   const name = props.player.name
   const position = props.player.position
   const image = props.player.img
  return(
      <div className='player'>
        <img className='player-image' src={image}></img>
        <h3 className='team-player-name'>{name}</h3>
        <h4 className='team-position'>{position}</h4>
      </div>
  )
}

export default FootyTeamPlayer