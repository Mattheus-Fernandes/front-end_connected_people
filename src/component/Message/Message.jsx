import style from "./Message.module.css"

function Message({messages}) {
  return (
    <div className={style.error}>
      {messages.map((message, index) => (
        <ul>
          <li>{message}</li>
        </ul>
      ))}
    </div>
  )
}

export default Message