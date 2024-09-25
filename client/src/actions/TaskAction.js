export const initTask = () => {
  return {
    type: "INIT_TASK",
  }
}

export const deleteTask = (token) => {
  return {
    type: "DELETE_TASK",
    token: token
  }
}
