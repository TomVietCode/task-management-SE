import { get, patch } from '../utils/request'

export const getTaskList = async (token) => {
  const result = await get(token, "task")
  return result
}

export const changeStatus = async (token, path, data) => {
  const result = await patch(token, "task/" + path, data)
  return result
}