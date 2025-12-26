import {AiFillDelete} from 'react-icons/ai'

import './index.css'

const TasksList = props => {
  const {tagsList, activeTagId, displayTasks, onClickTagId} = props
  const {onDeleteTask} = props

  return (
    <div className="tags-header-container">
      <h1 className="tags-heading">Tags</h1>

      <ul className="tags-container">
        {tagsList.map(tag => (
          <li className="tags-button-container" key={tag.optionId}>
            <button
              type="button"
              className={
                tag.optionId === activeTagId ? 'active-btn' : 'tag-button'
              }
              onClick={() => onClickTagId(tag.optionId)}
            >
              {tag.displayText}
            </button>
          </li>
        ))}
      </ul>

      <h1 className="tags-heading">Tasks</h1>

      <ul className="tasks-container">
        {displayTasks.length === 0 ? (
          <p className="not-found">No Tasks Added Yet</p>
        ) : (
          displayTasks.map(task => (
            <li className="task-container" key={task.id}>
              <p className="task-head">{task.task}</p>
              <div className="tasks-option-container">
                <p className="task-tag-id">
                  {task.tagId[0].toUpperCase() +
                    task.tagId.slice(1).toLowerCase()}
                </p>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => onDeleteTask(task.id)}
                >
                  <AiFillDelete />
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default TasksList
