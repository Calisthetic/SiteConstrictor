import { useRef } from "react";
import s from "./Pages.module.css"



const Auth = () => {
  const textLoginRef = useRef()
  const textPasswordRef = useRef()

  async function Entry() {
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
  }

  return (
    <div className={s.background}>
      <div className={s.field_back}>
        <input type="text" defaultValue="user1" ref={textLoginRef} placeholder="login or name" className={s.input}></input>
        <input type="text" defaultValue="pass1" ref={textPasswordRef} placeholder="password" className={s.input}></input>
        <div onClick={Entry} className={s.button}>Entry</div>
      </div>
    </div>
  )
}
export default Auth