import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToTeam } from '../actions'

function FootyPlayer(props) {
   const { name, id, position, img} = props.player
   const Team = useSelector(state => state.team)
   const dispatch = useDispatch()
   
   
   const addPlayer = (e) => {
    e.preventDefault()
    const playerInTeamIndex = Team.findIndex(player => player.id === id)
    if (playerInTeamIndex == -1 ){
      dispatch(addToTeam(id, name, position))
   }
   else {
     alert('This player is already in your team!')
   }
  }

  return(
      <div className='player'>
        <h3>{name}</h3>
        <a onClick={addPlayer} className="cart-link">+</a>
      </div>
      
  )
}

export default FootyPlayer