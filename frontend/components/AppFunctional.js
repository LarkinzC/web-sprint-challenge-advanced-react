import React, { useState } from 'react'

// Suggested initial states
const initialMessage = ''
const initialEmail = ''
const initialSteps = 0
const initialIndex = 4 // the index the "B" is at

export default function AppFunctional(props) {
  const [ steps, setSteps] = useState(initialSteps)
  const [ current, setCurrent] = useState(initialIndex)
  const [ email, setEmail ] = useState(initialEmail)
  const [ message, setMessage ] = useState(initialMessage)
  // THE FOLLOWING HELPERS ARE JUST RECOMMENDATIONS.
  // You can delete them and build your own logic from scratch.

  function getXY() {
    // It it not necessary to have a state to track the coordinates.
    // It's enough to know what index the "B" is at, to be able to calculate them.
    const gridSize = 3;
    const x = (current % gridSize) +1;
    const y = Math.floor(current / gridSize) +1;
    
    return { x, y }; 
  }

  function getXYMessage() {
    // It it not necessary to have a state to track the "Coordinates (2, 2)" message for the user.
    // You can use the `getXY` helper above to obtain the coordinates, and then `getXYMessage`
    // returns the fully constructed string.
    const {x, y} = getXY()
    console.log({x, y})
    return `(${x}, ${y})`
  }

  function reset() {
    // Use this helper to reset all states to their initial values.
    setCurrent(initialIndex)
    setSteps(0)
  }

  function getNextIndex(direction) {
    // This helper takes a direction ("left", "up", etc) and calculates what the next index
    // of the "B" would be. If the move is impossible because we are at the edge of the grid,
    // this helper should return the current index unchange
    const {x, y} = getXY()
    const leftVal = -1
    const rightVal = +1
    const downVal = +3
    const upVal = -3
    let next = current
    console.log(next, direction)
      if(direction === 'left' && x > 1) {
     return next += leftVal
    } else if (direction === 'right' && x < 3) {
      return next += rightVal
    } else if (direction === 'up' && y > 1) {
      return next += upVal
    } else if (direction === 'down' && y < 3) {
      return next += downVal
    } else {
      return current 

  }
}

  function move(evt) {
    // This event handler can use the helper above to obtain a new index for the "B",
    // and change any states accordingly.
    evt.preventDefault()
    const direction = evt.target.id.toLowerCase()
    const nextIndex = getNextIndex(direction)
    console.log(evt.target.id)
    if (nextIndex !== current) {
      setCurrent(nextIndex)
      setSteps(steps + 1)
      setMessage(initialMessage)
    } else {
      setMessage(`you can't go ${direction}`)
    }

  }

  function emailInput(e) {
    e.preventDefault()
    const value = e.target.value
    setEmail(value) 
   }


  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates {getXYMessage()}</h3>
        <h3 id="steps">You moved {steps} times</h3>
      </div>
      <div id="grid">
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
            <div key={idx} className={`square${idx === current ? ' active' : ''}`}>
              {idx === current ? 'B' : null}
            </div>
          ))
        }
      </div>
      <div className="info">
        <h3 id="message">{ message }</h3>
      </div>
      <div id="keypad">
        <button onClick={move} id="left">LEFT</button>
        <button onClick={move} id="up">UP</button>
        <button onClick={move} id="right">RIGHT</button>
        <button onClick={move} id="down">DOWN</button>
        <button onClick={reset} id="reset">reset</button>
      </div>
      <form>
        <input value={email} id="email" type="email" placeholder="type email" onChange={emailInput}></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
