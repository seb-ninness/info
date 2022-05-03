import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FootyPlayer from './FootyPlayer'
import FootyForm from './FootyForm'
import FootyTeamPlayer from './FootyTeamPlayer'
import { getPlayersThunk } from '../actions/index'

function Footy() {
  const dispatch = useDispatch()
  const footyPlayers = useSelector(state => state.footy)
  const currentTeam = useSelector(state => state.team)
  const ATTPlayers = footyPlayers.filter((player) => player.position === 'Attack' )
  const MIDPlayers = footyPlayers.filter((player) => player.position === 'Midfield' )
  const DEFPlayers = footyPlayers.filter((player) => player.position === 'Defence' )
  const Goalie = footyPlayers.filter((player) => player.position === 'Keeper' )
  const ATTTeamPlayers = currentTeam.filter((player) => player.position === 'Attack' )
  const MIDTeamPlayers = currentTeam.filter((player) => player.position === 'Midfield' )
  const DEFTeamPlayers = currentTeam.filter((player) => player.position === 'Defence' )
  const GoalkeeperTeam = currentTeam.filter((player) => player.position === 'Keeper' )

  console.log(ATTTeamPlayers)
  useEffect(() => {
    dispatch(getPlayersThunk())
  }, [])

  return(
  <>
  <div className='footy-fan'>
    <h3>Attackers</h3>
      <div className='attackers'>
        
    {ATTPlayers.map( player => <FootyPlayer key={player.id} player={player} />)}
      </div>
      <h3>Midfielders</h3>
    <div className='midfielders'>
      {MIDPlayers.map( player => <FootyPlayer key={player.id} player={player} />)}
    </div>
    <h3>Defenders</h3>
    <div className='defenders'>
      {DEFPlayers.map( player => <FootyPlayer key={player.id} player={player} />)}
    </div>
    <h3>Goal Keepers</h3>
    <div className='defenders'>
      {Goalie.map( player => <FootyPlayer key={player.id} player={player} />)}
    </div>
    <div className='footy-form'>
      <FootyForm />
    </div>
    
  </div>
  <div className='team-selection'>
    <h3 className='team-header'>Your lineup:</h3>
      <div className='team-att'>
         {ATTTeamPlayers.map( player => <FootyTeamPlayer key={player.id} player={player}/>) }
      </div>
      <div className='team-mid'>
        {MIDTeamPlayers.map( player => <FootyTeamPlayer key={player.id} player={player}/>) }
      </div>
      <div className='team-def'>
        {DEFTeamPlayers.map( player => <FootyTeamPlayer key={player.id} player={player}/>) }
      </div>
      <div className='team-def'>
        {GoalkeeperTeam.map( player => <FootyTeamPlayer key={player.id} player={player}/>) }
      </div>
  </div>
  </>
  )
}

export default Footy