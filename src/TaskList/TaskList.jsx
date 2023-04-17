/* eslint-disable import/order */
import React from 'react'
import PropTypes, { arrayOf } from 'prop-types'
import Task from '../Task/Task'
import './TaskList.css'
/* eslint-enable import/order */

const TaskList = ({ todos, onDeleted, toggleDone, filter }) => {
  let newDone = filter == 'Active' ? 1 : 0

  let elements = todos.map((item) => {
    return (
      <Task
        toggleCompleted={() => onDeleted(item.id)}
        value={item.value}
        key={item.id}
        done={item.done}
        toggleDone={() => toggleDone(item.id)}
        sort={newDone}
      />
    )
  })

  return <ul className="todo-list">{elements}</ul>
}

TaskList.defaultProps = {
  onDeleted: () => {},
  toggleDone: () => {},
  filter: 'all',
}
TaskList.propTypes = {
  onDeleted: PropTypes.func,
  toggleDone: PropTypes.func,
  filter: PropTypes.string,
  todos: arrayOf(PropTypes.object).isRequired,
}

export default TaskList
