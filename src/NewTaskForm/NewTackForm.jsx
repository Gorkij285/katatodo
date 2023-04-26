import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types'
import './NewTackForm.css'

function NewTaskForm({ onItemAdded }) {
  const [label, setLabel] = useState('')

  const onLabelChange = (e) => {
    const value = e.target.value
    setLabel(value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (label.length > 0) onItemAdded(label)
    setLabel('')
  }

  return (
    <form className="header" onSubmit={onSubmit}>
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onChange={onLabelChange}
        value={label}
      />
    </form>
  )
}

export default NewTaskForm
