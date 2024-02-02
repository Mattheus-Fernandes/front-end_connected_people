import { api, requestConfig } from "../utils/config";

const register = async(data) => {

  const config= requestConfig("POST", data)


  try {

    const res = await fetch(api + "/register", config)
                        .then(res => res.json())
                        .catch(err => err)

    if(res){

      localStorage.setItem("user", JSON.stringify(res))

    }

    return res

  }catch(error){
    console.log(error)
  }

}


const logout = () => {

  localStorage.removeItem("user")

}


const authService = {
  register,
  logout
}

export default authService