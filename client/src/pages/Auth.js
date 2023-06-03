import { useRef } from "react";
import s from "./Auth.module.css";



const Auth = () => {
  const textLoginRef = useRef()
  const textPasswordRef = useRef()

  async function Entry() {
    if (textPasswordRef.current.value.length > 2 && textLoginRef.current.value.length > 2) {
      let user = await fetch('/api/userAuth?name=' + textLoginRef.current.value 
        + "&login=" + textLoginRef.current.value + "&password=" + textPasswordRef.current.value, {
        method: 'GET',
      })
      if (user.status === 200) {
        user = await user.json()
        localStorage.setItem("userID", user.id)
        window.location.href = "/projects";
      } else {
        alert("Пользователь не найден")
      }
    } else {
      textLoginRef.current.style.border = "2px solid red";
      textLoginRef.current.style.border = "2px solid red";
    }
  }

  return (
    <div className={s.background_auth}>
      <div className={s.field_back}>
        <div className={s.title}>Welcome back!</div>
        <input
          type="text"
          defaultValue="user1"
          ref={textLoginRef}
          placeholder="login or name"
          className={s.input_text}
        ></input>
        <input
          type="text"
          defaultValue="pass1"
          ref={textPasswordRef}
          placeholder="password"
          className={s.input_text}
        ></input>
        <div onClick={Entry} className={s.button}>
          Entry
        </div>
      </div>
    </div>
  )
}
export default Auth