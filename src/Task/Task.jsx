import React from "react";
import PropTypes from "prop-types";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import './Task.css'
import { isThisHour } from "date-fns";

const Span = (prop) => {
  return <span className="description">{prop.value}</span>
}

class Task extends React.Component{
  state = {
    dt: Date.now()
  }
  static propTypes = {
    value: PropTypes.string
  }
  
  render() {
    const {value,toggleDone, toggleCompleted, done} = this.props
    let classNames = ''

    if(!done){
      classNames += 'completed'
    }

    

    let result = formatDistanceToNow(
      new Date(this.state.dt),
      {includeSeconds: true},
      {addSuffix: true}
    )

    return(
        <li className={classNames}>
            <div className="view">
            <input className="toggle" type="checkbox" onClick={toggleDone}/>
              <label>
                <Span value={value}/>
                <span className="created">{result}</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy" onClick={toggleCompleted}></button>
            </div>
        </li> 
    ) 
  }
}

Task.defaultProps = {
  toggleCompleted: () => {},
  toggleDone: () => {},
  value: 'hello !!!',
  done: true
}

Task.propTypes = {
  toggleCompleted: PropTypes.func,
  toggleDone: PropTypes.func,
  value: PropTypes.string,
  done: PropTypes.bool,
};

export default Task