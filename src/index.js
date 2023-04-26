// eslint-disable-next-line import/newline-after-import
import React, { useState } from 'react'
// eslint-disable-next-line import/newline-after-import
import ReactDOM from 'react-dom/client'

// eslint-disable-next-line import/newline-after-import
import './index.css'
// eslint-disable-next-line import/newline-after-import
import NewTaskForm from './NewTaskForm/NewTackForm'
// eslint-disable-next-line import/newline-after-import
import TaskList from './TaskList/TaskList'
// eslint-disable-next-line import/newline-after-import
import Footer from './Footer/Footer'

function App() {
  const [data, setData] = useState([
    createTodoItem('Drink Coffee'),
    createTodoItem('Make Awesome App'),
    createTodoItem('Have a lunch'),
  ])
  const [filter, setFilter] = useState('all')

  function createTodoItem(value) {
    return {
      value,
      done: true,
      id: Math.random() * 10,
      active: true,
    }
  }

  const toggleDone = (id) => {
    const idx = data.findIndex((el) => el.id == id)
    const oldItem = data[idx]
    let newItem = { ...oldItem, done: !oldItem.done }

    const bef = data.slice(0, idx)
    const aft = data.slice(idx + 1)

    setData([...bef, newItem, ...aft])
  }

  const addItem = (text) => {
    const newItem = createTodoItem(text)

    setData([...data, newItem])
  }

  const deleteTask = (id) => {
    const idx = data.findIndex((el) => el.id === id)
    setData([...data.slice(0, idx), ...data.slice(idx + 1)])
  }

  const filterAll = () => {
    setFilter('all')
  }

  const filterActive = () => {
    setFilter('Active')
  }

  const filterCompleted = () => {
    setFilter('Completed')
  }

  const clearData = () => {
    setData([])
  }

  let count = data.filter((el) => el.done).length

  let sortData

  if (filter == 'all') {
    sortData = data
  } else if (filter == 'Active') {
    sortData = data.filter((el) => el.done === true)
  } else if (filter == 'Completed') {
    sortData = data.filter((el) => el.done === false)
  }

  console.log(sortData)

  return (
    <div>
      <NewTaskForm onItemAdded={addItem} />
      <div className="main">
        <TaskList todos={sortData} onDeleted={deleteTask} toggleDone={toggleDone} />
      </div>
      <Footer
        count={count}
        filter={filter}
        filterAll={filterAll}
        filterActive={filterActive}
        filterCompleted={filterCompleted}
        clearData={clearData}
      />
    </div>
  )
}

const root = ReactDOM.createRoot(document.querySelector('.todoapp'))
root.render(<App />)
