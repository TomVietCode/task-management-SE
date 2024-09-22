import { get, patch, post } from '../utils/request'

export const getTaskList = async (token, page) => {
  const result = await get(token, `task?page=${page}`)
  return result
}

export const addTask = async (token, path, data) => {
  const result = await post(token, "task/" + path, data)
  return result
}

export const changeStatus = async (token, path, data) => {
  const result = await patch(token, "task/" + path, data)
  return result
}
