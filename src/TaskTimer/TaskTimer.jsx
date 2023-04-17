import React from 'react'
import './TaskList.css'

export default TaskTimer = () => {
  const handleStart = () => {}

  const handlePause = () => {}

  return (
    <div>
      <div>{formatTime(timer)}</div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  )
}
