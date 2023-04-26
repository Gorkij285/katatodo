import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import './Task.css'
// eslint-disable-next-line no-unused-vars
import { isThisHour } from 'date-fns'

const Span = (prop) => {
  return <span className="description">{prop.value}</span>
}

function Task({ value, toggleDone, toggleCompleted, done }) {
  // eslint-disable-next-line no-unused-vars
  const [dt, setDt] = useState(Date.now())
  const [time, setTime] = useState(0)
  const [intervalId, setIntervalId] = useState(null)

  useEffect(() => {
    return () => clearInterval(intervalId)
  }, [])

  const handleStart = () => {
    if (!intervalId) {
      const intervalId = setInterval(() => {
        setTime((val) => val + 1)
      }, 1000)
      setIntervalId(intervalId)
    }
  }

  const handlePause = () => {
    if (intervalId) {
      clearInterval(intervalId)
      setIntervalId(null)
    }
  }

  let classNames = ''

  if (!done) {
    classNames += 'completed'
  }

  let result = formatDistanceToNow(new Date(dt), { includeSeconds: true }, { addSuffix: true })

  let watch = time ? <span className="timer">{formatTime(time)}</span> : <span className="timer">{'00:00:00'}</span>

  return (
    <li className={classNames}>
      <div className="view">
        <input className="toggle" type="checkbox" onClick={toggleDone} />
        <label>
          <Span value={value} />
          <span className="created">{result}</span>
        </label>
        <div>
          {watch}
          <button className="timerButOne" onClick={handleStart}>
            Start
          </button>
          <button className="timerButTwo" onClick={handlePause}>
            Pause
          </button>
        </div>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={toggleCompleted}></button>
      </div>
    </li>
  )
}
function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600)
  seconds = seconds % 3600
  const minutes = Math.floor(seconds / 60)
  seconds = seconds % 60
  const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(
    seconds
  ).padStart(2, '0')}`
  return formattedTime
}

Task.propTypes = {
  value: PropTypes.string,
}

Task.defaultProps = {
  toggleCompleted: () => {},
  toggleDone: () => {},
  value: 'hello !!!',
  done: true,
}

Task.propTypes = {
  toggleCompleted: PropTypes.func,
  toggleDone: PropTypes.func,
  value: PropTypes.string,
  done: PropTypes.bool,
}

export default Task
