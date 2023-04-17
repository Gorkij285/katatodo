import React from 'react'
import PropTypes from 'prop-types'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import './Task.css'
// eslint-disable-next-line no-unused-vars
import { isThisHour } from 'date-fns'

const Span = (prop) => {
  return <span className="description">{prop.value}</span>
}

class Task extends React.Component {
  state = {
    dt: Date.now(),
    time: 0,
    intervalId: null,
  }
  static propTypes = {
    value: PropTypes.string,
  }

  handleClick = () => {
    const intervalId = setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time + 1,
      }))
    }, 1000)
    this.setState({ intervalId })
  }

  handleStart = () => {
    if (this.state.intervalId) return
    const intervalId = setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time + 1,
      }))
    }, 1000)
    this.setState({ intervalId })
  }

  handlePause = () => {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId)
      this.setState({ intervalId: null })
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  render() {
    const { value, toggleDone, toggleCompleted, done } = this.props
    const { time } = this.state

    let classNames = ''

    if (!done) {
      classNames += 'completed'
    }

    let result = formatDistanceToNow(new Date(this.state.dt), { includeSeconds: true }, { addSuffix: true })

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
            <button className="timerButOne" onClick={this.handleStart}>
              Start
            </button>
            <button className="timerButTwo" onClick={this.handlePause}>
              Pause
            </button>
          </div>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={toggleCompleted}></button>
        </div>
      </li>
    )
  }
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
