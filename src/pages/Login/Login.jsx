import styles from "./Login.module.css"

//Hooks
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import {login, reset} from "../../slices/authSlices"


//Pages
import Message from "../../component/Message/Message"
const Login = () => {

  const {loading, error} = useSelector(state => state.auth)

  //States
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const disptach = useDispatch()

  const handleSubmit = async (e) => {

    e.preventDefault()

    const user = {
      email, password
    }

    disptach(login(user))

  }

  useEffect(() => {
    disptach(reset())
  }, [disptach])

  return (
    <div className={styles.login}>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <span>Deseja se conectar para falar com outras pessoas?</span>
        {error && <Message messages={error}/>}
        <div >
          <label>
            <p>E-mail:</p>
            <input
              type="text"
              placeholder="Inserir o email"
              onChange={(e) => setEmail(e.target.value)}
              value={email || ""}
            />
          </label>
        </div>
        <div>
          <label>
            <p>Senha:</p>
            <input
              type="password"
              placeholder="Inserir a senha"
              onChange={(e) => setPassword(e.target.value)}
              value={password || ""}
            />
          </label>
        </div>
        <button>Login</button>
      </form>
    </div >
  )
}

export default Login