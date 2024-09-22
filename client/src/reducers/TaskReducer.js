const TaskReducer = (state = true, action) => {
  switch (action.type) {
    case "INIT_TASK":
      return !state
    default:
      return state
  }
}

export default TaskReducer