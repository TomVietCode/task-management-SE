const TaskReducer = (state = true, action) => {
  switch (action.type) {
    case "INIT_TASK":
      return !state
    case "DELETE_TASK":
      
    default:
      return state
  }
}

export default TaskReducer