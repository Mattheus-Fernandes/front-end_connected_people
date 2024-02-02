import styles from "./Register.module.css"

//Hooks
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"

//Reducer
import { register, reset } from "../../slices/authSlices"

//Component
import Message from "../../component/Message/Message"

const Register = () => {

  //States
  const [name, setName] = useState("")
  const [lastName, setlastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  //Redux state
  const {loading, error} = useSelector(state => state.auth)


  const dispatch = useDispatch()

  const handleSubmit = async (e) => {

    e.preventDefault()

    const user = {

      name, lastName, email, password, confirmPassword

    }

    dispatch(register(user))

  }

  useEffect(() => {
    dispatch(reset())
  }, [dispatch])

  return (
    <div className={styles.register}>
      <form onSubmit={handleSubmit}>
        <h2>Cadastrar</h2>
        <span>Deseja fazer o cadastro para se conectar com outras pessoas ao seu redor?</span>
        {error && <Message messages={error}/>}
        <div className={styles.area}>
          <div>
            <div >
              <label>
                <p>Nome:</p>
                <input
                  type="text"
                  placeholder="Inserir nome"
                  onChange={(e) => setName(e.target.value)}
                  value = {name || ""}
                />
              </label>
            </div>
            <div >
              <label>
                <p>Sobrenome:</p>
                <input
                  type="text"
                  placeholder="Inserir sobrenome"
                  onChange={(e) => setlastName(e.target.value)}
                  value = {lastName || ""}
                />
              </label>
            </div>
            <div >
              <label>
                <p>E-mail:</p>
                <input
                  type="email"
                  placeholder="Inserir email"
                  onChange={(e) => setEmail(e.target.value)}
                  value = {email || ""}
                />
              </label>
            </div>
          </div>
          <div className={styles.division}></div>
          <div>
            <div >
              <label>
                <p>Senha:</p>
                <input
                  type="password"
                  placeholder="Inserir senha"
                  onChange={(e) => setPassword(e.target.value)}
                  value = {password || ""}
                />
              </label>
            </div>
            <div>
              <label>
                <p>Confirma a senha:</p>
                <input
                  type="password"
                  placeholder="Confirme a senha"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value = {confirmPassword || ""}
                />
              </label>
            </div>
          </div>
        </div>
        {!loading && <button>Cadastrar</button>}
        {loading && <button disabled>Aguarde...</button>}
      <p>
        Ja tem cadastro conosco? <Link to="/login">Clique aqui..</Link>
      </p>
      </form>
    </div >
  )
}

export default Register