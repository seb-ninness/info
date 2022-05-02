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
      <h1 className='form-heading'>Add A player</h1>
        <label htmlFor="name">
          Name:
          <input
            required
            id='name' name='name' type='text' value={player.name} onChange={changeHandler}
            placeholder="Footballer"
          />
        </label>
        <label htmlFor='position'>
          Position:
        <select id="position" name="position" onChange={changeHandler} value={player.position}>
          <option  value='Attack'>Attack</option>
          <option value='Midfield'>Midfield</option>
          <option value='Defence'>Defence</option>
        </select></label>
        <input type="submit" value="Submit" />
    </form>
  )
}

export default FootyForm