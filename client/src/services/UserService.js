import { post } from "../utils/request"

export const register = (data) => {
  const result = post("api/v1/users/register", data)
  return result
}