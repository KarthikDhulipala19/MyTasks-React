import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import CreateTask from '../CreateTask'
import TasksList from '../TasksList'

import './index.css'

const tagsList = [
  {optionId: 'HEALTH', displayText: 'Health'},
  {optionId: 'EDUCATION', displayText: 'Education'},
  {optionId: 'ENTERTAINMENT', displayText: 'Entertainment'},
  {optionId: 'SPORTS', displayText: 'Sports'},
  {optionId: 'TRAVEL', displayText: 'Travel'},
  {optionId: 'OTHERS', displayText: 'Others'},
]

class MyTasks extends Component {
  state = {
    taskInputValue: '',
    activeTaskId: tagsList[0].optionId,
    tasksList: [],
    activeTagId: '',
  }

  componentDidMount() {
    const storedTasks = localStorage.getItem('tasksList')

    if (storedTasks !== null) {
      this.setState({
        tasksList: JSON.parse(storedTasks),
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const {tasksList} = this.state

    if (prevState.tasksList !== tasksList) {
      if (tasksList.length === 0) {
        localStorage.removeItem('tasksList')
      } else {
        localStorage.setItem('tasksList', JSON.stringify(tasksList))
      }
    }
  }

  onChangeTaskInput = event => {
    this.setState({taskInputValue: event.target.value})
  }

  onChangeOption = event => {
    this.setState({activeTaskId: event.target.value})
  }

  onClickAddTask = event => {
    event.preventDefault()
    const {taskInputValue, activeTaskId} = this.state

    if (taskInputValue.trim() === '') {
      return
    }

    const taskObject = {
      id: uuidv4(),
      task: taskInputValue,
      tagId: activeTaskId,
    }

    this.setState(prevState => ({
      taskInputValue: '',
      activeTaskId: tagsList[0].optionId,
      tasksList: [...prevState.tasksList, taskObject],
    }))
  }

  onClickTagId = tag => {
    this.setState(prevState => ({
      activeTagId: prevState.activeTagId === tag ? '' : tag,
    }))
  }

  onDeleteTask = taskId => {
    this.setState(prevState => ({
      tasksList: prevState.tasksList.filter(task => task.id !== taskId),
    }))
  }

  getDisplayTasks = () => {
    const {tasksList, activeTagId} = this.state
    return activeTagId === ''
      ? tasksList
      : tasksList.filter(task => task.tagId === activeTagId)
  }

  render() {
    const {taskInputValue, activeTaskId, activeTagId} = this.state
    const displayTasks = this.getDisplayTasks()

    return (
      <div className="app-container">
        <CreateTask
          taskInputValue={taskInputValue}
          activeTaskId={activeTaskId}
          tagsList={tagsList}
          onChangeTaskInput={this.onChangeTaskInput}
          onChangeOption={this.onChangeOption}
          onClickAddTask={this.onClickAddTask}
        />
        <TasksList
          tagsList={tagsList}
          activeTagId={activeTagId}
          displayTasks={displayTasks}
          onClickTagId={this.onClickTagId}
          onDeleteTask={this.onDeleteTask}
        />
      </div>
    )
  }
}

export default MyTasks
