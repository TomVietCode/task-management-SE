const API_DOMAIN= "http://localhost:5000/"

export const get = async (path, token) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Gửi token qua headers
    }
  })
  const result = await response.json()
  return result
}

export const post = async (path, data) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  const result = await response.json()
  return result
}

export const patch = async (path, data) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  const result = await response.json()
  return result
}

export const del = async (path) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
  const result = await response.json()
  return result
}