import { useState, useEffect } from 'react'
import Confetti from 'react-confetti'
import logo from './55.gif'
import './App.css'

function App() {
  const [count, setCount] = useState(getRandomNumber())
  const [clicks, setClicks] = useState(0)
  const [stop, setStop] = useState(false)

  useEffect(() => {
    if (clicks === 5 && count !== 55) {
      setStop(true)
    } 
  }, [count, clicks])

  function startOver() {
    setCount(getRandomNumber())
    setClicks(0)
    setStop(false)
  }

  function getRandomNumber() {
    let startNumber = Math.floor(Math.random() * 100)
    return startNumber
  }

  function addOne() {
    let newNumber = count + 1
    setCount(newNumber)
    let newClicks = clicks + 1
    setClicks(newClicks)
  }

  function addFive() {
    let newNumber = count + 5
    setCount(newNumber)
    let newClicks = clicks + 1
    setClicks(newClicks)
  }

  function subtractOne() {
    let newNumber = count - 1
    setCount(newNumber)
    let newClicks = clicks + 1
    setClicks(newClicks)
  }

  function subtractFive() {
    let newNumber = count - 5
    setCount(newNumber)
    let newClicks = clicks + 1
    setClicks(newClicks)
  }

  function timesTwo() {
    let newNumber = count * 2
    setCount(newNumber)
    let newClicks = clicks + 1
    setClicks(newClicks)
  }

  function timesThree() {
    let newNumber = count * 3
    setCount(newNumber)
    let newClicks = clicks + 1
    setClicks(newClicks)
  }

  function divideByTwo() {
    let newNumber = Math.round(count / 2)
    setCount(newNumber)
    let newClicks = clicks + 1
    setClicks(newClicks)
  }

  function divideByThree() {
    let newNumber = Math.round(count / 3)
    setCount(newNumber)
    let newClicks = clicks + 1
    setClicks(newClicks)
  }

  return (
    <>
      <span><a href="https://mattbuse.github.io/Portfolio_Page/">HOME</a></span>
      <span><a href="https://mattbuse.github.io/Portfolio_Page/JS-Projects/Projects/projects.html">PROJECTS</a></span>
      <h2>The Game of Fifty-Five</h2>
      <p>Use the buttons to get the number below to 55</p>
      <p>But you have to get there in under 5.5 clicks. Don't go too fast!</p>
      <hr></hr>
      {count === 55 && <Confetti />}
      {count === 55 && <img src={logo} />}
      {count === 55 && <h2>You won the game! 😎</h2>}
      {stop && <h2>Sorry, you lost the game 🙁</h2>}
      {count === 55 || <h1>{count}</h1>}
      <button onClick={addOne} disabled={stop}>+ 1</button>
      <button onClick={addFive} disabled={stop}>+ 5</button>
      <button onClick={subtractOne} disabled={stop}>- 1</button>
      <button onClick={subtractFive} disabled={stop}>- 5</button>
      <button onClick={timesTwo} disabled={stop}>× 2</button>
      <button onClick={timesThree} disabled={stop}>× 3</button>
      <button onClick={divideByTwo} disabled={stop}>÷ 2</button>
      <button onClick={divideByThree} disabled={stop}>÷ 3</button>
      <hr></hr>
      <h3>Clicks: {clicks}</h3>
      <hr></hr>
      <button onClick={startOver}>Start Over</button>
    </>
  )
}

export default App
