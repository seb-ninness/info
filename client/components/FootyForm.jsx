import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { savePlayerThunk, } from '../actions/index'

function FootyForm () {
  const dispatch = useDispatch()
  const [player, setPlayer] = useState({
    name: '',
    position: 'Attack',
  })

  function changeHandler(e) {
    setPlayer({
      ...player,
      [e.target.id]: e.target.value  
  })
}
 
  function submitHandler (e) {
    e.preventDefault()
    dispatch(savePlayerThunk(player))
    setPlayer({
    name: '',
    position: 'Attack',
    })
  }

  return (
    <form onSubmit={submitHandler}>
        <h1 className='form-heading'>Add your own players</h1>
        <div className='form-wrapper'>
        <div className='text-container'>
          <label htmlFor="name">
            Name:
            <input
              required
              id='name' name='name' type='text' value={player.name} onChange={changeHandler}
              placeholder="Footballer"
            />
          </label>
        </div>
        <div className='dropdown-container'>
          <label htmlFor='position'>
            Position:
          <select id="position" name="position" onChange={changeHandler} value={player.position}>
            <option  value='Attack'>Attack</option>
            <option value='Midfield'>Midfield</option>
            <option value='Defence'>Defence</option>
            <option value='Keeper'>Keeper</option>
          </select></label>
        </div>
        <div className='submit-container'>
          <input type="submit" value="Submit" />
        </div>
        </div>
    </form>
  )
}

export default FootyForm