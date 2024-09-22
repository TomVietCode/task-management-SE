import { get } from '../utils/request'

export const getTaskList = async (token) => {
  const result = await get("task", token)
  return result
}