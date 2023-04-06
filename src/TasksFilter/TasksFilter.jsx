import React from "react";
import PropTypes from "prop-types";
import './TasksFilter.css'

const TasksFilter = ({filterAll,filterActive,filterCompleted}) => {

 

    return (
        <ul className="filters">
            <li>
              <button onClick={filterAll}> All </button>
            </li>
            <li>
              <button onClick={filterActive}>Active</button>
            </li>
            <li>
              <button onClick={filterCompleted}>Completed</button>
            </li>
        </ul> 
    )
}

TasksFilter.defaultProps = {
  filterAll: () => {},
  filterActive: () => {},
  filterCompleted: () => {},
}
TasksFilter.propTypes = {
  filterAll: PropTypes.func,
  filterActive: PropTypes.func,
  filterCompleted: PropTypes.func,
};

export default TasksFilter