import { post, postPublic } from "../utils/request"

export const register = (data) => {
  const result = post("user/register", data)
  return result
}

export const login = (data) => {
  const result = postPublic("user/login", data)
  return result
}