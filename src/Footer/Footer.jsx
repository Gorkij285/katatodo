/* eslint-disable import/order */
import React from 'react'
import PropTypes from 'prop-types'
import './Footer.css'
import TasksFilter from '../TasksFilter/TasksFilter'
/* eslint-enable import/order */

const Footer = ({ count = 1, filterAll, filterActive, filterCompleted, clearData }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{count} items left</span>
      <TasksFilter
        filterAll={() => filterAll()}
        filterActive={() => filterActive()}
        filterCompleted={() => filterCompleted()}
      />
      <button className="clear-completed" onClick={() => clearData()}>
        Clear completed
      </button>
    </footer>
  )
}

Footer.propTypes = {
  filterAll: PropTypes.func,
  filterActive: PropTypes.func,
  filterCompleted: PropTypes.func,
}

export default Footer
