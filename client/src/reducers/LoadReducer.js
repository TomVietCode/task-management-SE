const LoadReducer = (state = true, action) => {
  switch (action.type) {
    case "LOADING":
      console.log(state)
      return !state
    default:
      return state
  }
}

export default LoadReducer