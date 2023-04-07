// eslint-disable-next-line import/newline-after-import
import React from 'react'
// eslint-disable-next-line import/newline-after-import
import PropTypes from 'prop-types'
// eslint-disable-next-line import/newline-after-import
import './Footer.css'
// eslint-disable-next-line import/newline-after-import
import TasksFilter from '../TasksFilter/TasksFilter'

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
