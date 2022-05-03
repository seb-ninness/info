import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToTeam, removeFromTeam } from '../actions'

function FootyPlayer(props) {
   const { name, id, position} = props.player
   const Team = useSelector(state => state.team)
   const dispatch = useDispatch()
   const thisTeam = Team.filter((player) => player.position === position )
  

   const addPlayer = (e) => {
    e.preventDefault()
    const playerInTeamIndex = Team.findIndex(player => player.id === id)
    const PositionFull = thisTeam.length < 3
    const DefPositionFull = thisTeam.length < 4
    const GoalieInGoal = thisTeam.length < 1
    console.log(GoalieInGoal)
    if (playerInTeamIndex == -1 ){
      if (position !== 'Defence' && position !== 'Keeper' && PositionFull ){
        dispatch(addToTeam(id, name, position))
      }
      else if (position === 'Defence' && DefPositionFull){
        dispatch(addToTeam(id, name, position))
      }
      else if (position === 'Keeper' && GoalieInGoal ){
        dispatch(addToTeam(id, name, position))
      }
      else {
        alert('Mate we are playing 4-3-3 you have too many players in that positon!')
      }
   }
   else {
     alert('This player is already in your team!')
   }
  }
  
  const removePlayer = (e) => {
    e.preventDefault()
    dispatch(removeFromTeam(id))
  }

  return(
      <div className='player'>
        <h4>{name}</h4>
        <div className='button-container'>
          <a className="add-button" onClick={addPlayer}><img src='Images/addition.png'></img></a>
          <a className="minus-button" onClick={removePlayer}><img src='Images/minus-button.png'></img></a>
        </div>
      </div>
      
  )
}

export default FootyPlayer