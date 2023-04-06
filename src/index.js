import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NewTaskForm from './NewTaskForm/NewTackForm';
import TaskList from './TaskList/TaskList';
import Footer from './Footer/Footer';

class App extends React.Component {
  state = {
    data: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch')
    ],
    filter: 'all'
  }

  createTodoItem(value) {
    return {
      value,
      done: true,
      id: Math.random()*10,
      active: true,
    }
  }
  
  toggleDone = (id) => {
    this.setState(({data}) => {

      const idx = data.findIndex(el => el.id == id)
      const oldItem = data[idx]
      let newItem = {...oldItem, done: !oldItem.done}

      const bef = data.slice(0,idx)
      const aft = data.slice(idx+1)

      return {
        data : [...bef,newItem,...aft]
      }
    })
  }
  

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ data }) => {

      const newArr = [
        ...data,
        newItem
      ]

      return {
        data: newArr
      }
    })

  };

  deleteTask = (id) => {
    this.setState(({ data }) => {
      const idx = data.findIndex((el) => el.id === id);

      const newArray = [
        ...data.slice(0, idx),
        ...data.slice(idx + 1)
      ];

      return {
        data: newArray
      };
    });
  };

  filterAll = () => {
    this.setState(
      {filter: 'all'}
    )
  }

  filterActive = () => {
    this.setState(
      {filter: 'Active'}
    )
  }

  filterCompleted = () => {
    this.setState(
      {filter: 'Completed'}
    )
  }

  clearData = () => {
    this.setState({data : []})
  }



  render() {
    let count = this.state.data.filter(el => el.done).length

    const {filter,data} = this.state

    let sortData

    if(filter == 'all'){
      sortData = data
    } 
    else if(filter == 'Active') {
      sortData = data.filter(el => el.done === true)
    } 
    else if(filter == 'Completed'){
      sortData = data.filter(el => el.done === false)
    }

    return (
      <div>
        <NewTaskForm addTask = {this.addTask} onItemAdded={this.addItem}/>
        <div className='main'>
          <TaskList 
          todos={sortData}
          onDeleted = {this.deleteTask}
          toggleDone = {this.toggleDone}
          toggleCompleted = {this.toggleCompleted}
          />
        </div>
        <Footer 
        count = {count}
        filter = {this.state.filter}
        onToggleFilter = {this.toggleFilter}
        filterAll = {this.filterAll}
        filterActive = {this.filterActive}
        filterCompleted = {this.filterCompleted}
        clearData = {this.clearData}
        />
      </div>
      )
  }
}

const root = ReactDOM.createRoot(document.querySelector('.todoapp'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);