export const api = "http://localhost:5000/api/users/"


export const requestConfig = (method, data, token) => {

  let config

  if(method === "DELETE" || data === null){

    config = {
      method,
      headers: {}
    }

  }else {
    config = {

      method,
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json"
      }

    }
  }

  if(token){

    config.headers.Authorization = `Bearer ${token}`

  }


  return config
}