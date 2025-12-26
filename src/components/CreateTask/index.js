import './index.css'

const CreateTask = props => {
  const {
    taskInputValue,
    activeTaskId,
    tagsList,
    onChangeTaskInput,
    onChangeOption,
    onClickAddTask,
  } = props

  return (
    <form className="create-task-container" onSubmit={onClickAddTask}>
      <h1 className="heading">Create a task!</h1>

      <div className="task-input-container">
        <label htmlFor="taskInput" className="label-text">
          Task
        </label>
        <input
          type="text"
          id="taskInput"
          className="task-input-element"
          placeholder="Enter the task here"
          value={taskInputValue}
          onChange={onChangeTaskInput}
        />
      </div>

      <label htmlFor="tagsInput" className="label-text">
        Tags
      </label>
      <select
        id="tagsInput"
        className="select-tag-container"
        value={activeTaskId}
        onChange={onChangeOption}
      >
        {tagsList.map(tag => (
          <option key={tag.optionId} value={tag.optionId}>
            {tag.displayText}
          </option>
        ))}
      </select>

      <button type="submit" className="add-task-btn">
        Add Task
      </button>
    </form>
  )
}

export default CreateTask
