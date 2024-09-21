import { post } from "../utils/request"

export const register = (data) => {
  const result = post("user/register", data)
  return result
}

export const login = (data) => {
  const result = post("user/login", data)
  return result
}